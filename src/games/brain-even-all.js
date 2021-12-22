import greeting from '../steps/greeting';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts';
import startGame from '../steps/startGame';
import brainEvenLogics from '../logics/brain-even-logics';

const even = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainEvenLogics, name);
};

export default even;
