import './modules/style.css';
import { getScores, displayScores, saveScore } from './modules/renderScores';

const form = document.getElementById('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const score = document.getElementById('yourscore').value;

  if (!username || !score) {
    console.error('Please fill in both username and score fields.');
    return;
  }

  await saveScore(username, score);
  // After submitting, refresh the scores to display the updated list
  const scores = await getScores();
  displayScores(scores);
  // Reset the form fields after submission
  form.reset();
});

// On page load, fetch and display the initial scores
window.addEventListener('DOMContentLoaded', async () => {
  const scores = await getScores();
  displayScores(scores);
});

const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', async () => {
  const scores = await getScores();
  displayScores(scores);
});
