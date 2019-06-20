import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const task = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => number % 2 === 0;

const getQA = () => {
  const randomNumber = getRandom();

  const question = randomNumber;
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => startGame(task, getQA);
