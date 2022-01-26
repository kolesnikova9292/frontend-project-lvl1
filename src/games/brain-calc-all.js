import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainCalcLogics from '../logics/brain-calc-logics.js';
import { startGame } from '../steps/gameSteps.js';

const calc = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainCalcLogics, name);
  startGame(greetingText, introQuestion, brainCalcLogics, whatShouldYouDoCalcGame);
  //const startGame = (greetingText, introQuestion, logicOfGame, stepsCount = 3, whatShouldYouDo = '') =
};

export default calc;
