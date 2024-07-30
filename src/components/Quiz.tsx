import React, { useState } from "react";
import Question from "./Question";
import questions from "../quiz_data/questions";

interface UserAnswer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const handleAnswerOptionClick = (answer: string) => {
    const correctAnswer = questions[currentQuestion].answer;
    const explanation = getExplanation(currentQuestion);

    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    setUserAnswers([
      ...userAnswers,
      {
        question: questions[currentQuestion].question,
        userAnswer: answer,
        correctAnswer,
        explanation,
      },
    ]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers([]);
  };

  const getExplanation = (index: number): string => {
    switch (index) {
      case 0:
        return "The Single Responsibility Principle states that a class should have only one reason to change, meaning it should have only one job or responsibility.";
      case 1:
        return "The Open/Closed Principle states that software entities should be open for extension but closed for modification.";
      case 2:
        return "The Liskov Substitution Principle ensures that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.";
      case 3:
        return "The Interface Segregation Principle states that a class should only implement the methods it uses, promoting smaller and more specific interfaces.";
      case 4:
        return "The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; both should depend on abstractions.";
      case 5:
        return "The Single Responsibility Principle ensures that a class should have one and only one reason to change.";
      case 6:
        return "Modifying existing code to add new features violates the Open/Closed Principle, which promotes extending existing functionality without modifying existing code.";
      case 7:
        return "The purpose of the Liskov Substitution Principle is to allow subclasses to replace base classes without altering the program's correctness.";
      case 8:
        return "The Interface Segregation Principle improves software design by splitting large interfaces into smaller, more specific ones.";
      case 9:
        return "The Dependency Inversion Principle is concerned with decoupling software modules to make the system more modular and maintainable.";
      default:
        return "";
    }
  };

  const renderFeedbackMessage = () => {
    if (score >= questions.length - 3) {
      return (
        <div className="congrats-message">
          🎉 Congratulations! You scored {score} out of {questions.length}!
          Excellent work! 🎉
        </div>
      );
    } else {
      return (
        <div className="cheer-up-message">
          👍 You scored {score} out of {questions.length}. Good effort! Keep
          practicing and you'll get there! 👍
        </div>
      );
    }
  };

  const renderUserAnswers = () => {
    return userAnswers.map((answer, index) => (
      <div key={index} className="answer-review">
        <p>
          <strong>Question:</strong> {answer.question}
        </p>
        <p>
          <strong>Your Answer:</strong> {answer.userAnswer}
        </p>
        <p>
          <strong>Correct Answer:</strong> {answer.correctAnswer}
        </p>
        <p>
          <strong>Explanation:</strong> {answer.explanation}
        </p>
      </div>
    ));
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          {renderFeedbackMessage()}
          {renderUserAnswers()}
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
