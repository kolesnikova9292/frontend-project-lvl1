import { randomNumber } from '../functions/functions.js';

const brainEvenLogics = () => {
  const number = randomNumber();
  const realAnswer = number % 2 === 1 ? 'no' : 'yes';

  return {
    expression: number, rightAnswer: realAnswer.toString(),
  };
};

export default brainEvenLogics;
