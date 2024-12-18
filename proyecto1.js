// Selección de elementos del DOM
const heroForm = document.querySelector(".email-input");
const ctaForm = document.querySelector(".cta__form");
const navLinks = document.querySelectorAll(".header-link");

// Validación de email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function handleFormSubmit(event) {
    const input = event.target.querySelector('input[type="email"]');
    if (!validateEmail(input.value)) {
      event.preventDefault();
      alert('Please enter a valid email address.');
    }
  }