import { cons } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const createQA = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case 1: {
      const question = `${firstOperand} + ${secondOperand}`;
      const answer = String(firstOperand + secondOperand);
      return cons(question, answer);
    }
    case 2: {
      const question = `${firstOperand} - ${secondOperand}`;
      const answer = String(firstOperand - secondOperand);
      return cons(question, answer);
    }
    default: {
      const question = `${firstOperand} * ${secondOperand}`;
      const answer = String(firstOperand * secondOperand);
      return cons(question, answer);
    }
  }
};

const task = 'What is the result of the expression?';

const getQA = () => {
  const firstOperand = getRandom();
  const secondOperand = getRandom();
  const operator = getRandom(1, 3);
  return createQA(firstOperand, secondOperand, operator);
};
export default () => startGame(task, getQA);
