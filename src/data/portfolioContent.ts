import type { Certificate, Highlight, Link, Service, Skill } from '../types/portfolio';

export const navLinks: Link[] = [
  { href: 'inicio', label: 'Início' },
  { href: 'sobre', label: 'Sobre' },
  { href: 'servicos', label: 'Serviços' },
  { href: 'certificados', label: 'Certificados' },
  { href: 'skills', label: 'Skills' },
  { href: 'contato', label: 'Contato' },
];

export const highlights: Highlight[] = [
  { id: 'highlight-cert', value: '13+', label: 'Certificações', description: 'Cursos concluídos em tecnologia.' },
  { id: 'highlight-quality', value: '100%', label: 'Foco em qualidade', description: 'Código limpo e testado.' },
  { id: 'highlight-program', value: 'Geração', label: 'Caldeira 2024', description: 'Finalista do programa.' },
];

export const services: Service[] = [
  {
    id: 'service-web',
    title: 'Website Development',
    description: 'Interfaces responsivas com animações sutis, acessibilidade e SEO técnico.',
  },
  {
    id: 'service-app',
    title: 'App Development',
    description: 'Aplicações completas com integrações, API e arquitetura escalável.',
  },
  {
    id: 'service-hosting',
    title: 'Website Hosting',
    description: 'Deploy contínuo, automação de builds e monitoramento de performance.',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-html-css',
    image: '/images/cert-html-css.png',
    title: 'HTML e CSS',
    description: 'Fundamentos sólidos de layout responsivo e semântica.',
  },
  {
    id: 'cert-git-github',
    image: '/images/cert-git-github.jpg',
    title: 'Git & GitHub',
    description: 'Fluxos colaborativos, branches e pull requests profissionais.',
  },
  {
    id: 'cert-mysql',
    image: '/images/cert-mysql.jpg',
    title: 'MySQL',
    description: 'Modelagem relacional, consultas otimizadas e procedures.',
  },
  {
    id: 'cert-logica-js',
    image: '/images/cert-logica-js.png',
    title: 'Lógica com JavaScript',
    description: 'Resolução de problemas e domínio da linguagem.',
  },
  {
    id: 'cert-java-listas',
    image: '/images/cert-java-listas.png',
    title: 'Java Collections',
    description: 'Manipulação eficiente de dados com listas, sets e maps.',
  },
  {
    id: 'cert-generation',
    image: '/images/cert-generation.png',
    title: 'Geração Caldeira',
    description: 'Programa intensivo de soft skills e desenvolvimento ágil.',
  },
];

export const skills: Skill[] = [
  { id: 'skill-java', image: '/images/skill-java.png', label: 'Java' },
  { id: 'skill-javascript', image: '/images/skill-javascript.png', label: 'JavaScript' },
  { id: 'skill-react', image: '/images/skill-react.png', label: 'React' },
  { id: 'skill-mysql', image: '/images/skill-mysql.png', label: 'MySQL' },
  { id: 'skill-php', image: '/images/skill-php.png', label: 'PHP' },
  { id: 'skill-english', image: '/images/skill-english.png', label: 'Inglês Técnico' },
  { id: 'skill-office', image: '/images/skill-office.png', label: 'Pacote Office' },
  { id: 'skill-next', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js' },
  { id: 'skill-linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Linux' },
  { id: 'skill-postgres', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', label: 'PostgreSQL' },
  { id: 'skill-typescript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TypeScript' },
  { id: 'skill-photoshop', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg', label: 'Photoshop CS6' },
];

