import React, { useState } from 'react';

const McqCard = ({ questionData, questionNumber, sol, onAnswerClick }) => {
  const {
    question,
    filteredAnswers,
    correctOptions,
  } = questionData;

  const ans = Object.values(filteredAnswers);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerClickInternal = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const isCorrect = correctOptions.includes(selectedOption);
    setIsCorrect(isCorrect);
    
    // Pass the data back to the parent component
    onAnswerClick(questionNumber, selectedOption, correctOptions);
  };

  const renderAnswers = () => {
    const nonNullAnswers = ans.filter((answer) => answer !== null);

    return nonNullAnswers.map((answer, index) => {
      const answerKey = `answer_${String.fromCharCode(97 + index)}`;

      return (
        <div
          key={index}
          onClick={() => handleAnswerClickInternal(answerKey)}
          style={{
            cursor: 'pointer',
            padding: '5px',
            border: '1px solid #ccc',
            marginBottom: '5px',
            backgroundColor: selectedAnswer === answerKey ? '#21D192' : '',
            color: selectedAnswer === answerKey ? 'black' : '',
          }}
        >
          {String.fromCharCode(97 + index)}. {answer}
        </div>
      );
    });
  };

  return (
    <div className='container mt-5'>
      <h3 key={questionNumber}>{`Question ${questionNumber}: ${question}`}</h3>
      <div>
        <strong>Answers:</strong>
        {renderAnswers()}
      </div>
      <div>
        {selectedAnswer && (
          <div className='mt-2 mb-2'>
            <strong>Your Selection:</strong> {selectedAnswer}
          </div>
        )}
      </div>
    </div>
  );
};

export default McqCard;
