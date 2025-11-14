import { useEffect, useRef } from 'react';
import { certificates } from '../data/portfolioContent';
import '../styles/carousel.css';

export default function CertificatesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Duplicar os certificados para criar o efeito infinito
    const duplicatedCertificates = [...certificates, ...certificates];

    // Criar elementos HTML para os certificados duplicados
    duplicatedCertificates.forEach((certificate, index) => {
      const article = document.createElement('article');
      article.className = 'card certificate-card';
      article.innerHTML = `
        <div
          class="certificate-image"
          style="background-image: url(${certificate.image})"
          role="img"
          aria-label="${certificate.title}"
        ></div>
        <div class="certificate-content">
          <h4>${certificate.title}</h4>
          <p>${certificate.description}</p>
        </div>
      `;
      
      if (index >= certificates.length) {
        article.setAttribute('aria-hidden', 'true');
      }
      
      scrollContainer.appendChild(article);
    });

    let animationId: number;
    let scrollSpeed = 0.8;
    
    const animateScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    // Iniciar animação
    animationId = requestAnimationFrame(animateScroll);

    // Pausar ao passar o mouse
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    // Retomar ao sair o mouse
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animateScroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    // Scroll com o mouse (horizontal)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY * 2;
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="certificates-carousel-container">
      <div className="certificates-carousel" ref={scrollContainerRef}></div>
    </div>
  );
}