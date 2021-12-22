import greeting from '../steps/greeting.js';
import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import startGame from '../steps/startGame.js';
import brainProgressionLogics from '../logics/brain-progression-logics.js';

const progression = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainProgressionLogics, name);
};
export default progression;
