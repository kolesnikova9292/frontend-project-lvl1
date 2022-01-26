import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
//import brainPrimeLogics from '../logics/brain-prime-logics.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/functions.js';

const prime = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainPrimeLogics, name);

  startGame(greetingText, introQuestion, brainPrimeLogics, whatShouldYouDoCalcGame);
};



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
export default prime;
