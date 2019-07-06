import { cons } from '@hexlet/pairs';
import makeGame from '..';
import getRandom from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandom();
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => makeGame(task, getGameData);
