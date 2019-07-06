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
