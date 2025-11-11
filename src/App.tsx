import { useEffect, type MouseEvent } from 'react';

import { certificates, highlights, navLinks, services, skills } from './data/portfolioContent';

export default function App() {
  useEffect(() => {
    document.body.classList.add('loaded');

    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="page" id="inicio">
      <header className="header">
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-name">Gabriel Guedes</span>
        </div>

        <nav className="navigation" aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={`#${link.href}`} onClick={(event) => handleNavClick(event, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="ghost-button" href="https://github.com/byelziin" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            className="primary-button"
            href="https://www.linkedin.com/in/gabriel-guedes-391155264/"
            target="_blank"
            rel="noreferrer"
          >
            Conecte-se
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="sobre">
          <div className="hero-content">
            <p className="hero-eyebrow">Olá, eu sou</p>
            <h1>
              Gabriel Guedes<span>.</span>
            </h1>
            <h2>Software Developer</h2>
            <p className="hero-text">
              Transformo ideias em experiências digitais completas. Combino uma base sólida em desenvolvimento back e
              front-end com boas práticas, colaboração e vontade constante de aprender.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contato" onClick={(event) => handleNavClick(event, 'contato')}>
                Vamos conversar
              </a>
              <a className="ghost-button" href="mailto:gabriel.guedes.dev@gmail.com">
                Envie um e-mail
              </a>
            </div>
            <div className="hero-tags" aria-label="Tecnologias em destaque">
              {skills.slice(0, 6).map((skill) => (
                <span key={skill.id}>{skill.label}</span>
              ))}
            </div>
          </div>

          <div className="hero-portrait">
            <div className="hero-portrait-glow" />
            <div className="hero-portrait-ring" />
            <img src="/images/image%20atualizada2.jpg" alt="Gabriel Guedes" />
          </div>
        </section>

        <section className="section about" aria-labelledby="about-title">
          <div className="section-header">
            <p className="section-eyebrow">Sobre mim</p>
            <h3 id="about-title">Construindo soluções de impacto</h3>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Natural de Viamão, no Rio Grande do Sul, iniciei minha jornada na tecnologia durante o ensino médio.
                Desde então, participei de projetos acadêmicos e pessoais que ampliaram minha visão sobre desenvolvimento
                e trabalho em equipe.
              </p>
              <p>
                Curso Análise e Desenvolvimento de Sistemas na Uniasselvi e fui finalista do programa Geração Caldeira
                2024, acessando conteúdos avançados na plataforma Alura. Busco sempre unir código limpo, design moderno e
                comunicação clara para entregar resultados confiáveis.
              </p>
            </div>
            <div className="stats-grid">
              {highlights.map((item) => (
                <div key={item.id} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section services" id="servicos" aria-labelledby="services-title">
          <div className="section-header">
            <p className="section-eyebrow">Serviços</p>
            <h3 id="services-title">Como posso ajudar seu projeto</h3>
          </div>
          <div className="cards-grid">
            {services.map((service) => (
              <article key={service.id} className="card">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section certificates" id="certificados" aria-labelledby="certificates-title">
          <div className="section-header">
            <p className="section-eyebrow">Certificados</p>
            <h3 id="certificates-title">Jornada de aprendizado contínuo</h3>
            <span className="section-subtitle">
              Uma coleção que reforça minha dedicação ao crescimento profissional.
            </span>
          </div>
          <div className="cards-grid certificates-grid">
            {certificates.map((certificate) => (
              <article key={certificate.id} className="card certificate-card">
                <div
                  className="certificate-image"
                  style={{ backgroundImage: `url(${certificate.image})` }}
                  role="img"
                  aria-label={certificate.title}
                />
                <div className="certificate-content">
                  <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills" aria-labelledby="skills-title">
          <div className="section-header">
            <p className="section-eyebrow">Skills</p>
            <h3 id="skills-title">Tecnologias que domino</h3>
            <span className="section-subtitle">
              Cada ferramenta contribui para entregar soluções robustas e agradáveis de usar.
            </span>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <div
                  className="skill-icon"
                  style={{ backgroundImage: `url(${skill.image})` }}
                  role="img"
                  aria-label={skill.label}
                />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="contact-card">
            <div className="section-header">
              <p className="section-eyebrow">Contato</p>
              <h3 id="contact-title">Vamos construir algo juntos?</h3>
              <span className="section-subtitle">
                Conte-me sobre o seu projeto e descubra como posso contribuir.
              </span>
            </div>
            <p>
              Disponível para oportunidades de desenvolvimento, consultoria e projetos colaborativos. Seja para uma ideia
              inicial ou um produto em evolução, estou pronto para impulsionar o próximo passo.
            </p>
            <div className="contact-actions">
              <a className="primary-button" href="mailto:gabriel.guedes.dev@gmail.com">
                Contato por e-mail
              </a>
              <a className="ghost-button" href="https://wa.me/5551999999999" target="_blank" rel="noreferrer">
                Fale no WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Gabriel Guedes — Feito com dedicação e curiosidade constante.</span>
      </footer>
    </div>
  );
}

