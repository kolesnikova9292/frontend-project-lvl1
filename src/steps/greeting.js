import readlineSync from "readline-sync";

const greeting = (greetingText, introQuestion, whatShouldYouDo) => {
  console.log(greetingText);
  const name = readlineSync.question(introQuestion);
  console.log(`Hello, ${name}!`);
  console.log(whatShouldYouDo);
  return name;
};

export default greeting;
