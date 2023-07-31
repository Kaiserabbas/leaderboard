import renderInput from './modules/renderInput';
import './modules/style.css';
// import {
//   scores,
//   localStorageGetScores,
//   localStorageSetScores,
// } from './modules/localStorage';

renderInput();
const refreshButton = document.getElementById('refresh-btn');
refreshButton.addEventListener('click', () => {
  location.reload();
});
