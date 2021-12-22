#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetingText, introQuestion } from '../src/consts.js';
import brainGames from "../src/games/brain-games-all.js";

/*const start = () => {
  console.log(greetingText);
  const name = readlineSync.question(introQuestion);
  console.log(`Hello, ${name}!`);
};*/

//start();

brainGames();
