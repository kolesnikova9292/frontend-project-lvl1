import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainGCDLogics from '../logics/brain-gcd-logics.js';
import { greeting, startGame } from '../steps/gameSteps.js';

const gcd = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainGCDLogics, name);
};

export default gcd;
