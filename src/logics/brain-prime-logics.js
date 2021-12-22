import { randomNumber } from '../functions/functions';

const brainPrimeLogics = () => {

  const number = randomNumber();
  let rightAnswer = 'yes';
  for (let num = 2; num < number; num += 1) {
    if (number % num === 0) {
      rightAnswer = 'no';
      break;
    }
  };

  return {
    expression: number, rightAnswer: rightAnswer,
  };
};

export default brainPrimeLogics;
