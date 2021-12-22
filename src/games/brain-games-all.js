import {greetingText, introQuestion} from "../consts.js";
import readlineSync from "readline-sync";
import greeting from "../steps/greeting.js";


const brainGames = () => {
  greeting(greetingText, introQuestion);
  /*startGame(brainEvenLogics, name);

  console.log(greetingText);
  const name = readlineSync.question(introQuestion);
  console.log(`Hello, ${name}!`);*/
};

export default brainGames;
