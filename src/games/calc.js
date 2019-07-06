import { cons } from '@hexlet/pairs';
import makeGame from '..';
import { getRandom, getElementByIndex } from '../utils';

const createOperators = () => cons('*', cons('+', cons('-', null)));

const createAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+': {
      return firstOperand + secondOperand;
    }
    case '-': {
      return firstOperand - secondOperand;
    }
    case '*': {
      return firstOperand * secondOperand;
    }
    default: break;
  }
  return null;
};

const task = 'What is the result of the expression?';

const getGameData = () => {
  const firstOperand = getRandom();
  const secondOperand = getRandom();

  const operators = createOperators();
  const indexOperator = getRandom(0, 2);
  const operator = getElementByIndex(operators, indexOperator);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = createAnswer(firstOperand, secondOperand, operator);

  return cons(question, answer);
};
export default () => makeGame(task, getGameData);
