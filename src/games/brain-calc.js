import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/randomNumber.js';

const calc = () => {
  startGame(greetingText, introQuestion, brainCalcLogics, whatShouldYouDoCalcGame);
};

const brainCalcLogics = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  let value = 0;
  switch (sign) {
    case '+': {
      value = number1 + number2;
      break;
    }
    case '-': {
      value = number1 - number2;
      break;
    }
    case '*': {
      value = number1 * number2;
      break;
    }
    default:
      break;
  }

  return {
    expression: `${number1} ${sign} ${number2}`, rightAnswer: value.toString(),
  };
};

export default calc;
