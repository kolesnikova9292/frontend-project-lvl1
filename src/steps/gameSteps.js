import readlineSync from 'readline-sync';

const greeting = (greetingText, introQuestion, whatShouldYouDo = '') => {
  console.log(greetingText);
  const name = readlineSync.question(introQuestion);
  console.log(`Hello, ${name}!`);
  if (whatShouldYouDo) console.log(whatShouldYouDo);
  return name;
};

const guessAnswers = (expression, name, realAnswer) => {
  console.log(`Question: ${expression}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer !== realAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return 'fail';
  }
  console.log('Correct!');

  console.log(`Congratulations, ${name}!`);
  return true;
};

const startGame = (logicOfGame, name, stepsCount = 3) => {
  for (let step = 0; step < stepsCount; step += 1) {
    const { expression, rightAnswer } = logicOfGame();

    const result = guessAnswers(expression, name, rightAnswer.toString());

    if (result === 'fail') {
      return;
    }
  }
};

export { greeting, guessAnswers, startGame };