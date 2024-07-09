const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  message.textContent = 'Good job';
}

clickMeButton.addEventListener('click', showMessage);


