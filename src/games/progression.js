import { cons, car, cdr } from '@hexlet/pairs';
import makeGame from '..';
import { getRandom } from '../utils';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const isEmpty = list => list === null;

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

  return iter(cdr(list), initPair);
};

const getProgression = (beginNumber, step) => {
  const beginElement = cons(beginNumber, null);

  const iter = (acc, counter) => {
    if (counter === progressionLength) {
      return reverse(acc);
    }

    const element = car(acc) + step;
    return iter(cons(element, acc), counter + 1);
  };

  return iter(beginElement, 1);
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

const getGameData = () => {
  const hiddenProgressionIndexElement = getRandom(0, progressionLength - 1);
  const progressionStep = getRandom();
  const beginProgressionNumber = getRandom();
  const progression = getProgression(beginProgressionNumber, progressionStep);
  const hiddenProgressionElement = beginProgressionNumber + hiddenProgressionIndexElement * progressionStep;

  const answer = String(hiddenProgressionElement)
  const question = createQuestion(progression, hiddenProgressionIndexElement);

  return cons(question, answer);
};

export default () => makeGame(task, getGameData);
