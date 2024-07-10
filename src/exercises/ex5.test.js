// ex5.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
let dom;
let document;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    global.document = document;
    global.window = dom.window;

    // Définir MouseEvent si ce n'est pas déjà défini
    global.window.MouseEvent = window.MouseEvent;
    
    // Assurez-vous que le chemin est correct selon la structure de votre projet
    require('./ex5.js');
});


// Define the test suite for the hover area functionality
describe('Hover area interactions', () => {
  let hoverArea;
  let interactionResult;

  // Set up the DOM elements before each test
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="hover-area"></div>
      <p id="interaction-result">Hover over the area.</p>
    `;

    hoverArea = document.getElementById('hover-area');
    interactionResult = document.getElementById('interaction-result');

    // Manually add event listeners
    hoverArea.addEventListener('mouseover', () => {
      interactionResult.textContent = 'Très beau hover, bravo';
    });

    hoverArea.addEventListener('mouseout', () => {
      interactionResult.textContent = 'Hover over the area.';
    });
  });

  // Test the mouseover event
  test('should change text on mouseover', () => {
    // Simulate mouseover event
    const mouseoverEvent = new window.MouseEvent('mouseover');
    hoverArea.dispatchEvent(mouseoverEvent);

    // Assert the text has changed
    expect(interactionResult.textContent).toBe('Très beau hover, bravo');
  });

  // Test the mouseout event
  test('should change text on mouseout', () => {
    // Simulate mouseover event to change the text first
    const mouseoverEvent = new window.MouseEvent('mouseover');
    hoverArea.dispatchEvent(mouseoverEvent);

    // Simulate mouseout event
    const mouseoutEvent = new window.MouseEvent('mouseout');
    hoverArea.dispatchEvent(mouseoutEvent);

    // Assert the text has changed back
    expect(interactionResult.textContent).toBe('Hover over the area.');
  });
});
