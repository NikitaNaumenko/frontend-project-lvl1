import { cons, car, cdr } from '@hexlet/pairs';
import makeGame from '..';
import { getRandom } from '../utils';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const isEmpty = list => list === null;

const reverse = (list) => {
  const initElement = car(list);

  const iter = (tail, acc) => {
    if (isEmpty(tail)) {
      return acc;
    }
    const newAcc = cons(car(tail), acc);
    return iter(cdr(tail), newAcc);
  };

  return iter(cdr(list), cons(initElement, null));
};

const getProgression = (beginNumber, step, length) => {
  const beginElement = cons(beginNumber, null);

  const iter = (acc, counter) => {
    if (counter === length) {
      return reverse(acc);
    }

    const element = car(acc) + step;
    return iter(cons(element, acc), counter + 1);
  };

  return iter(beginElement, 1);
};

const createQuestion = (list, hiddenElementIndex) => {
  const iter = (acc, tail, counter) => {
    if (isEmpty(tail)) {
      return acc;
    }

    if (counter === hiddenElementIndex) {
      return iter(`${acc} ..`, cdr(tail), counter + 1);
    }

    const newElement = car(tail);
    const newAcc = acc.length > 0 ? `${acc} ${newElement}` : `${newElement}`;
    return iter(newAcc, cdr(tail), counter + 1);
  };
  return iter('', list, 0);
};

const getGameData = () => {
  const hiddenElementIndex = getRandom(0, progressionLength - 1);
  const step = getRandom();
  const start = getRandom();
  const progression = getProgression(start, step, progressionLength);

  const answer = start + hiddenElementIndex * step;
  const question = createQuestion(progression, hiddenElementIndex);

  return cons(question, String(answer));
};

export default () => makeGame(task, getGameData);
