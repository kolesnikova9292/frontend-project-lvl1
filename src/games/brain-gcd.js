import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
//import brainGCDLogics from '../logics/brain-gcd-logics.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/randomNumber.js';

const gcd = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainGCDLogics, name);

  startGame(greetingText, introQuestion, brainGCDLogics, whatShouldYouDoCalcGame);
};



const findGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGCD(number2, number1 % number2);
};

const brainGCDLogics = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const gcn = findGCD(number1, number2);

  return {
    expression: `${number1} ${number2}`, rightAnswer: gcn.toString(),
  };
};

export default gcd;
