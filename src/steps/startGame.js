import guessAnswers from './guessAnswers.js';

const startGame = (logicOfGame, name, stepsCount = 3) => {
  for (let step = 0; step < stepsCount; step += 1) {

    const { expression, rightAnswer } = logicOfGame();

    const result = guessAnswers(expression, name, rightAnswer.toString());

    // const result = guessAnswers(`${number1} ${sign} ${number2}`, name, value.toString());
    if (result === 'fail') {
      return;
    }
  }
};

export default startGame;
