import { greetingText, introQuestion } from '../consts.js';
import { startGame } from '../steps/gameSteps.js';

const brainGames = () => {
  //greeting(greetingText, introQuestion);

  startGame(greetingText, introQuestion);
};

export default brainGames;
