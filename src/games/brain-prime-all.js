import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainPrimeLogics from '../logics/brain-prime-logics.js';
import { greeting, startGame } from '../steps/gameSteps.js';

const prime = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainPrimeLogics, name);
};
export default prime;
