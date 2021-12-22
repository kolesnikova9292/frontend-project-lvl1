const findGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGCD(number2, number1 % number2);
};

const brainGCDLogics = () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const gcn = findGCD(number1, number2);
  // const result = guessAnswers(`${number1} ${number2}`, name, gcn.toString());

  return {
    expression: `${number1} ${number2}`, rightAnswer: gcn.toString(),
  };
};

export default brainGCDLogics;
