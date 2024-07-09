// script.js
const addButton = document.getElementById('add-class-button');
const element = document.getElementById('element');

function addClassToElement() {
  element.classList.add('new-class');
  console.log("Une classe vient d'être ajoutée !");
}

addButton.addEventListener('click', addClassToElement);



