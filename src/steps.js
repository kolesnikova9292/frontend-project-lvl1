import readlineSync from "readline-sync";

const randomNumber = () => Math.floor(Math.random() * 100);

const chooseSign = (signs) => signs[Math.floor(Math.random() * signs.length)];

const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    return name;
}

const checking = (expression, name, realAnswer) => {
    //const number1 = Math.floor(Math.random() * 100);
    //const number2 = Math.floor(Math.random() * 100);

    //const signs = ['+', '-', '*'];

    //const sign = signs[Math.floor(Math.random() * 3)];

    console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    //const realAnswer = eval(expression);

    if(answer !== realAnswer) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
        console.log(`Let's try again, ${name}!`);
        return "fail";
    } else {
        console.log('Correct!');
    }
    return;
}

export {chooseSign, greeting, checking, randomNumber}
