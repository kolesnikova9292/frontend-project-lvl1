#!/usr/bin/env node
import { greetingText, introQuestion, whatShouldYouDoProgressionGame } from '../src/consts.js';
import greeting from "../src/steps/greeting.js";
import guessAnswers from "../src/steps/guessAnswers.js";
import {randomNumber} from "../src/functions/functions";

const pregression = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoProgressionGame);

  for (let step = 0; step < 3; step += 1) {
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

    const result = guessAnswers(progression.join(' '), name, rightAnswer.toString());
    if (result === 'fail') {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

pregression();
