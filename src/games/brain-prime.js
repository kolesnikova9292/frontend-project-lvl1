import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
import { startGame } from '../steps/gameSteps.js';
import randomNumber from '../functions/randomNumber.js';

const brainPrimeLogics = () => {
  const number = randomNumber();
  let rightAnswer = 'yes';
  for (let num = 2; num < number; num += 1) {
    if (number % num === 0) {
      rightAnswer = 'no';
      break;
    }
  }

  return {
    expression: number, rightAnswer,
  };
};

const prime = () => {
  startGame(greetingText, introQuestion, brainPrimeLogics, whatShouldYouDoCalcGame);
};

export default prime;
