import { cons } from '@hexlet/pairs';
import makeGame from '..';
import getRandom from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;

  const iter = (div) => {
    if (div > num / 2) {
      return true;
    }

    if (num % div === 0) {
      return false;
    }

    return iter(div + 1);
  };
  return iter(2);
};

const getGameData = () => {
  const question = getRandom();
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => makeGame(task, getGameData);
