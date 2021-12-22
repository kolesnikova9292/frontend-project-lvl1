import {randomNumber} from '../functions/functions';

const brainEvenLogics = () => {
  const number = randomNumber();
  const realAnswer = number % 2 === 1 ? 'no' : 'yes';
  // const result = guessAnswers(number, name, realAnswer);

  return {
    expression: number, rightAnswer: realAnswer.toString()
  }
}

export default brainEvenLogics
