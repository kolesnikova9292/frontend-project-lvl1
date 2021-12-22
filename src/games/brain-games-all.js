import { greetingText, introQuestion } from '../consts.js';
import greeting from '../steps/greeting.js';

const brainGames = () => {
  greeting(greetingText, introQuestion);
};

export default brainGames;
