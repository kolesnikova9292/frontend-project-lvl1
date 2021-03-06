import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
import { startGame } from '../steps/gameSteps.js';
import randomNumber from '../functions/randomNumber.js';

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

const gcd = () => {
  startGame(greetingText, introQuestion, brainGCDLogics, whatShouldYouDoCalcGame);
};

export default gcd;
