import React from 'react';

function Question({ data, onAnswerSelected }) {
  return (
    <div>
      <h2>{data.question}</h2>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelected(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
