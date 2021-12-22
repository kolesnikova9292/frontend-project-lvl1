import greeting from '../steps/greeting.js';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import startGame from '../steps/startGame.js';
import brainCalcLogics from '../logics/brain-calc-logics.js';

const calc = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainCalcLogics, name);
};

export default calc;
