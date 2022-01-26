import { greetingText, introQuestion } from './consts.js';
import { startGame } from '../steps/gameSteps.js';

const brainGames = () => {
  startGame(greetingText, introQuestion);
};

export default brainGames;
