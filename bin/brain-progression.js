import {checkingYourQuestion, greeting, randomNumber} from "../src/steps.js";
import {greetingText, introQuestion, whatShouldYouDoProgressionGame} from "../src/consts.js";

export const pregression = () => {
    const name = greeting(greetingText, introQuestion, whatShouldYouDoProgressionGame);

    for(let step = 0; step < 3; step++) {
        const zeroElement = randomNumber();
        const step = randomNumber();
        const amount = randomNumber(5, 10);

        const progression = [];

        for (let i = 0; i < amount; i++) {
            progression.push(zeroElement + i * step);
        }

        const skippedNumber = randomNumber(0, amount - 1);

        const rightAnswer = progression[skippedNumber];

        progression[skippedNumber] = '..';

        const result = checkingYourQuestion(progression, name, rightAnswer.toString());
        if(result === 'fail') {
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
    return;
};

const findGCD = (number1, number2) => {
    if (!number2) {
        return number1;
    }

    return findGCD(number2, number1 % number2);
};

pregression();
