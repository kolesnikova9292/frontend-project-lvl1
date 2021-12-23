import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainProgressionLogics from '../logics/brain-progression-logics.js';
import { greeting, startGame } from '../steps/gameSteps.js';

const progression = () => {
  const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  startGame(brainProgressionLogics, name);
};
export default progression;
