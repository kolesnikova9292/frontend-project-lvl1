/*import readlineSync from "readline-sync";

const play = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}*/


import {checking, greeting, randomNumber} from "../src/steps.js";

export const even = () => {
    const name = greeting();

    for(let step = 0; step < 3; step++) {
        const number = randomNumber();
        const realAnswer = number % 2 === 1 ? 'no' : 'yes';
        checking(number, name, realAnswer);
        /*console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        const realAnswer = number % 2 === 1 ? 'no' : 'yes';

        if(answer !== realAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        } else {
            console.log('Correct!');

        }*/
    }

    console.log(`Congratulations, ${name}!`);
    return;
};

even();
