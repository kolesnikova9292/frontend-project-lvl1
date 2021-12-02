#!/usr/bin/env node
import { checkingYourQuestion, greeting, randomNumber } from '../src/steps.js';
import { greetingText, introQuestion, whatShouldYouDoEvenGame } from '../src/consts.js';

export const even = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoEvenGame);

  for (let step = 0; step < 3; step += 1) {
    const number = randomNumber();
    const realAnswer = number % 2 === 1 ? 'no' : 'yes';
    const result = checkingYourQuestion(number, name, realAnswer);
    if (result === 'fail') {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

even();
