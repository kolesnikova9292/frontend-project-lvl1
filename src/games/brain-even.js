import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/randomNumber.js';

const even = () => {
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
