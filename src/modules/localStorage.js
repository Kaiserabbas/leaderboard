// Function to get scores from local storage
export const localStorageGetScores = () => {
  const scoresJSON = localStorage.getItem('scores');
  return scoresJSON ? JSON.parse(scoresJSON) : [];
};

// Function to set tasks in local storage
export const localStorageSetScores = (scores) => {
  const scoresJSON = JSON.stringify(scores);
  localStorage.setItem('scores', scoresJSON);
};

export let scores = localStorageGetScores() || [];
