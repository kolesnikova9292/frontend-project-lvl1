import {checkingYourQuestion, greeting, randomNumber} from "../src/steps.js";
import {greetingText, introQuestion, whatShouldYouDoProgressionGame} from "../src/consts.js";

export const pregression = () => {
    const name = greeting(greetingText, introQuestion, whatShouldYouDoProgressionGame);

    for(let step = 0; step < 3; step++) {
        const zeroElement = randomNumber();
        const stepProgression = randomNumber();
        const amount = randomNumber(5, 10);

        const progression = [];

        for (let elementNumber = 0; elementNumber < amount; elementNumber++) {
            progression.push(zeroElement + elementNumber * stepProgression);
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

pregression();