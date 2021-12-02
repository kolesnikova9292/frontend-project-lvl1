import readlineSync from 'readline-sync';

//const randomNumber = (from, to) => Math.floor(Math.random() * 100);
const randomNumber = (from = 1, to = 100) => Math.floor(Math.random() * to) + from;

const chooseSign = (signs) => signs[Math.floor(Math.random() * signs.length)];

const greeting = (greetingText, introQuestion, whatShouldYouDo) => {
  console.log(greetingText);
  const name = readlineSync.question(introQuestion);
  console.log(`Hello, ${name}!`);
  console.log(whatShouldYouDo);
  return name;
};

const checkingYourQuestion = (expression, name, realAnswer) => {
  console.log(`Question: ${expression}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer !== realAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
    console.log(`Let's try again, ${name}!`);
    return 'fail';
  } else {
    console.log('Correct!');
  }
};

export { chooseSign, greeting, checkingYourQuestion, randomNumber };
