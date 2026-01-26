// ==========================
// Base JS for Portfolio
// ==========================

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hover animation for tech cards
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = '0 0 0 1px rgba(139,92,246,0.5), 0 20px 40px rgba(0,0,0,0.6)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 0 0 1px rgba(139,92,246,0.15), 0 10px 30px rgba(0,0,0,0.4)';
  });
});

// Hover animation for project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.backgroundColor = '#2a2a40';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.backgroundColor = '#1a1a27';
  });
});

// ==========================
// Fade-in effect on scroll
// ==========================
const faders = document.querySelectorAll('.tech-card, .project-card, .achievement');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    observer.unobserve(entry.target); // Only animate once
  });
}, appearOptions);

// Apply observer to all fade-in elements
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
