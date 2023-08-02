import urlAPI from './api.js';

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

  scores.forEach((score, index) => {
    const scoreDiv = document.createElement('div');
    scoreDiv.innerText = `${score.user} - ${score.score}`;
    scoreDiv.classList.add('score-item');
    if (index % 2 === 0) {
      scoreDiv.classList.add('white-bg');
    } else {
      scoreDiv.classList.add('grey-bg');
    }
    scoreboard.appendChild(scoreDiv);
  });
};

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

export { getScores, displayScores, saveScore };
