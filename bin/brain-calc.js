import {checking, chooseSign, greeting} from "../src/steps.js";

export const calc = () => {
    const name = greeting();

    for(let step = 0; step < 3; step++) {
        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);
        const sign = chooseSign(['+', '-', '*']);
        const result = checking(number1 + sign + number2, name, eval(number1 + sign + number2).toString());
        if(result === 'fail') {
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
    return;
};

calc();

/*export const calc = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for(let step = 0; step < 3; step++) {

        const number1 = Math.floor(Math.random() * 100);
        const number2 = Math.floor(Math.random() * 100);

        const signs = ['+', '-', '*'];

        const sign = signs[Math.floor(Math.random() * 3)];

        console.log(`Question: ${number1} ${sign} ${number2}`);

        const answer = readlineSync.question('Your answer: ');

        const realAnswer = eval(number1 + sign + number2);

        if(parseInt(answer) !== realAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
            console.log(`Let's try again, ${name}!`);
            return;
        } else {
            console.log('Correct!');

        }
    }
    console.log(`Congratulations, ${name}!`);
    return;
};*/
