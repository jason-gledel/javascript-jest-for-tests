const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

describe('showMessage', () => {
  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    require('./ex2.js'); // Assurez-vous que le chemin est correct selon la structure de votre projet
  });

  test('should update message text when button is clicked', () => {
    const clickMeButton = document.getElementById('click-me-button');
    const message = document.getElementById('message');

    clickMeButton.click();

    expect(message.textContent).toBe('Good job');
  });
});
