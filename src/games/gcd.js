import { cons } from '@hexlet/pairs';
import makeGame from '..';
import getRandom from '../utils';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) {
    return String(a);
  }
  return findGcd(b, a % b);
};

const getGameData = () => {
  const firstOperand = getRandom();
  const secondOperand = getRandom();
  const question = `${firstOperand} ${secondOperand}`;
  const answer = findGcd(firstOperand, secondOperand);
  return cons(question, answer);
};
export default () => makeGame(task, getGameData);
