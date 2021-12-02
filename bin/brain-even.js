import {checkingYourQuestion, greeting, randomNumber} from "../src/steps.js";
import {greetingText, introQuestion, whatShouldYouDoEvenGame} from "../src/consts.js";
import readlineSync from "readline-sync";

export const even = () => {

    //const name = greeting(greetingText, introQuestion, whatShouldYouDoEvenGame);

    console.log(greetingText);
    const name = readlineSync.question(introQuestion);
    console.log(`Hello, ${name}!`);
    //console.log(whatShouldYouDoEvenGame);

    /*for(let step = 0; step < 3; step++) {
        const number = randomNumber();
        const realAnswer = number % 2 === 1 ? 'no' : 'yes';
        const result = checkingYourQuestion(number, name, realAnswer);
        if(result === 'fail') {
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
    return;*/
};

even();
