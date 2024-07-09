// ex1.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

describe('addClassToElement', () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    require('./ex1.js'); // Assurez-vous que le chemin est correct selon la structure de votre projet
  });

  test('should add class "new-class" to element when button is clicked', () => {
    const addButton = document.getElementById('add-class-button');
    const element = document.getElementById('element');

    addButton.click();

    expect(element.classList.contains('new-class')).toBe(true);
  });
});
