import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainEvenLogics from '../logics/brain-even-logics.js';
import { greeting, startGame } from '../steps/gameSteps.js';

const even = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainEvenLogics, name);
};

export default even;
