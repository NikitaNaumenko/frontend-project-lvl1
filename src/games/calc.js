import { cons, car, cdr } from '@hexlet/pairs';
import makeGame from '..';
import getRandom from '../utils';

export const getElementByIndex = (list, index) => {
  const iter = (tail, counter) => {
    if (index === counter) {
      return car(tail);
    }

    return iter(cdr(tail), counter + 1);
  };
  return iter(list, 0);
};

export const getLength = (list) => {
  const iter = (tail, acc) => {
    if (cdr(tail) === null) {
      return acc;
    }

    return iter(cdr(tail), acc + 1);
  };

  return iter(list, 0);
};

const createOperators = () => cons('*', cons('+', cons('-', null)));

const createAnswer = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default: break;
  }
  return null;
};

const task = 'What is the result of the expression?';

const getGameData = () => {
  const firstOperand = getRandom();
  const secondOperand = getRandom();

  const operators = createOperators();
  const operatorsLength = getLength(operators);
  const operatorIndex = getRandom(0, operatorsLength - 1);
  const operator = getElementByIndex(operators, operatorIndex);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = createAnswer(firstOperand, secondOperand, operator);

  return cons(question, String(answer));
};

export default () => makeGame(task, getGameData);
