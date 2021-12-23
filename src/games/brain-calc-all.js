import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainCalcLogics from '../logics/brain-calc-logics.js';
import { greeting, startGame } from '../steps/gameSteps.js';

const calc = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainCalcLogics, name);
};

export default calc;
