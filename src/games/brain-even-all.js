import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainEvenLogics from '../logics/brain-even-logics.js';
import { startGame } from '../steps/gameSteps.js';

const even = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainEvenLogics, name);

  startGame(greetingText, introQuestion, brainEvenLogics, whatShouldYouDoCalcGame);
};

export default even;
