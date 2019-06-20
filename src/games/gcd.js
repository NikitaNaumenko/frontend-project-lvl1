import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const remainder = (a, b) => a % b;
const findGcd = (a, b) => {
  if (b === 0) {
    return String(a);
  }
  return findGcd(b, remainder(a, b));
};

const getQA = () => {
  const firstOperand = getRandom();
  const secondOperand = getRandom();
  const question = `${firstOperand} ${secondOperand}`;
  const answer = findGcd(firstOperand, secondOperand);
  return cons(question, answer);
};
export default () => startGame(task, getQA);
