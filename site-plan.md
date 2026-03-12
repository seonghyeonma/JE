# JE Labs Website Conversion Notes

## 1. Current deck analysis
- The original `index.html` is a slide player that loads `slides/slide-*.html` into fixed 1280x720 iframes.
- The messaging is strong, but the experience is presentation-first: section dividers, duplicated chrome, fixed-height layouts, and a duplicated PublicAI case-study slide.
- The content that matters is already there: positioning, founder credibility, capabilities, proof, insights, and contact.

## 2. What stayed
- Core positioning: "Strategic Growth Partner for Frontier Tech Builders"
- The four-part growth thesis: Designing, Leveraging, Creating, Sustaining
- Founder credibility and specialist expertise
- Service pillars: Strategy & Narrative, Distribution, Ecosystem
- Media, KOL, developer ecosystem, ambassador, and community growth material
- Case study metrics and Greenbooks / insight themes
- Contact channels: `Evie@jelabs.xyz` and `@0xEvieYa`

## 3. What was restructured
- Removed slide-only elements such as table of contents, section divider pages, progress UI, and repeated "system active" chrome
- Merged repetitive service slides into clearer website sections
- Turned proof into concise case-study cards instead of separate presentation beats
- Reframed Greenbooks as a future resource / insights section
- Replaced fixed slide dimensions with a responsive single-page homepage

## 4. Current homepage structure
1. Immersive editorial hero
2. Metrics strip
3. Studio / manifesto section
4. Approach / momentum marketing
5. Capability stack and network
6. Leadership and expertise
7. Case studies
8. Signals / insights
9. Contact CTA

## 5. Where to edit
- Main page structure: `index.html`
- Design tokens and reusable styling: `styles/main.css`
- Small interactions and mobile navigation: `scripts/main.js`
- Original pitch-deck source slides: `slides/`

## 6. Figma refinement workflow
1. Review the live homepage in a browser and note what feels too dense, too quiet, or too loose.
2. Import or capture the page into Figma as a frame, then keep the same section order from `index.html`.
3. Start by refining design tokens first: color palette, type scale, spacing scale, border radius, shadows.
4. Adjust one section at a time in Figma, then mirror those changes back into the CSS variables and component classes.
5. Keep components aligned with code: use frames for `panel`, `button`, `stat-card`, `case-card`, `contact-link`, and the editorial section breaks.
6. If you want a tighter code-to-design loop next, Codex can capture this page into Figma and help translate refined frames back into code.
