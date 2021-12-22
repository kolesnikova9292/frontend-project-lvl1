import { randomNumber } from '../functions/functions';

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
    expression: progression, rightAnswer: rightAnswer.toString(),
  };
}

export default brainProgressionLogics