import readlineSync from 'readline-sync';

const guessAnswers = (expression, name, realAnswer) => {
  console.log(`Question: ${expression}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer !== realAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return 'fail';
  }
  console.log('Correct!');
  return true;
};

export default guessAnswers;
