import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  handleAnswerOptionClick: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  options,
  handleAnswerOptionClick,
}) => {
  return (
    <div className="question-section">
      <div className="question-text">{question}</div>
      <div className="answer-section">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerOptionClick(option.charAt(0))}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
