import addScore from './addScore.js';
import { getScores, initializeLocalStorage } from './localStorage.js';
// Initialize local storage with pre-loaded data (if not already initialized)
if (!localStorage.getItem('scores')) {
  initializeLocalStorage();
}
// Function to render the scoreboard on the page
const renderScores = () => {
  const scoreboardDiv = document.getElementById('scoreboard');
  scoreboardDiv.innerHTML = '';

  const scores = getScores();

  scores.forEach((score) => {
    const scoreElement = document.createElement('div');
    scoreElement.className = 'score-element';
    scoreElement.textContent = `${score.username}: ${score.score}`;
    scoreElement.classList.add(
      score.index % 2 === 0 ? 'score-even' : 'score-odd'
    );
    scoreboardDiv.appendChild(scoreElement);
  });
};

// Function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();
  const usernameInput = document.getElementById('username');
  const scoreInput = document.getElementById('yourscore');

  const username = usernameInput.value;
  const score = scoreInput.value;

  if (username.trim() === '' || score.trim() === '') {
    alert('Please enter both a username and a score.');
    return;
  }
  addScore(username, score);
  renderScores();

  // Clear the form inputs
  usernameInput.value = '';
  scoreInput.value = '';
};

export { renderScores, handleSubmit };
