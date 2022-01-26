import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainGCDLogics from '../logics/brain-gcd-logics.js';
import { startGame } from '../steps/gameSteps.js';

const gcd = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainGCDLogics, name);

  startGame(greetingText, introQuestion, brainGCDLogics, whatShouldYouDoCalcGame);
};

export default gcd;
