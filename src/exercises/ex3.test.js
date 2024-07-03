const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom, document, window;

describe('Email Validation', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    window = dom.window;

    global.document = document;
    global.window = window;

    require('./ex3.js'); // Assurez-vous que le chemin est correct selon la structure de votre projet
  });

  afterEach(() => {
    global.document = undefined;
    global.window = undefined;
    dom = null;
  });

  test('should display "Email is valid." for valid email', () => {
    const emailInput = document.getElementById('email-input');
    const emailForm = document.getElementById('email-form');
    const validationMessage = document.getElementById('validation-message');

    emailInput.value = 'test@example.com';
    emailForm.dispatchEvent(new window.Event('submit'));

    setTimeout(() => {
      expect(validationMessage.textContent).toBe('Email is valid.');
      expect(validationMessage.style.color).toBe('green');
    }, 100); // Attendez 100ms pour permettre la validation de s'afficher
  });

  test('should display "Please enter a valid email." for invalid email', () => {
    const emailInput = document.getElementById('email-input');
    const emailForm = document.getElementById('email-form');
    const validationMessage = document.getElementById('validation-message');

    emailInput.value = 'invalidemail';
    emailForm.dispatchEvent(new window.Event('submit'));

    setTimeout(() => {
      expect(validationMessage.textContent).toBe('Please enter a valid email.');
      expect(validationMessage.style.color).toBe('red');
    }, 100); // Attendez 100ms pour permettre la validation de s'afficher
  });

});
