# Design QA - Work case-study redesign V5

## Review target

- Source section: `mock/04-work.html`.
- Generated page: `mock/full-page.html`.
- Desktop render: `img/04-work.png`.
- Mobile checks: `img/qa/work-carousel-mobile-v5.png` and `img/qa/work-carousel-mobile-cases-v5.png`.
- Theme: JE Labs dark brand surface with one mint accent.

## Design read

This is a premium case-study section for frontier-technology decision makers. It needs Attentive's result depth and UNRVLD's disciplined horizontal browsing while keeping every case structurally comparable.

- Redesign mode: preserve content and IA, replace the case layout.
- `DESIGN_VARIANCE 6`: one repeatable case system with a controlled horizontal rhythm.
- `MOTION_INTENSITY 4`: directional aggregate canvas, restrained image hover and user-controlled carousel movement.
- `VISUAL_DENSITY 4`: gallery spacing with attached evidence, not dashboard cards.

## Official reference review

The user supplied Attentive and UNRVLD as direct visual references. The redesign was also checked against six additional official case-study pages.

| Official reference | Useful pattern | Decision for JE Labs |
|---|---|---|
| [Attentive](https://www.attentive.com/case-studies) | Repeatable customer story structure with prominent business outcomes | Every case uses the same story and metric anatomy |
| [UNRVLD](https://www.unrvld.com/) | Equal media frames in a user-controlled horizontal work track | Desktop shows two cases plus a preview of the third |
| [Stripe](https://stripe.com/customers) | Quantified outcomes stay attached to each customer | All three metrics remain inside each case |
| [Work & Co](https://work.co/work) | Project imagery and names do most of the work | Case-number overlays and UI-style chips are removed |
| [NoGood](https://nogood.io/results/) | Growth figures are primary evidence | Metric type remains mint and monospace |
| [Instrument](https://www.instrument.com/home) | A consistent work system lets the project media supply visual difference | All three cases use one 16:9 media ratio |
| [Vercel](https://vercel.com/customers) | Outcome-led titles and concise metadata | One-sentence results remain short and direct |
| [Google Cloud](https://cloud.google.com/customers) | Featured stories precede a broader evidence set | Work opens with aggregate impact, then moves into cases |

## Implemented hierarchy

1. `Work / What the system produced` remains the section heading.
2. Aggregate impact stays directly below the heading and remains part of Work.
3. The directional data-flow artwork retains its left-to-right motion.
4. `100+`, `100M+`, `1,000+`, and `15` are now static `#06F5B7`; the text gradient animation was removed.
5. `Results for frontier tech brands` introduces a horizontal work track with explicit previous and next controls.
6. PublicAI, MOSS AI and SURF AI use equal widths, equal 16:9 media frames and one clearly bounded card structure.
7. Each case now reads in the order company context, JE Labs outcome, a self-contained three-row results panel, then one plain-text scope line.
8. Desktop keeps the original 24px track gap and shows two full cases plus a visible portion of the third. Mobile keeps a 16px gap and an 88vw scroll-snap card, so separation comes from the card design rather than extra whitespace.
9. Navigation works with buttons, touch scrolling and keyboard arrow keys. Buttons disable correctly at both ends.

## Fidelity surfaces

- **Brand:** off-black surfaces, Inter and monospace, `#06F5B7`, 12px media radii, no shadows or outer glow.
- **Content:** every approved aggregate result and all nine case-level outcomes are preserved.
- **Images:** real supplied/project assets remain in use; no CSS-built fake screenshots were introduced.
- **Motion:** the aggregate canvas runs only while near the viewport. `prefers-reduced-motion` removes it and changes carousel movement to instant. Image hover animates only transform and filter.
- **Accessibility:** controls have explicit labels and visible focus treatment. The track is keyboard focusable, arrow-key browsable and uses semantic `article`, `h3`, `ul`, and `strong` structure.

## Visual findings

- The prior asymmetric gallery made comparison harder because image scale and metric alignment changed by case.
- V6 reads as one curated work collection while each customer remains a self-contained case.
- The horizontal edge preview makes the third case discoverable without autoplay or page-scroll hijacking.
- Company context now appears before the engagement outcome, so a reader does not need prior knowledge of PublicAI, MOSS AI or SURF AI.
- The three-row inset results panel keeps metrics immediately scannable and visually attached to the correct customer.
- Real photography creates visual variation while the component anatomy stays stable.

## Checks

- [x] Preserve `#work` and the page order.
- [x] Preserve all aggregate and case metrics.
- [x] Remove animated gradient text from aggregate figures.
- [x] Keep aggregate figures static mint green.
- [x] Replace the asymmetric featured-and-secondary hierarchy.
- [x] Use one consistent case anatomy without a static three-column grid.
- [x] Keep the compact desktop and mobile track gaps; create separation inside each case instead.
- [x] Add verified company context before every engagement outcome.
- [x] Group each customer’s metrics in its own three-row results panel.
- [x] Add visible next-case preview and explicit controls.
- [x] Remove labels over images.
- [x] Add meaningful image alt text.
- [x] Add desktop and mobile scroll-snap behavior.
- [x] Add keyboard navigation and correct disabled states.
- [x] Honor reduced motion.
- [x] Rebuild the full-page mock from the section source.
- [x] Render and review desktop and mobile layouts.

final result: passed
