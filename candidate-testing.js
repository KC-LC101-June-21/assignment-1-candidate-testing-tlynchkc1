const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;



const questions = ["Who was the first American woman in space? ",
                  "True or false: 5 kilometer == 5000 meters?",
                  "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
                  "What is the minimum crew size for the ISS?"];
const correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

let correctPerectage = 0;
const passingPercentage = .8;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //Part 1

// candidateAnswer = input.question(question);

  for (var q=0; q<questions.length;q++){
    candidateAnswers[q] = input.question(q + 1 + ") " + questions[q] + "\nYour answer: ");
    console.log("Correct Answer: " + correctAnswers [q] + "\n")
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // Part 1 
  // if (candidateAnswer===correctAnswer) {
  //  console.log("Correct");
  // } else {
  //  console.log("Incorrect");
  // }

  let grade;
  let numberCorrect=0;

  for (var q=0; q<questions.length;q++){
    if (candidateAnswers[q].toUpperCase() === correctAnswers[q].toUpperCase())   {
      numberCorrect++;
    }
  }
  correctPercentage = numberCorrect / questions.length;
  console.log(">>> Overall Grade: " + correctPercentage*100 + "% (" + numberCorrect + " of " + questions.length + " responses correct) <<<");
  if (correctPercentage >= passingPercentage) {
    console.log(">>> Status: PASSED");
  } else {
    console.log(">>> Status: FAILED");
  }
  grade = correctPercentage*100;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};