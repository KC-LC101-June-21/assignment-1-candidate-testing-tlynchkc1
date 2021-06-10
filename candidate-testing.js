const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = "Who was the first American woman in space? ";
// let correctAnswer = "Sally Ride";
// let candidateAnswer;


// console.log(`Part 1`);
//  // Using input.question method ask for the user to input the candidates name and store it with the candidateName variable;
// candidateName = input.question("Candidate Name: ");
// // Using a template literal greet the user by askForName
// console.log(`Greetings ${candidateName}.`);

// // ask the question using the input.question method and store the result in the candidateAnswer variable

// candidateAnswer = input.question(question);

// // check to see if the user answered correctly. Check the correct answer and candidate answer match when both converted to all uppercase (this is to eliminate any syntax errors. Let the user know if his answer is correct or not.

// if (candidateAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
//   console.log(`${candidateAnswer} is correct\n`);
// } else {
//   console.log(`${candidateAnswer} is incorrect\n`);
// }

// array of Questions. Stored as a const because these will not change

const questions = ["Who was the first American woman in space? ",
                  "True or false: 5 kilometer == 5000 meters? ",
                  "(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                  "What is the minimum crew size for the ISS? "];


// array of correct answers. Stored as a const because these will not change
const correctAnswers = ["Sally Ride","true","40","Trajectory","3"];

// Empty array to hold the Candidate's answers
let candidateAnswers = [];

// Find the total number of questions by checking the total number of elements in the question array so we know how many times to loop.
let totalQuestions = questions.length;

// Grade Percentage before any questions are asked;
let correctPerectage = 0;
// Passing Percentage
const passingPercentage = 80;


console.log(`Part 2&3\n`);

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  // Using input.question method ask for the user to input the candidates name and store it with the candidateName variable;
  candidateName = input.question("Candidate Name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  // Part II
  // Ask Questinos

  // loop through the arraay of questions using a for loop with a input statement in each loop. The number of loops depends the number of stings inside the questions array. In this case the lenth of the question array is 4 and the q variable of the loop will start at 0 and increase to 4. Ex. q=0 candidateAnswers[q] would display the string "Who is the first woman in space?" and answers[q] would be "Sally Ride"
  
  // loop through the array of questions, print the user's answer followed by the correct answer on the next line.
  for (let q = 0; q < totalQuestions; q++){
    candidateAnswers[q] = input.question(`${q + 1} ) ${questions[q]} \nYour answer: `);
    console.log(`Correct Answer: ${correctAnswers[q]} \n`);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // Part 1 
  // check if candidate answer is correct, convert to uppercase to prevent case sensitve errors

  // Part 3
  // Grading
  

  let grade;
  // This variable will store the number answers the candidate gets right
  let numberCorrect=0;

  // loop through the candidateAnsers array and see how many the canidate got correct.
  for (let q=0; q<totalQuestions;q++){
    // Check if both the canidate answer and the correct answer are equal. Convert both strings to upper case so that thier are no case sesative errors.
    if (candidateAnswers[q].toUpperCase() === correctAnswers[q].toUpperCase())   {
      numberCorrect++;
    }
  }

  // deviding the number of answers correct by the number of questions will give us the grade perctange when multiplied by 100
  grade = (numberCorrect / questions.length) * 100;

  // Log to console the overall grade and how many correct answers the candidate got out of the total number of questions.

  console.log(`>>> Overall Grade: ${grade}% (${numberCorrect} of ${totalQuestions} responses correct) <<<`);

  // Check is the candidates grade is equal or great than the passing percentage, 80. if so Display Passed or if below 80 display failed
  if (grade >= passingPercentage) {
    console.log(">>> Status: PASSED");
  } else {
    console.log(">>> Status: FAILED");
  }

  // Return candidate grade from function call
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