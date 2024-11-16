import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Rome', 'Berlin'],
    answer: 'Paris',
  },
  {
    question: 'Who is the CEO of Tesla?',
    options: ['Elon Musk', 'Jeff Bezos', 'Bill Gates', 'Steve Jobs'],
    answer: 'Elon Musk',
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    answer: 'Jupiter',
  },
];

function Quiz({ onQuizCompletion }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizCompletion(score + 1);
    }
  };

  return (
    <div>
      <Question
        data={quizData[currentQuestionIndex]}
        onAnswerSelected={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
