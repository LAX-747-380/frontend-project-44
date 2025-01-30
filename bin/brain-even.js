#!/usr/bin/env node
import readlineSync from "readline-sync";
import greetingUser from "../src/cli.js";

const isEven = () => {
  const userName = greetingUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const questionNumber = Math.floor(Math.random() * 100);
    const correctAnswer = questionNumber % 2 === 0 ? "yes" : "no";
    const userAnswer = readlineSync.question(
      `Question: ${questionNumber}\nYour answer: `
    );

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

isEven();
