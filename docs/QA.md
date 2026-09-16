# Validation — 16 September 2026

## Build and content
- Production build passed using React 19 / Vite 7 / Node 24.
- Compared resume text with its rendered page; corrected extraction-order confusion between motor monitoring and factory dust monitoring.
- Reviewed the 25-page portfolio, selected relevant engineering/leadership content, and excluded unrelated health/conduct/transcript pages.
- Source map, naming/year inconsistencies and chosen evidence are recorded in DESIGN.md.
- Original and downloadable resume SHA-256 hashes match.
- No invented GitHub/LinkedIn links, proficiency percentages, project stack, or result metrics.

## Browser checks
Tested in the Codex Chromium-based browser:
- Widths 320, 390, 768, 1024, and 1440 px. No remaining horizontal overflow. Fixed background-grid overflow found at tablet/laptop widths.
- Visually reviewed desktop Hero and Awards, mobile Hero, Projects and Contact.
- All eight displayed images loaded; no broken local anchor targets; exactly one h1.
- Mobile navigation opens, follows an anchor, and closes. Section highlight verified for Projects, Awards and Contact.
- Opened all four project dialogs and verified corresponding content.
- Escape closes the dialog and returns focus to its invoking button. Native modal dialog supplies focus containment.
- Email and phone links use the resume's address and normalized Thai phone URI. These open the visitor's configured external apps; no test email/call was sent.
- No browser console warnings/errors observed.
- Local HTTP entrypoint responds 200.
- Language control switches all navigation, section, project modal, accessibility and image-alt copy between English and Thai.
- Theme control switches between dark and light color systems. Language and theme persist after reload.
- Rechecked the updated controls at 390, 1024, and 1440 px in Thai/light and English/dark combinations; no horizontal overflow or browser warnings/errors observed.

## Accessibility and motion
- Explicit link/button labels, semantic landmarks/headings, image alt text, skip link, visible keyboard focus, hamburger aria-expanded/aria-controls.
- Reduced motion is handled in CSS and Framer Motion's useReducedMotion (source review; OS preference was not changed during testing).
- Representative text contrast ratios: body 8.34:1, cyan/button 12.12:1, metadata 5.16:1, tags 9.27:1, awards 10.41:1, footer 6.08:1. These are flat-color checks, not a full third-party accessibility certification.
- Fonts hosted locally; images converted to WebP; below-fold images lazy-loaded; font imports restricted to Latin glyph sets with Tahoma fallback.

## Scope of validation
No separate Safari/Firefox/device-lab run or automated screen-reader audit was performed. Resume download preserves the supplied original, including its original address; the webpage itself shows only Bangkok, Thailand.
