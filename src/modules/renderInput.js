const renderInput = () => {
  const parent = document.body;

  const h1 = document.createElement('h1');
  h1.textContent = 'Leaderboard';
  parent.insertBefore(h1, parent.children[0]);

  const mainDiv = document.createElement('div');
  mainDiv.id = 'main-div';
  mainDiv.className = 'main-div';

  const userInputDiv = document.createElement('div');
  userInputDiv.id = 'user-input-div';
  userInputDiv.className = 'user-input-div';

  const leaderboardDiv = document.createElement('div');
  leaderboardDiv.id = 'leaderboard-div';
  leaderboardDiv.className = 'leaderboard-div';

  mainDiv.appendChild(userInputDiv);
  mainDiv.appendChild(leaderboardDiv);

  parent.insertBefore(mainDiv, parent.children[1]);
};

export default renderInput;
