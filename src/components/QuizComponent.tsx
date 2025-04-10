import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlossaryLink from './GlossaryLink';

interface Option {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  options: Option[];
}

interface QuizProps {
  quiz: Question[];
  onComplete: () => void;
}

export default function QuizComponent({ quiz, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(quiz.length).fill(-1));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (isSubmitted) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
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
    if (!isSubmitted) {
      return selectedAnswers[questionIndex] === answerIndex
        ? 'bg-blue-100 border-blue-500'
        : 'hover:bg-gray-50';
    }

    const option = quiz[questionIndex].options[answerIndex];
    if (option.isCorrect) {
      return 'bg-green-100 border-green-500';
    }

    if (selectedAnswers[questionIndex] === answerIndex) {
      return 'bg-red-100 border-red-500';
    }

    return 'opacity-50';
  };

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
          <div className="space-y-2">
            {quiz[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`w-full p-3 text-left border rounded transition-colors ${getAnswerClassName(
                  currentQuestion,
                  index
                )}`}
                disabled={isSubmitted}
              >
                {option.text}
              </button>
            ))}
          </div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 p-4 bg-blue-50 rounded-lg"
            >
              <h4 className="font-medium mb-2">Explanation:</h4>
              <p className="text-gray-700">
                The correct answer is: {quiz[currentQuestion].options.find(opt => opt.isCorrect)?.text}
              </p>
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

        {!isSubmitted && selectedAnswers[currentQuestion] !== -1 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit Quiz
          </button>
        )}
      </div>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-gray-50 rounded-lg"
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

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 space-y-6"
        >
          <h3 className="text-lg font-medium">Quiz Summary</h3>
          {quiz.map((question, questionIndex) => (
            <div key={questionIndex} className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium mb-3">{question.question}</h4>
              <div className="space-y-2">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`p-3 border rounded ${
                      option.isCorrect
                        ? 'bg-green-100 border-green-500'
                        : selectedAnswers[questionIndex] === optionIndex
                        ? 'bg-red-100 border-red-500'
                        : 'border-gray-200'
                    }`}
                  >
                    {option.text}
                    {option.isCorrect && (
                      <span className="ml-2 text-green-600 font-medium">✓ Correct Answer</span>
                    )}
                    {selectedAnswers[questionIndex] === optionIndex && !option.isCorrect && (
                      <span className="ml-2 text-red-600 font-medium">✗ Your Answer</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
