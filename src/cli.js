import readlineSync from "readline-sync";

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const munbers = [15, 6, 7];

    for(let i = 0; i < munbers.length; i++) {
        console.log(`Question: ${munbers[i]}`);
        const answer = readlineSync.question('Your answer: ');
        const realAnswer = munbers[i] % 2 === 1 ? 'no' : 'yes';

        if(answer !== realAnswer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${realAnswer}.`);
            console.log(`Let\'s try again, ${name}!`);
            return;
        } else {
            console.log('Correct!');

        }
    }

    console.log(`Congratulations, ${name}!`);
    return;
};
