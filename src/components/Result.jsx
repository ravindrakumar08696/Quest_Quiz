import React from 'react';

function Result({ score }) {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}</p>
    </div>
  );
}

export default Result;
