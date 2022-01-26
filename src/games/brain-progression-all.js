import { greetingText, introQuestion, whatShouldYouDoCalcGame } from '../consts.js';
import brainProgressionLogics from '../logics/brain-progression-logics.js';
import { startGame } from '../steps/gameSteps.js';

const progression = () => {
  //const name = greeting(greetingText, introQuestion, whatShouldYouDoCalcGame);
  //startGame(brainProgressionLogics, name);

  startGame(greetingText, introQuestion, brainProgressionLogics, whatShouldYouDoCalcGame);
};
export default progression;
