import greeting from '../steps/greeting.js';
import {greetingText, introQuestion, whatShouldYouDoCalcGame} from '../consts.js';
import startGame from '../steps/startGame.js';
import brainCalcLogics from '../logics/brain-calc-logics.js';

const calc = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainCalcLogics, name);
  /* for (let step = 0; step < 3; step += 1) {
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
    const result = guessAnswers(`${number1} ${sign} ${number2}`, name, value.toString());
    if (result === 'fail') {
      return;
    }
  } */
  // console.log(`Congratulations, ${name}!`);
};

export default calc;
