#!/usr/bin/env node
import { greetingText, introQuestion, whatShouldYouDoEvenGame } from '../src/consts.js';
import { randomNumber } from '../src/functions/functions.js';
import greeting from '../src/steps/greeting.js';
import guessAnswers from '../src/steps/guessAnswers.js';
import even from "../src/games/brain-even-all.js";

/*const even = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoEvenGame);

  for (let step = 0; step < 3; step += 1) {
    const number = randomNumber();
    const realAnswer = number % 2 === 1 ? 'no' : 'yes';
    const result = guessAnswers(number, name, realAnswer);
    if (result === 'fail') {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};*/

even();
