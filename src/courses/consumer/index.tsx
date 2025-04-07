import { useState } from 'react';
import consumerLessons from './lessons';
import consumerQuiz from './quiz';
import QuizComponent from '../../components/QuizComponent';

export default function ConsumerCourse({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const current = consumerLessons[index];

  const handleNext = () => {
    if (index < consumerLessons.length - 1) {
      setIndex(index + 1);
    } else {
      setShowQuiz(true);
      onComplete(); // mark course as completed in app state
    }
  };

  return (
    <div>
      {!showQuiz ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{current.title}</h1>
          <p className="mb-4">{current.description}</p>
          <button
            onClick={handleNext}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {index === consumerLessons.length - 1 ? 'Start Quiz' : 'Next Lesson'}
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2">🧠 Consumer Choice Quiz</h1>
          {!quizComplete ? (
            <QuizComponent
              quiz={consumerQuiz}
              onComplete={() => setQuizComplete(true)}
            />
          ) : (
            <div className="p-4 mt-4 bg-green-100 rounded">
              <h2 className="text-xl font-semibold text-green-700 mb-2">🎉 Quiz Completed!</h2>
              <p>Great work! You’ve finished the Consumer Choice course.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
