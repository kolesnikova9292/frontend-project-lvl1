import { chooseSign } from '../functions/functions.js';

const brainCalcLogics = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
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

export default brainCalcLogics;
