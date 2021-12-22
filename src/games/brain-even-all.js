import greeting from '../steps/greeting.js';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import startGame from '../steps/startGame.js';
import brainEvenLogics from '../logics/brain-even-logics.js';

const even = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainEvenLogics, name);
};

export default even;
