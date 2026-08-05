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

PAGE = [
    ("02-hero", "top"),
    ("03-proof", "proof"),
    ("12-approach", "approach"),
    ("04-work", "work"),
    ("07-studio", "team"),
    ("06-map", "locations"),
    ("08-insights", "insights"),
    ("09-close", "contact"),
]
APPENDIX = [("00-system", "设计系统基线"),
            ("01-header", "Header 现状与提案对照"),
            ("10-mobile", "移动端 390px")]

def scope_css(css: str, scope: str) -> str:
    """Prefix selectors with `#scope`, preserving nested conditional at-rules."""
    out = []
    cursor = 0

    while cursor < len(css):
        opening = css.find("{", cursor)
        if opening == -1:
            if css[cursor:].strip():
                out.append(css[cursor:].strip())
            break

        prelude = css[cursor:opening].strip()
        depth = 1
        quote = None
        comment = False
        i = opening + 1

        while i < len(css) and depth:
            pair = css[i:i + 2]
            char = css[i]
            if comment:
                if pair == "*/":
                    comment = False
                    i += 2
                    continue
            elif quote:
                if char == "\\":
                    i += 2
                    continue
                if char == quote:
                    quote = None
            elif pair == "/*":
                comment = True
                i += 2
                continue
            elif char in {'"', "'"}:
                quote = char
            elif char == "{":
                depth += 1
            elif char == "}":
                depth -= 1
            i += 1

        body = css[opening + 1:i - 1]
        clean_prelude = re.sub(r"^(?:\s|/\*.*?\*/)*", "", prelude, flags=re.S)

        if clean_prelude.startswith(("@media", "@supports", "@container", "@layer")):
            lead = prelude[:prelude.find(clean_prelude)]
            nested = scope_css(body, scope)
            out.append(f"{lead}{clean_prelude} {{\n{nested}\n}}")
        elif clean_prelude.startswith("@"):
            out.append(f"{prelude} {{{body}}}")
        elif prelude:
            scoped = ", ".join(
                f"#{scope} {selector.strip()}"
                for selector in prelude.split(",")
                if selector.strip()
            )
            out.append(f"{scoped} {{{body}}}")

        cursor = i

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

for name, sid in PAGE:
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
  .page {{ width: 100%; margin: 0; }}
  .pagesec {{ position: relative; }}
  /* the header lives inside the hero section; make it behave like a real one */
  #top .bar {{
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(10, 10, 10, 0.82);
    backdrop-filter: blur(14px);
  }}
  #top {{ z-index: 40; }}
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
