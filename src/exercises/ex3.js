const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail(email) {
  // Expression régulière pour valider l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le comportement de soumission par défaut du formulaire
  
  const userEmail = emailInput.value.trim();

  if (validateEmail(userEmail)) {
    validationMessage.textContent = 'Email is valid.';
    validationMessage.style.color = 'green';
  } else {
    validationMessage.textContent = 'Please enter a valid email.';
    validationMessage.style.color = 'red';
  }
});

console.log("Salut");
