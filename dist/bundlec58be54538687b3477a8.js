/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const gameId = 'kyBoyHWV3ns6jrHWqAzp';
const urlAPI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const getScores = async () => {
  try {
    const response = await fetch(urlAPI);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
};

const displayScores = (scores) => {
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerHTML = '';

  scores.forEach((score) => {
    const scoreDiv = document.createElement('div');
    scoreDiv.innerText = `${score.user} - ${score.score}`;
    scoreboard.appendChild(scoreDiv);
  });
};

const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', async () => {
  const scores = await getScores();
  displayScores(scores);
});

const saveScore = async (user, score) => {
  try {
    const payload = {
      user: user,
      score: score,
    };
    const response = await fetch(urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

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

/******/ })()
;
//# sourceMappingURL=bundlec58be54538687b3477a8.js.map