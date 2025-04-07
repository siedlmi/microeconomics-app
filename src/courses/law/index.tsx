import { useState } from 'react';
import DemandSupplyGraph from '../../components/DemandSupplyGraph';
import QuizComponent from '../../components/QuizComponent';
import lawLessons from './lessons';
import lawQuiz from './quiz';

export default function LawCourse({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const lesson = lawLessons[step];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
      <p className="mb-2">{lesson.description}</p>
      <DemandSupplyGraph type={lesson.type} />
      {!quizStarted && (
        <button
          onClick={() => {
            if (step < lawLessons.length - 1) setStep(step + 1);
            else setQuizStarted(true);
          }}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          {step === lawLessons.length - 1 ? 'Start Quiz' : 'Next Lesson'}
        </button>
      )}
      {quizStarted && <QuizComponent quiz={lawQuiz} onComplete={onComplete} />}
    </div>
  );
}
