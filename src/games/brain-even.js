import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
//import brainEvenLogics from '../logics/brain-even-logics.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/randomNumber.js';

const even = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainEvenLogics, name);

  startGame(greetingText, introQuestion, brainEvenLogics, whatShouldYouDoCalcGame);
};

const brainEvenLogics = () => {
  const number = randomNumber();
  const realAnswer = number % 2 === 1 ? 'no' : 'yes';

  return {
    expression: number, rightAnswer: realAnswer.toString(),
  };
};

export default even;
