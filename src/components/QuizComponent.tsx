import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import GlossaryLink from './GlossaryLink';

interface Option {
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

interface Question {
  question: string;
  options: Option[];
  explanation?: string;
}

interface QuizProps {
  quiz: Question[];
  onComplete: () => void;
}

export default function QuizComponent({ quiz, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quiz.length).fill(-1));
  const [checkedAnswers, setCheckedAnswers] = useState<boolean[]>(new Array(quiz.length).fill(false));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isSubmitted || checkedAnswers[currentQuestion]) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers[currentQuestion] === -1) {
      alert('Please select an answer before checking.');
      return;
    }
    
    const newCheckedAnswers = [...checkedAnswers];
    newCheckedAnswers[currentQuestion] = true;
    setCheckedAnswers(newCheckedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswers.includes(-1)) {
      alert('Please answer all questions before submitting.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    onComplete();
  };

  const score = isSubmitted
    ? selectedAnswers.reduce(
        (acc, answer, index) => (quiz[index].options[answer].isCorrect ? acc + 1 : acc),
        0
      )
    : 0;

  const getAnswerClassName = (questionIndex: number, answerIndex: number) => {
    const isChecked = checkedAnswers[questionIndex];
    const isSelected = selectedAnswers[questionIndex] === answerIndex;
    const isCorrect = quiz[questionIndex].options[answerIndex].isCorrect;

    if (!isChecked && !isSubmitted) {
      return isSelected ? 'bg-blue-100 border-blue-500' : 'hover:bg-gray-50';
    }

    if (isCorrect) {
      return 'bg-green-100 border-green-500';
    }

    if (isSelected && !isCorrect) {
      return 'bg-red-100 border-red-500';
    }

    return 'opacity-50';
  };

  const allQuestionsAnswered = !selectedAnswers.includes(-1);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {quiz.length}
        </div>
        {isSubmitted && (
          <div className="text-sm font-medium">
            Score: {score}/{quiz.length} ({Math.round((score / quiz.length) * 100)}%)
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mb-6"
        >
          <h3 className="text-lg font-medium mb-4">{quiz[currentQuestion].question}</h3>
          <div className="space-y-3">
            {quiz[currentQuestion].options.map((option, index) => (
              <div key={index} className="space-y-2">
                <button
                  onClick={() => handleAnswer(index)}
                  disabled={checkedAnswers[currentQuestion] || isSubmitted}
                  className={`w-full p-4 text-left border rounded transition-colors ${getAnswerClassName(
                    currentQuestion,
                    index
                  )}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option.text}</span>
                    {(checkedAnswers[currentQuestion] || isSubmitted) && (
                      <span>
                        {option.isCorrect ? (
                          <Check className="text-green-600" size={20} />
                        ) : selectedAnswers[currentQuestion] === index ? (
                          <X className="text-red-600" size={20} />
                        ) : null}
                      </span>
                    )}
                  </div>
                </button>
                {(checkedAnswers[currentQuestion] || isSubmitted) && 
                  selectedAnswers[currentQuestion] === index && 
                  option.explanation && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-4 py-2 rounded-lg text-sm"
                      style={{
                        backgroundColor: option.isCorrect ? "rgba(0, 255, 0, 0.05)" : "rgba(255, 0, 0, 0.05)"
                      }}
                    >
                      <p className={option.isCorrect ? "text-green-700" : "text-red-700"}>
                        {option.explanation}
                      </p>
                    </motion.div>
                )}
              </div>
            ))}
          </div>

          {(checkedAnswers[currentQuestion] || isSubmitted) && quiz[currentQuestion].explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
            >
              <h4 className="font-medium mb-2 text-blue-800">Explanation:</h4>
              <p className="text-gray-700">{quiz[currentQuestion].explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentQuestion === quiz.length - 1}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="space-x-2">
          {!checkedAnswers[currentQuestion] && !isSubmitted && (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedAnswers[currentQuestion] === -1}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
            >
              Check Answer
            </button>
          )}
          {!isSubmitted && allQuestionsAnswered && (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Submit Quiz
            </button>
          )}
        </div>
      </div>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200"
        >
          <h3 className="font-medium mb-2">Quiz Complete!</h3>
          <p>
            You scored {score} out of {quiz.length} ({Math.round((score / quiz.length) * 100)}%)
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Review your answers above. Terms are linked to the{' '}
            <GlossaryLink term="Glossary">glossary</GlossaryLink> for further study.
          </p>
          <button
            onClick={handleContinue}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Continue
          </button>
        </motion.div>
      )}
    </div>
  );
}
