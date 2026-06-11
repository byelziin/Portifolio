import type { Certificate, Highlight, Link, Service, Skill } from '../types/portfolio';
import { getAssetUrl } from '../utils/assetUrl';

export const navLinks: Link[] = [
  { href: 'inicio', label: 'Início' },
  { href: 'sobre', label: 'Sobre' },
  { href: 'servicos', label: 'Serviços' },
  { href: 'certificados', label: 'Certificados' },
  { href: 'skills', label: 'Skills' },
  { href: 'contato', label: 'Contato' },
];

export const highlights: Highlight[] = [
  { id: 'highlight-bfr', value: 'BFR Investimentos', label: 'Desenvolvedor de Software', description: 'Atualmente. Atuo também com processos comerciais (SDR), o que melhora meu entendimento de necessidades e comunicação com clientes.' },
  { id: 'highlight-university', value: 'Uniasselvi', label: 'Análise e Desenvolvimento de Sistemas', description: 'ADS' },
  { id: 'highlight-caldeira', value: 'Instituto Caldeira', label: 'Geração Caldeira 2025', description: 'Trilha de JAVA' },
  { id: 'highlight-cognitiva', value: 'Cognitiva Brasil', label: 'Desenvolvedor Front-End', description: 'Estágio concluído (2025–2026).' },
  { id: 'highlight-cert', value: '15+', label: 'Certificações', description: 'Cursos e especializações concluídos em tecnologia, programação e metodologias ágeis.' },
  { id: 'highlight-quality', value: '100%', label: 'Foco em qualidade e comunicação clara', description: 'Código limpo, testado e de fácil manutenção.' },
];

export const services: Service[] = [
  {
    id: 'service-web',
    title: 'Desenvolvimento Front-end',
    description: 'Interfaces modernas, rápidas e acessíveis, focadas na experiência do usuário e conversão.',
  },
  {
    id: 'service-app',
    title: 'Desenvolvimento Back-end',
    description: 'Funcionalidades, integrações e segurança para seu sistema operar de forma confiável.',
  },
  {
    id: 'service-hosting',
    title: 'Dados, Hospedagem e Performance',
    description: 'Organização de dados e publicação com automação e monitoramento para alta disponibilidade e velocidade.',
  },
];

export const certificates: Certificate[] = [
  {
    id: 'cert-java-caldeira-228h',
    image: getAssetUrl('/images/Certificado GC-2025 _ Gabriel Guedes_page-0001.jpg'),
    title: 'Programação Java — Geração Caldeira (228h)',
    description:
      'POO, Git, bancos de dados e testes. Projetos Desktop e Web com metodologias ágeis.',
  },
  {
    id: 'cert-lowcode-latromi-2026',
    image: getAssetUrl('/images/Certificado Low Code Latromi _ Gabriel Guedes_page-0001.jpg'),
    title: 'Desenvolvimento Low-Code — Latromi (11h)',
    description:
      'Fundamentos de low-code, SQL básico, consultas, formulários e criação de aplicações.',
  },
  {
    id: 'cert-html-css',
    image: getAssetUrl('/images/cert-html-css.png'),
    title: 'HTML e CSS',
    description: 'Fundamentos sólido de layout responsivo e semântica.',
  },
  {
    id: 'cert-git-github',
    image: getAssetUrl('/images/cert-git-github.jpg'),
    title: 'Git & GitHub',
    description: 'Fluxos colaborativos, branches e pull requests profissionais.',
  },
  {
    id: 'cert-mysql',
    image: getAssetUrl('/images/cert-mysql.jpg'),
    title: 'MySQL',
    description: 'Modelagem relacional, consultas otimizadas e procedures.',
  },
  {
    id: 'cert-logica-js',
    image: getAssetUrl('/images/cert-logica-js.png'),
    title: 'Lógica com JavaScript',
    description: 'Resolução de problemas e domínio da linguagem.',
  },
  {
    id: 'cert-java-listas',
    image: getAssetUrl('/images/cert-java-listas.png'),
    title: 'Java Collections',
    description: 'Manipulação eficiente de dados com listas, sets e maps.',
  },
  {
    id: 'cert-generation',
    image: getAssetUrl('/images/cert-generation.png'),
    title: 'Kanban',
    description: 'Programa intensivo de soft skills e desenvolvimento ágil.',
  },
];

export const skills: Skill[] = [
  { id: 'skill-java', image: getAssetUrl('/images/skill-java.png'), label: 'Java' },
  { id: 'skill-javascript', image: getAssetUrl('/images/skill-javascript.png'), label: 'JavaScript' },
  { id: 'skill-react', image: getAssetUrl('/images/skill-react.png'), label: 'React' },
  { id: 'skill-mysql', image: getAssetUrl('/images/skill-mysql.png'), label: 'MySQL' },
  { id: 'skill-php', image: getAssetUrl('/images/skill-php.png'), label: 'PHP' },
  { id: 'skill-english', image: getAssetUrl('/images/skill-english.png'), label: 'Inglês Técnico' },
  { id: 'skill-office', image: getAssetUrl('/images/skill-office.png'), label: 'Pacote Office' },
  { id: 'skill-next', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', label: 'Next.js' },
  { id: 'skill-linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', label: 'Linux' },
  { id: 'skill-postgres', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', label: 'PostgreSQL' },
  { id: 'skill-typescript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', label: 'TypeScript' },
  { id: 'skill-photoshop', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', label: 'Photoshop CS6' },
  { id: 'skill-angular', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg', label: 'Angular' },
];

