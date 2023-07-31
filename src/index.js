import './modules/style.css';
import { renderScores, handleSubmit } from './modules/renderScores.js';

const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

// Initial render of the scoreboard
renderScores();

const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', () => {
  location.reload();
});
