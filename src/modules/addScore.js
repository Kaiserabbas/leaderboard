import { getScores, saveScores } from './localStorage.js';

// Function to add a new score to the scoreboard
const addScore = (username, score) => {
  const scores = getScores();

  // Create a new score object
  const newScore = {
    username: username,
    score: score,
    index: scores.length + 1,
    status: 'new',
  };

  // Add the new score to the scores array
  scores.push(newScore);

  // Save the updated scores to local storage
  saveScores(scores);
};

export default addScore;
