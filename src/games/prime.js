import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isDivide = (a, b) => a % b === 0;
const square = n => n ** 2;

const findDivisior = (number, divisor) => {
  if (square(divisor) > number) {
    return number;
  }

  if (isDivide(number, divisor)) {
    return divisor;
  }

  return findDivisior(number, divisor + 1);
};

const isPrime = (number, divisor) => number === findDivisior(number, divisor);

const getQA = () => {
  const question = getRandom();
  const divisor = 2;
  const answer = isPrime(question, divisor) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => startGame(task, getQA);
