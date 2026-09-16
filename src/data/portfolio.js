const asset = path => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  firstName: 'Jirasudanee', lastName: 'Oakkharasinthirawut',
  email: 'Jirasudanee.oak@spumail.net', phone: '096-636-3393', phoneHref: '+66966363393',
  location: 'Bangkok, Thailand', university: 'Sripatum University',
  portrait: asset('images/profile.webp'), resume: asset('resume/Jirasudanee_Resume.pdf'),
  // Add verified URLs here to show social links. Empty values are never rendered.
  github: '', linkedin: '',
};

export const navigation = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Awards', 'Activities', 'Certificates', 'Contact'];

export const projects = [
  { id: 'quakelink', number: '01', title: 'QuakeLink', category: 'IoT · Research', year: '2025–2026', image: asset('images/quakelink.webp'), imageAlt: 'QuakeLink team presenting their project at the I-New Gen exhibition', featured: true,
    subtitle: 'Connecting sensors. Creating awareness.',
    description: 'An IoT earthquake monitoring and alert system with real-time notifications through a mobile application.',
    role: 'Team contributor & research co-author',
    contribution: 'Contributed to system development, co-authored related research, prepared exhibition materials, and presented the project in English and to competition judges.',
    tags: ['IoT', 'Real-time monitoring', 'Research'], awards: ['Silver Medal · I-New Gen 2026', 'Second Runner-up · ASCN & SUN Thailand 2026', 'Best Paper · EENET 2026'], source: 'Resume p. 1 · Portfolio pp. 16–17, 19–23' },
  { id: 'energy', number: '02', title: 'Energy Audit System', category: 'Frontend · Industry', year: '2026', image: asset('images/energy-audit.webp'), imageAlt: 'Industry project team presenting the Energy Audit System at SID-EN',
    description: 'Frontend interfaces for energy audits and energy-use assessment, developed through an industry-partnered program.', role: 'Frontend development · SID-EN',
    contribution: 'Developed user interfaces and incorporated user requirements and team feedback in a real industry working environment through the Innovator Journey Program.',
    tags: ['Frontend development', 'Energy assessment'], awards: [], source: 'Resume p. 1 · Portfolio p. 7' },
  { id: 'motor', number: '03', title: 'Intelligent Motor Condition Monitoring Platform', category: 'AI · Industrial IoT', year: '2026', image: asset('images/motor-monitoring.webp'), imageAlt: 'SITTUI team receiving the Best Project award at Industrial IoT Tech-Creator Challenges',
    description: 'An AI and Industrial IoT platform for monitoring motor condition and supporting maintenance planning.', role: 'Team member · SITTUI',
    contribution: 'Contributed to the team’s development of a motor condition monitoring and maintenance-planning platform.',
    tags: ['AI', 'Industrial IoT', 'Condition monitoring'], awards: ['Best Project · Industrial IoT Tech-Creator Challenges 2026'], source: 'Resume p. 1 (visual layout) · Portfolio p. 21' },
  { id: 'silvora', number: '04', title: 'AR Silk Road Game@AYUTTHAYA', category: 'AR · Cultural innovation', year: '2025', image: asset('images/silvora.webp'), imageAlt: 'Silvora project team during their Ayutthaya field visit',
    description: 'A collaborative game project connecting technology with Ayutthaya’s culture and history.', role: 'Project contributor · Silvora',
    contribution: 'Participated in developing the project and in on-site testing in Ayutthaya during October 2025.',
    tags: ['Augmented reality', 'Teamwork', 'Field testing'], awards: ['National Best Practice recognition · MHESI'], source: 'Portfolio p. 12' },
];

export const skillGroups = [
  { icon: 'code', title: 'Programming', items: ['C', 'C++', 'Python', 'JavaScript', 'SQL'] },
  { icon: 'web', title: 'Web development', items: ['HTML', 'CSS', 'Frontend development'] },
  { icon: 'database', title: 'Databases', items: ['MySQL', 'MongoDB'] },
  { icon: 'cpu', title: 'Hardware & IoT', items: ['Circuit design', 'Sensor integration', 'Microcontroller programming', 'IoT development'] },
  { icon: 'terminal', title: 'Hardware description', items: ['Verilog'] },
  { icon: 'people', title: 'How I work', items: ['Team communication', 'Collaboration', 'Leadership & coordination', 'Critical thinking', 'Problem solving'] },
];

export const experience = [
  { year: '2026', date: 'May 2026 – Present', title: 'Frontend Development', organization: 'SID-EN · Innovator Journey Program', description: 'Developing the Energy Audit System’s frontend for energy-use assessment, translating user requirements and team feedback into interface improvements.', tags: ['Frontend', 'Industry collaboration'] },
  { year: '2025', date: 'June – September 2025', title: 'Industry Project Participant', organization: 'VT Innovative Alliances Co., Ltd. · Innovator Journey', description: 'Collaborated on a factory dust-monitoring device to support industrial green transformation, gaining hands-on experience with industry teams and project delivery.', tags: ['IoT', 'Industrial monitoring', 'Teamwork'] },
  { year: '2025', date: '2025', title: 'President, AIoT Club', organization: 'Sripatum University', description: 'Led introductory programming sessions for first-year students. Coordinated task allocation, teaching materials, equipment, and IoT demonstrations for university activities.', tags: ['Leadership', 'Teaching', 'Coordination'] },
];

export const awards = [
  { title: 'Silver Medal', event: 'I-New Gen Award', year: '2026', project: 'QuakeLink', icon: 'medal' },
  { title: 'Second Runner-up', event: 'ASCN & SUN Thailand', year: '2026', project: 'QuakeLink', icon: 'trophy' },
  { title: 'Best Paper', event: 'EENET · Computer and Information Technology', year: '2026', project: 'QuakeLink research', icon: 'paper' },
  { title: 'Best Project', event: 'Industrial IoT Tech-Creator Challenges', year: '2026', project: 'Intelligent Motor Condition Monitoring Platform', icon: 'trophy' },
];

export const activities = [
  { title: 'Leading the next generation', category: 'AIoT Club · 2025', image: asset('images/aiot-club.webp'), alt: 'Jirasudanee teaching an introductory programming session', text: 'Planned and taught introductory programming sessions for first-year students as AIoT Club president.' },
  { title: 'Taking research to the stage', category: 'EENET · May 2026', image: asset('images/research.webp'), alt: 'Jirasudanee presenting QuakeLink research at EENET', text: 'Presented co-authored research on a real-time earthquake monitoring and mobile alert network.' },
  { title: 'Connecting the AIoT community', category: 'AIoT Foresight & Transformation · March 2026', image: asset('images/aiot-event.webp'), alt: 'Presenters at the AIoT Foresight and Transformation event', text: 'Served as emcee at an event marking academic cooperation between SPU and the Thai IoT Association.' },
];

export const certifications = [
  { title: 'IT Specialist: Cybersecurity', issuer: 'Certiport', year: '2024', icon: 'shield' },
  { title: 'ICDL Certificate', issuer: 'Spreadsheets · Microsoft Excel 2016', year: '2025', icon: 'certificate' },
];
