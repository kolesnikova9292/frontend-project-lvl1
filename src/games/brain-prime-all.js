import greeting from '../steps/greeting.js';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import startGame from '../steps/startGame.js';
import brainPrimeLogics from '../logics/brain-prime-logics.js';

const prime = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainPrimeLogics, name);
};

export default prime;
