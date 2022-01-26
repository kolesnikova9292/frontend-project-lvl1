import { greetingText, introQuestion, whatShouldYouDoCalcGame } from './consts.js';
//import brainProgressionLogics from '../logics/brain-progression-logics.js';
import { startGame } from '../steps/gameSteps.js';
import { randomNumber } from '../functions/randomNumber.js';

const progression = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainProgressionLogics, name);

  startGame(greetingText, introQuestion, brainProgressionLogics, whatShouldYouDoCalcGame);
};

const brainProgressionLogics = () => {
  const zeroElement = randomNumber();
  const stepProgression = randomNumber();
  const amount = randomNumber(5, 10);

  const progression = [];

  for (let elementNumber = 0; elementNumber < amount; elementNumber += 1) {
    progression.push(zeroElement + elementNumber * stepProgression);
  }

  const skippedNumber = randomNumber(0, amount - 1);

  const rightAnswer = progression[skippedNumber];

  progression[skippedNumber] = '..';

  return {
    expression: progression.join(' '), rightAnswer: rightAnswer.toString(),
  };
};

export default progression;
