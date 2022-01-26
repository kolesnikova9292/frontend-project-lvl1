import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
//import brainCalcLogics from '../logics/brain-calc-logics.js';
import { startGame } from '../steps/gameSteps.js';
import { chooseSign, randomNumber } from '../functions/functions.js';

const calc = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainCalcLogics, name);
  startGame(greetingText, introQuestion, brainCalcLogics, whatShouldYouDoCalcGame);
  //const startGame = (greetingText, introQuestion, logicOfGame, stepsCount = 3, whatShouldYouDo = '') =
};

const brainCalcLogics = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const sign = chooseSign(['+', '-', '*']);
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
