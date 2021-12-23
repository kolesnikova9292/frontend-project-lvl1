import { greetingText, introQuestion } from '../consts.js';
import { greeting } from '../steps/gameSteps.js';

const brainGames = () => {
  greeting(greetingText, introQuestion);
};

export default brainGames;
