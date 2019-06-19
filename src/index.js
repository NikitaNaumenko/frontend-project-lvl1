import readlineSync from 'readline-sync';

const roundsCount = 3;
const initRound = 1;

const getRandom = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName} !`);

  const iter = (acc) => {
    if (acc > roundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const randomNumber = getRandom(1, 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer:');
    if ((randomNumber % 2 === 0 && userAnswer === 'yes') || (randomNumber % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
      iter(acc + 1);
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}`);
    }
  };

  return iter(initRound);
};
