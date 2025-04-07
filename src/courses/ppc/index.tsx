import { useState } from 'react';
import QuizComponent from '../../components/QuizComponent';
import ppcQuiz from './quiz';
import PPCGraph from './PPCLesson';

export default function PPCCourse({ onComplete }: { onComplete: () => void }) {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Production Possibility Curve (PPC)</h1>
      <p className="mb-4">
        The PPC shows the trade-offs and opportunity costs of producing two goods using limited resources.
      </p>
      <PPCGraph />
      {!quizStarted && (
        <button
          onClick={() => setQuizStarted(true)}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Start Quiz
        </button>
      )}
      {quizStarted && <QuizComponent quiz={ppcQuiz} onComplete={onComplete} />}
    </div>
  );
}
