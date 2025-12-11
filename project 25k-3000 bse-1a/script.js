
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Scroll animation
const animateElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

animateElements.forEach(el => observer.observe(el));

// Contact form alert
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  alert(`Thank you, ${name}! Your message has been received.\n\nMessage: ${message}\nEmail: ${email}`);

  contactForm.reset(); 
});
