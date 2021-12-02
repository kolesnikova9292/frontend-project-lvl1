#!/usr/bin/env node
import {checkingYourQuestion, chooseSign, greeting} from "../src/steps.js";
import {greetingText, introQuestion, whatShouldYouDoCalcGame} from "../src/consts.js";

export const calc = () => {
    const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);

    for(let step = 0; step < 3; step++) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const sign = chooseSign(['+', '-', '*']);
        const result = checkingYourQuestion(number1 + ' ' + sign + ' ' + number2, name, eval(number1 + sign + number2).toString());
        if(result === 'fail') {
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
    return;
};

calc();
