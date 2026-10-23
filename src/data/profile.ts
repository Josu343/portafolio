export const profile = {
  name: 'Marco Antonio Mamani Mamani',
  shortName: 'Marco Mamani',
  role: 'Desarrollador Full Stack',
  location: 'El Alto, Bolivia',
  email: 'sheldoners2@gmail.com',
  phone: '78844351',
  phoneLink: '+59178844351',
  summary: 'Desarrollo aplicaciones web y sistemas de gestión con Angular, NestJS, TypeScript, Prisma y PostgreSQL. Conecto interfaces, APIs REST y bases de datos para construir soluciones empresariales.',
  about: 'Mi experiencia abarca el análisis, diseño, desarrollo e implementación de aplicaciones web, la integración entre frontend y backend y la administración de bases de datos relacionales. Combino buenas prácticas de ingeniería con una mentalidad orientada a resultados, resolución de problemas y trabajo en equipo.',
};

export const projects = [
  {
    number: '01',
    title: 'Sistema de reservas',
    category: 'APLICACIÓN EMPRESARIAL',
    description: 'Desarrollo de un sistema de reservas en el contexto de mi experiencia como desarrollador Full Stack en HELTASTECH.',
    detail: 'Participación en el desarrollo de aplicaciones empresariales con tecnologías modernas para frontend y backend.',
    stack: ['Angular', 'NestJS', 'TypeScript', 'Prisma ORM'],
    note: 'En fase de conclusión según el CV de junio de 2026.',
    kind: 'reservations',
  },
  {
    number: '02',
    title: 'Gestión de historiales clínicos',
    category: 'SOFTWARE PARA SALUD',
    description: 'Implementación de software para la administración de historiales clínicos en un centro médico de El Alto.',
    detail: 'Experiencia de desarrollo realizada entre junio y noviembre de 2024.',
    stack: ['Angular', 'Java', 'PostgreSQL'],
    note: 'Proyecto de experiencia laboral · Centro Médico.',
    kind: 'clinical',
  },
];

export const experience = [
  {
    company: 'HELTASTECH', role: 'Desarrollador Full Stack', location: 'La Paz', date: 'Sep 2025 — Actualidad',
    description: 'Participación en el desarrollo de aplicaciones empresariales para frontend y backend. Desarrollo de un sistema de reservas.',
    tags: ['Angular', 'TypeScript', 'SCSS', 'NestJS', 'Prisma ORM', 'Git'],
  },
  {
    company: 'Caminos y Telecomunicaciones', role: 'Técnico de mantenimiento', location: 'La Paz', date: 'Mar — Jul 2025',
    description: 'Instalaciones y servicios de telecomunicaciones en una empresa que trabaja con Tigo, en el área de cable coaxial HFC y fibra óptica FTTH.',
    tags: ['HFC', 'FTTH', 'Telecomunicaciones'],
  },
  {
    company: 'UMSA · DPLAN', role: 'Área de Sistemas Informáticos', location: 'La Paz', date: 'Abr — Dic 2024',
    description: 'Mantenimiento, edición y soporte técnico para las divisiones de Desarrollo Organizacional, Planificación Estratégica y Evaluación y Acreditación.',
    tags: ['Soporte técnico', 'Mantenimiento', 'Sistemas'],
  },
  {
    company: 'Centro Médico', role: 'Desarrollador', location: 'El Alto', date: 'Jun — Nov 2024',
    description: 'Implementación de software para la administración de historiales clínicos.',
    tags: ['Angular', 'Java', 'PostgreSQL'],
  },
];

export const stack = [
  { title: 'Frontend', subtitle: 'Interfaces y experiencia web', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'React'] },
  { title: 'Backend y datos', subtitle: 'Lógica, integración y persistencia', items: ['NestJS', 'Java', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'MySQL', 'MongoDB', 'APIs REST'] },
  { title: 'Herramientas y métodos', subtitle: 'Colaboración y calidad', items: ['Git', 'Scrum', 'Kanban', 'Jira', 'Trello', 'Unit Testing', 'Selenium'] },
  { title: 'Conocimientos complementarios', subtitle: 'Infraestructura y formación continua', items: ['Docker', 'Kubernetes', 'CI/CD', 'Python', 'C++', 'Linux', 'Windows Server', 'VMware', 'VirtualBox'] },
];

export const education = [
  { institution: 'Universidad Mayor de San Andrés', title: 'Licenciatura en Informática: Ingeniería de Sistemas', detail: 'UMSA · 2025', type: 'FORMACIÓN UNIVERSITARIA' },
  { institution: 'Formación de postgrado', title: 'Diplomado en Arquitectura Web Full Stack', detail: 'Arquitectura y desarrollo web', type: 'DIPLOMADO' },
];

export const courses = [
  { category: 'Frontend', name: 'Desarrollador Front-End', featured: true },
  { category: 'Frontend', name: 'JavaScript · 8 módulos' },
  { category: 'Frontend', name: 'Cómo crear enlaces en imágenes HTML' },
  { category: 'Frontend', name: 'Creación y reproductor de videos con HTML' },
  { category: 'Frontend', name: 'Creación de páginas web en WordPress' },
  { category: 'Frontend', name: 'Angular FireStore Workshop', featured: true },
  { category: 'Frontend', name: 'Automatizaciones con IA en Angular' },
  { category: 'Backend', name: 'Desarrollador Back-End' },
  { category: 'Backend', name: 'Desarrollador PHP orientado a objetos' },
  { category: 'Backend', name: 'Desarrollo de aplicaciones web' },
  { category: 'Backend', name: 'Desarrollo de un sistema tipo Instagram con Laravel 9' },
  { category: 'Backend', name: 'JSB-001 Desarrollo de aplicaciones web con Spring Boot', featured: true },
  { category: 'Backend', name: 'Configure and Troubleshoot Conversion API Gateway' },
  { category: 'Python e IA', name: 'Python: desarrollo inteligente con IA' },
  { category: 'Python e IA', name: 'Python II: Arquitecto en soluciones' },
  { category: 'Python e IA', name: 'Desarrollo con IA de BIG School' },
  { category: 'Python e IA', name: 'Iniciación al Desarrollo con IA' },
  { category: 'Python e IA', name: 'Exploración y análisis de datos con Python' },
  { category: 'Python e IA', name: 'Compilación de videojuegos con GitHub y Python' },
  { category: 'Python e IA', name: 'Programación con Python desde cero' },
  { category: 'DevOps', name: 'DevOps-SRE · 109 horas · Udemy', featured: true },
  { category: 'DevOps', name: 'Administración de servidores' },
  { category: 'DevOps', name: 'Virtualización con Proxmox' },
  { category: 'DevOps', name: 'Docker Virtualization and Containerization Fundamentals', featured: true },
  { category: 'DevOps', name: 'Kubernetes Management and Container Orchestration' },
  { category: 'DevOps', name: 'Descripción de la informática en la nube' },
  { category: 'Gestión y otros', name: 'Gestión Agile de proyectos con Scrum', featured: true },
  { category: 'Gestión y otros', name: 'Participación: Física a puertas abiertas' },
  { category: 'Gestión y otros', name: 'Digital Marketing Mastery 2023 with Dekker Fraser, MBA' },
  { category: 'Gestión y otros', name: 'Transformaciones digitales con PETI' },
  { category: 'Gestión y otros', name: 'Creación de modelos de negocio Early Adopter' },
  { category: 'Gestión y otros', name: 'Arduino básico' },
  { category: 'Gestión y otros', name: 'Electrónica básica' },
  { category: 'Gestión y otros', name: 'Aprender inglés desde cero' },
  { category: 'Gestión y otros', name: 'Analista en Optimización de motores de búsqueda (SEO)' },
  { category: 'Gestión y otros', name: 'Edición de video en Premiere desde cero' },
  { category: 'Gestión y otros', name: 'Google: IA Práctica para Marketing' },
  { category: 'Gestión y otros', name: 'Manejo de Power BI' },
];
