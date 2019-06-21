import { cons, car, cdr } from '@hexlet/pairs';
import startGame from '..';
import getRandom from '../utils';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const isEmpty = list => cdr(list) === null;

const reverse = (list) => {
  const initElement = car(list);
  const initPair = cons(initElement, null);

  const iter = (tail, acc) => {
    if (isEmpty(tail)) {
      return acc;
    }
    const newAcc = cons(car(tail), acc);
    return iter(cdr(tail), newAcc);
  };

  return iter(list, initPair);
};

const getProgression = () => {
  const step = getRandom();
  const beginProgression = getRandom();
  const beginElement = cons(beginProgression, null);

  const iter = (acc, counter) => {
    if (counter > progressionLength) {
      return reverse(acc);
    }

    const element = car(acc) + step;
    return iter(cons(element, acc), counter + 1);
  };

  return iter(beginElement, 1);
};

const getElementByIndex = (list, index) => {
  const iter = (tail, counter) => {
    if (index === counter) {
      return car(tail);
    }

    return iter(cdr(tail), counter + 1);
  };
  return iter(list, 0);
};

const createQuestion = (list, hiddenIndexElement) => {
  const iter = (acc, tail, counter) => {
    if (isEmpty(tail)) {
      return acc;
    }

    if (counter === hiddenIndexElement) {
      return iter(`${acc} ..`, cdr(tail), counter + 1);
    }

    const newElement = car(tail);
    return iter(`${acc} ${newElement}`, cdr(tail), counter + 1);
  };
  return iter('', list, 0);
};

const getQA = () => {
  const progression = getProgression();
  const hiddenIndexElement = getRandom(0, 9);
  const answer = String(getElementByIndex(progression, hiddenIndexElement));
  const question = createQuestion(progression, hiddenIndexElement);
  return cons(question, answer);
};

export default () => startGame(task, getQA);
