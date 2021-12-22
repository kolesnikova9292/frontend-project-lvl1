#!/usr/bin/env node
import prime from '../src/games/brain-prime-all.js';

/* const prime = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoPrimeGame);
  for (let step = 0; step < 3; step += 1) {
    const number = randomNumber();
    let rightAnswer = 'yes';
    for (let num = 2; num < number; num += 1) {
      if (number % num === 0) {
        rightAnswer = 'no';
        break;
      }
    }
    const result = guessAnswers(number, name, rightAnswer.toString());
    if (result === 'fail') {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}; */

prime();
