const SCORES_KEY = 'scores';

// Function to initialize local storage with pre-loaded data
const initializeLocalStorage = () => {
  const initialData = [
    {
      username: 'Ali',
      score: 100,
      index: 1,
      status: 'new',
    },
    {
      username: 'Qaisar',
      score: 85,
      index: 2,
      status: 'new',
    },
    {
      username: 'Hashim',
      score: 120,
      index: 3,
      status: 'new',
    },
    {
      username: 'Mustafa',
      score: 120,
      index: 3,
      status: 'new',
    },
    {
      username: 'Mirqal',
      score: 120,
      index: 3,
      status: 'new',
    },
  ];

  localStorage.setItem(SCORES_KEY, JSON.stringify(initialData));
};

const getScores = () => {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY)) || [];
  return scores;
};

const saveScores = (scores) => {
  localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
};

export { initializeLocalStorage, getScores, saveScores };
