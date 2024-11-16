import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      {showResult ? (
        <Result score={score} />
      ) : (
        <Quiz onQuizCompletion={handleQuizCompletion} />
      )}
    </div>
  );
}

export default App;
