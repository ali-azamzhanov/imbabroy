// Плавное появление секций при прокрутке
const sections = document.querySelectorAll('.fade-in');

const showSections = () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) section.classList.add('visible');
  });
};

window.addEventListener('scroll', showSections);
window.addEventListener('load', showSections);
