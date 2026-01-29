// ==========================
// Portfolio Interactions JS
// ==========================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================
  // Smooth Scroll (Accessible)
  // ==========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // ==========================
  // Hover Effects via Classes
  // ==========================
  const hoverCards = document.querySelectorAll(
    '.tech-card, .project-card, .why-card'
  );

  hoverCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
    });
  });

  // ==========================
  // Fade-In on Scroll (Cards + Sections)
  // ==========================
  const fadeElements = document.querySelectorAll(
    '.tech-card, .project-card, .achievement, .card, .why-card, section'
  );

  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('fade-in');

        // ✅ Section fade-in
        if (entry.target.tagName === 'SECTION') {
          entry.target.classList.add('visible');
        }

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    }
  );

  fadeElements.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    fadeObserver.observe(el);
  });

  // ==========================
  // Active Navigation on Scroll
  // ==========================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
