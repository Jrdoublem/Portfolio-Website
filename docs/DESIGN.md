# Content and design decisions

## Source review before implementation
Both PDFs were reviewed: the one-page English resume and the 25-page Thai portfolio, including page thumbnails and relevant full-page evidence. The resume's visual layout is authoritative where extraction reorders text. Its motor-monitoring description and Best Project award belong to SITTUI in 2026; factory dust monitoring belongs to VT Innovative Alliances in June–September 2025. Contact email follows the resume (spumail.net), as requested, rather than the portfolio's Gmail address. No social URL is inferred from a display name.

## Information architecture
Home → About → Featured Projects → Skills → Experience → Awards → Education → Activities → Certificates → Contact. Sticky navigation provides every requested anchor; Education is linked from About. Projects appear early to make technical work immediately discoverable.

## Design system
Engineering editorial: spacious dark-navy canvas, restrained cyan accents, thin technical grid, oversized Space Grotesk headings, Inter body, JetBrains Mono labels. Surfaces #0d1b2a; foreground #f8fafc; secondary text #a6b5c8; accent #63e0ef. Rounded 16–24px cards. Main content width 1200px. Responsive single-column cards and hamburger navigation. Motion uses Framer Motion, with reduced-motion preferences respected.

## Component structure
App composes Navbar, Hero, About, Projects/ProjectCard/ProjectModal, Skills, Experience, Awards, Education, Activities, Certifications, Contact, Footer. Shared SectionHeading, Reveal, and Tags keep typography and motion consistent. Content lives in src/data/portfolio.js; asset paths and optional social links live there too.

## Evidence map and editorial choices
- Profile, GPA, scholarship, skills, internship intent, contact: Resume p1, Portfolio pp1–2,9.
- Energy Audit System: Resume p1, Portfolio p7.
- QuakeLink and three awards: Resume p1, Portfolio pp16–17,19–23. Use award years from Resume and award evidence, not the inconsistent activity date on Portfolio p20. Portfolio p22's silver-medal caption repeats another competition's name; its photo and Resume identify I-New Gen 2026.
- Intelligent Motor Condition Monitoring Platform, SITTUI, 2026, Best Project: Resume p1 visual layout, Portfolio p21.
- Factory dust monitoring / VT Innovative Alliances: Resume p1 visual layout, Portfolio p7.
- AR Silk Road Game@AYUTTHAYA (Silvora), 2025: Portfolio p12. No unverified development stack or individual role beyond contributor.
- Leadership: Resume p1, Portfolio p5. Public speaking / AIoT event: Portfolio p18. Research presentation: Portfolio p20.
- Certifications: Resume p1 and Portfolio p24. Certificate images are omitted from public assets because they include identifying credential details; factual certification summaries are shown.
- Full address, transcript, health information and conduct certificate are excluded from website assets. Downloadable Resume is the user-provided original and retains its original content.

No proficiency percentages, fabricated links, performance metrics, specific project frameworks, or speculative skills are added. Project images are extracted from the supplied PDFs and captioned as actual events, not software screenshots.
