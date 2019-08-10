import { car, cdr } from '@hexlet/pairs';

export const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getElementByIndex = (list, index) => {
  const iter = (tail, counter) => {
    if (index === counter) {
      return car(tail);
    }

    return iter(cdr(tail), counter + 1);
  };
  return iter(list, 0);
};

export const length = (list) => {
  const iter = (tail, acc) => {
    if (cdr(tail) === null) {
      return acc;
    }

    return iter(cdr(tail), acc + 1);
  };

  return iter(list, 0);
};
