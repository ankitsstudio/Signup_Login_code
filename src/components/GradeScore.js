import React from 'react';

const GradeCard = ({ sol }) => {
  const totalQuestions = sol.length;
  const correctAnswers = sol.filter((isCorrect) => isCorrect).length;
  const incorrectAnswers = totalQuestions - correctAnswers;

  return (
    <div className="grade-card">
      <h2>Grade Score</h2>
      <p>Total Questions: {totalQuestions}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Incorrect Answers: {incorrectAnswers}</p>
      {/* You can add more details or styling as needed */}
    </div>
  );
};

export default GradeCard;
