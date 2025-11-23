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
      scrollSpeed = 0.3;
    }
    let userInteracting = false;
    let resumeTimer: number | undefined;
    let lastLeft = container.scrollLeft;
    let stagnantFrames = 0;
    let fallbackEnabled = false;
    
    const enableFallback = () => {
      if (fallbackEnabled) return;
      fallbackEnabled = true;
      track.classList.add('autoplay-fallback');
      container.style.overflowX = 'hidden';
      cancelAnimationFrame(animationId);
    };

    const disableFallback = () => {
      if (!fallbackEnabled) return;
      fallbackEnabled = false;
      track.classList.remove('autoplay-fallback');
      (track.style as any).transform = '';
      container.style.overflowX = '';
      animationId = requestAnimationFrame(animateScroll);
    };

    const animateScroll = () => {
      if (fallbackEnabled) return;
      if (container.scrollLeft >= track.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      const diff = Math.abs(container.scrollLeft - lastLeft);
      stagnantFrames = diff < 0.01 ? stagnantFrames + 1 : 0;
      lastLeft = container.scrollLeft;
      if (isMobile && stagnantFrames > 60) {
        enableFallback();
        return;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    // Desativar snap para permitir autoplay suave
    const previousSnap = container.style.scrollSnapType;
    const previousWebkitScroll = (container.style as any).webkitOverflowScrolling;
    container.style.scrollSnapType = 'none';
    (container.style as any).webkitOverflowScrolling = 'auto';

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

    const pauseForInteraction = () => {
      userInteracting = true;
      cancelAnimationFrame(animationId);
      container.style.scrollSnapType = 'x proximity';
      (container.style as any).webkitOverflowScrolling = 'touch';
      if (resumeTimer) window.clearTimeout(resumeTimer);
      disableFallback();
    };

    const scheduleResume = () => {
      if (resumeTimer) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        userInteracting = false;
        container.style.scrollSnapType = 'none';
        (container.style as any).webkitOverflowScrolling = 'auto';
        if (isMobile) {
          enableFallback();
        } else {
          animationId = requestAnimationFrame(animateScroll);
        }
      }, 1200);
    };

    const handleTouchStart = () => pauseForInteraction();
    const handleTouchEnd = () => scheduleResume();
    const handlePointerDown = () => pauseForInteraction();
    const handlePointerUp = () => scheduleResume();
    const handleScroll = () => userInteracting && scheduleResume();

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('pointerdown', handlePointerDown, { passive: true } as any);
    container.addEventListener('pointerup', handlePointerUp, { passive: true } as any);
    container.addEventListener('scroll', handleScroll, { passive: true });

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
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('visibilitychange', handleVisibility);
      container.style.scrollSnapType = previousSnap;
      (container.style as any).webkitOverflowScrolling = previousWebkitScroll;
      track.classList.remove('autoplay-fallback');
      (track.style as any).transform = '';
    };
  }, []);

  return (
    <div className="certificates-carousel-container" ref={containerRef}>
      <div className="certificates-carousel" ref={trackRef}></div>
    </div>
  );
}