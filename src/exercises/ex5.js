const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');

hoverArea.addEventListener('mouseover', () => {
  interactionResult.textContent = 'Très beau hover, bravo';
h});

hoverArea.addEventListener('mouseout', () => {
  interactionResult.textContent = 'Hover over the area.';
});