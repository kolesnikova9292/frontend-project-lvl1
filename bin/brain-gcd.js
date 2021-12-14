#!/usr/bin/env node
import { greetingText, introQuestion, whatShouldYouDoGCDGame } from '../src/consts.js';
import greeting from "../src/steps/greeting.js";
import guessAnswers from "../src/steps/guessAnswers.js";

const findGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGCD(number2, number1 % number2);
};

const gcd = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoGCDGame);
  for (let step = 0; step < 3; step += 1) {
    const number1 = Math.floor(Math.random() * 100);
    const number2 = Math.floor(Math.random() * 100);
    const gcn = findGCD(number1, number2);
    const result = guessAnswers(`${number1} ${number2}`, name, gcn.toString());
    if (result === 'fail') {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

gcd();
