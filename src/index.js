import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;
const initRound = 1;

export default (task, makeGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName} !`);

  const iter = (counter) => {
    if (counter > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const game = makeGame();
    const question = car(game);
    const answer = cdr(game);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer:');
    if (answer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };
  return iter(initRound);
};
