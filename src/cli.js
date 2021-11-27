//import readlineSync from 'readline-sync';
//import readlineSync from './readline-sync';

import readlineSync from "readline-sync";

//const name = readlineSync.question('Your answer: ');

export const greeting = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    //return 0;
};

//export { cube };


/*
*
* $ brain-games
Welcome to the Brain Games!
May I have your name? John
Hello, John!
*
* */
