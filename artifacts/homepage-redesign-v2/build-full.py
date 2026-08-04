#!/usr/bin/env python3
"""Stitch the per-section mockups into one continuous page: mock/full-page.html

Each section file keeps its own <style> block, so class names collide across
files (.head, .row, .card, .glow ...). We scope every rule to that section's
wrapper id before concatenating.

Run:  python3 build-full.py
"""
import re
import pathlib

HERE = pathlib.Path(__file__).parent
MOCK = HERE / "mock"

PAGE = ["02-hero", "03-proof", "12-approach", "04-work", "05-services",
        "06-map", "07-studio", "08-insights", "09-close"]
APPENDIX = [("00-system", "设计系统基线"),
            ("01-header", "Header 现状与提案对照"),
            ("10-mobile", "移动端 390px")]

RULE = re.compile(r"([^{}]+)\{([^{}]*)\}", re.S)


def scope_css(css: str, scope: str) -> str:
    """Prefix every selector in `css` with `#scope`. No at-rules present."""
    out = []
    for m in RULE.finditer(css):
        sels, body = m.group(1).strip(), m.group(2)
        if not sels or sels.startswith("@"):
            out.append(m.group(0))
            continue
        scoped = ", ".join(f"#{scope} {s.strip()}" for s in sels.split(",") if s.strip())
        out.append(f"{scoped} {{{body}}}")
    return "\n".join(out)


def load(name: str):
    raw = (MOCK / f"{name}.html").read_text()
    css = "\n".join(re.findall(r"<style>(.*?)</style>", raw, re.S))
    body = re.sub(r"<style>.*?</style>", "", raw, flags=re.S)
    body = re.sub(r"<meta[^>]*>|<link[^>]*>", "", body)
    # drop the caption bar; it only exists to label the standalone renders
    body = re.sub(r'<div class="caption">.*?</div>\s*', "", body, flags=re.S)
    # .frame is the render harness, not part of the design
    body = body.replace('<div class="frame">', "", 1)
    body = body.rstrip()
    if body.endswith("</div>"):
        body = body[: -len("</div>")]
    return css, body


parts_css, parts_html = [], []

for i, name in enumerate(PAGE):
    sid = f"s{i}-{name.split('-', 1)[1]}"
    css, body = load(name)
    parts_css.append(f"/* ---- {name} ---- */\n" + scope_css(css, sid))
    parts_html.append(f'<div id="{sid}" class="pagesec">{body}\n</div>')

app_css, app_html = [], []
for name, label in APPENDIX:
    sid = "apx-" + name.split("-", 1)[1]
    css, body = load(name)
    app_css.append(f"/* ---- {name} ---- */\n" + scope_css(css, sid))
    app_html.append(
        f'<p class="apxlabel">{label}</p>\n<div id="{sid}" class="pagesec">{body}\n</div>'
    )

html = f"""<!doctype html>
<meta charset="utf-8" />
<title>JE Labs homepage redesign v2 / full page</title>
<link rel="stylesheet" href="base.css" />
<style>
  html {{ scroll-behavior: smooth; }}
  body {{ overflow-x: auto; }}
  .page {{ width: 1440px; margin: 0 auto; }}
  .pagesec {{ position: relative; }}
  /* the header lives inside the hero section; make it behave like a real one */
  #s0-hero .bar {{
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(10, 10, 10, 0.82);
    backdrop-filter: blur(14px);
  }}
  #s0-hero {{ z-index: 40; }}
  .apxdiv {{
    margin: 120px 0 0;
    padding: 26px 48px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: var(--ink-sunk);
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-3);
  }}
  .apxlabel {{
    font-family: var(--mono);
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-3);
    margin: 64px 0 8px;
    padding: 0 48px;
  }}
{chr(10).join(parts_css)}
{chr(10).join(app_css)}
</style>

<div class="page">
{chr(10).join(parts_html)}

  <div class="apxdiv">Appendix / 附录：以下不是首页内容</div>
{chr(10).join(app_html)}
  <div style="height: 96px"></div>
</div>
"""

(MOCK / "full-page.html").write_text(html)
print(f"mock/full-page.html  {len(html) / 1024:.0f} KB  "
      f"({len(PAGE)} sections + {len(APPENDIX)} appendix)")
