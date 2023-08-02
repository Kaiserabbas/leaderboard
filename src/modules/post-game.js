const apiUrl =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const createGame = async (name) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name }),
  });

  const data = await response.json();
  const gameId = data.result.split(':')[1].trim();
  return gameId;
};

const gameName = 'T20 Worldcup 2023';
createGame(gameName)
  .then((gameId) => console.log(`Game ID: ${gameId}`))
  .catch((error) => console.error(error));
