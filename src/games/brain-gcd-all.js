import greeting from '../steps/greeting.js';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import startGame from '../steps/startGame.js';
import brainGCDLogics from '../logics/brain-gcd-logics.js';

const gcd = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainGCDLogics, name);
};

export default gcd;
