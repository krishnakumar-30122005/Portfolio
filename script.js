// Mobile Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
});

// 3D Tilt effect on home image
const homeImageWrapper = document.querySelector('.home-image-wrapper');
homeImageWrapper.addEventListener('mousemove', (e) => {
  const rect = homeImageWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  const rotateX = (-y / (rect.height / 2)) * 12;
  const rotateY = (x / (rect.width / 2)) * 12;

  homeImageWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

homeImageWrapper.addEventListener('mouseleave', () => {
  homeImageWrapper.style.transform = 'rotateX(0) rotateY(0) scale(1)';
});

const projectsContainer = document.querySelector('.projects-container');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

btnLeft.addEventListener('click', () => {
  projectsContainer.scrollBy({ left: -350, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  projectsContainer.scrollBy({ left: 350, behavior: 'smooth' });
});
