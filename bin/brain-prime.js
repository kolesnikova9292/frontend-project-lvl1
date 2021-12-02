#!/usr/bin/env node
import { checkingYourQuestion, greeting, randomNumber } from '../src/steps.js';
import { greetingText, introQuestion, whatShouldYouDoPrimeGame } from '../src/consts.js';

export const prime = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoPrimeGame);

  for(let step = 0; step < 3; step++) {
    const number = randomNumber();
    let rightAnswer = 'yes';
    for (let num = 2; num < number; num++) {
      if(number % num === 0) {
        rightAnswer = 'no';
        break;
      }
    }
    const result = checkingYourQuestion(number, name, rightAnswer.toString());
    if(result === 'fail') {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return;
};

prime();
