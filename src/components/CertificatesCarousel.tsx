import { useEffect, useRef } from 'react';
import { certificates } from '../data/portfolioContent';
import '../styles/carousel.css';

export default function CertificatesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

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
      
      track.appendChild(article);
    });

    let animationId: number;
    let scrollSpeed = 0.8;
    const isMobile = matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isMobile) {
      scrollSpeed = 0.6;
    }
    
    const animateScroll = () => {
      if (container.scrollLeft >= track.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
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

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    const handleTouchStart = () => {
      cancelAnimationFrame(animationId);
    };

    const handleTouchEnd = () => {
      animationId = requestAnimationFrame(animateScroll);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Scroll com o mouse (horizontal)
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 2;
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animateScroll);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="certificates-carousel-container" ref={containerRef}>
      <div className="certificates-carousel" ref={trackRef}></div>
    </div>
  );
}