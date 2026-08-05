# Design QA - Work case-study redesign V4

## Review target

- Source section: `mock/04-work.html`.
- Generated page: `mock/full-page.html`.
- Desktop render: `img/04-work.png`.
- Reference comparison board: `img/qa/work-cases-comparison-v4.png`.
- Mobile check: `img/qa/work-cases-mobile-v4.png`.
- Theme: JE Labs dark brand surface with one mint accent.

## Design read

This is a premium case-study section for frontier-technology decision makers. It needs Attentive's result depth and UNRVLD's media impact without hiding two of the three available cases in a carousel.

- Redesign mode: preserve content and IA, replace the case layout.
- `DESIGN_VARIANCE 8`: one featured case plus an offset secondary pair.
- `MOTION_INTENSITY 4`: directional aggregate canvas and restrained image hover only.
- `VISUAL_DENSITY 4`: gallery spacing with attached evidence, not dashboard cards.

## Official reference review

The user supplied Attentive and UNRVLD as direct visual references. The redesign was also checked against six additional official case-study pages.

| Official reference | Useful pattern | Decision for JE Labs |
|---|---|---|
| [Attentive](https://www.attentive.com/case-studies) | One large customer image with oversized business outcomes | PublicAI becomes the featured case |
| [UNRVLD](https://www.unrvld.com/work) | Media-first work gallery with strong horizontal rhythm | Secondary cases use different widths and vertical offsets |
| [Stripe](https://stripe.com/customers) | Quantified outcomes stay attached to each customer | All three metrics remain inside each case |
| [Work & Co](https://work.co/work) | Project imagery and names do most of the work | Case-number overlays and UI-style chips are removed |
| [NoGood](https://nogood.io/results/) | Growth figures are primary evidence | Metric type remains mint and monospace |
| [Instrument](https://www.instrument.com/home) | Project media changes scale instead of repeating one template | PublicAI, MOSS AI and SURF AI use different image proportions |
| [Vercel](https://vercel.com/customers) | Outcome-led titles and concise metadata | One-sentence results remain short and direct |
| [Google Cloud](https://cloud.google.com/customers) | Featured stories precede a broader evidence set | Work opens with aggregate impact, then moves into cases |

## Implemented hierarchy

1. `Work / What the system produced` remains the section heading.
2. Aggregate impact stays directly below the heading and remains part of Work.
3. The directional data-flow artwork retains its left-to-right motion.
4. `100+`, `100M+`, `1,000+`, and `15` are now static `#06F5B7`; the text gradient animation was removed.
5. PublicAI uses a `1.25 : 0.75` image-and-evidence layout with vertically stacked outcomes.
6. MOSS AI and SURF AI use a `1.12 : 0.88` offset pair. SURF AI starts lower to create gallery rhythm.
7. Case-number overlays and bordered chips are removed. Scope is shown as plain metadata outside the images.
8. Mobile collapses all three cases to one column and removes the vertical offset.

## Fidelity surfaces

- **Brand:** off-black surfaces, Inter and monospace, `#06F5B7`, 12px media radii, no shadows or outer glow.
- **Content:** every approved case result and all twelve case-level outcomes are preserved.
- **Images:** real supplied/project assets remain in use; no CSS-built fake screenshots were introduced.
- **Motion:** the aggregate canvas runs only while near the viewport. `prefers-reduced-motion` removes it. Image hover animates only transform and filter.
- **Accessibility:** case images now have descriptive alt text; the scope groups have accessible labels; semantic `article`, `h3`, `ul`, and `strong` structure is retained.

## Visual findings

- The old three-row template read as a service list. V4 reads as a curated body of work.
- PublicAI has a clear flagship role without removing or hiding the other two cases.
- MOSS AI and SURF AI are visibly related but not clones.
- Metrics remain immediately scannable and attached to the correct customer.
- Removing the global dim-on-hover behavior prevents non-hovered evidence from becoming unreadable.

## Checks

- [x] Preserve `#work` and the page order.
- [x] Preserve all aggregate and case metrics.
- [x] Remove animated gradient text from aggregate figures.
- [x] Keep aggregate figures static mint green.
- [x] Remove equal repeated case rows.
- [x] Avoid a three-equal-card layout.
- [x] Avoid hiding cases in a carousel.
- [x] Remove labels over images.
- [x] Add meaningful image alt text.
- [x] Add a mobile single-column fallback.
- [x] Honor reduced motion.
- [x] Rebuild the full-page mock from the section source.
- [x] Render and review the desktop section.

final result: passed
