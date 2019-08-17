import { cons } from '@hexlet/pairs';
import makeGame from '..';
import { getRandom, getElementByIndex, length } from '../utils';

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
  const operatorsLength = length(operators);
  const operatorIndex = getRandom(0, operatorsLength - 1);
  const operator = getElementByIndex(operators, operatorIndex);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = createAnswer(firstOperand, secondOperand, operator);

  return cons(question, String(answer));
};
export default () => makeGame(task, getGameData);
