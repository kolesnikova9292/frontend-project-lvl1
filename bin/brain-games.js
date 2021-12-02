#!/usr/bin/env node

import readlineSync from "readline-sync";
import {greetingText, introQuestion} from "../src/consts.js";

const start = () => {
    console.log(greetingText);
    const name = readlineSync.question(introQuestion);
    console.log(`Hello, ${name}!`);
};
//console.log(111);
start();
