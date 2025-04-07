import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useLang } from '../../i18n';
import DemandSupplyGraph from '../../components/DemandSupplyGraph';
import QuizComponent from '../../components/QuizComponent';
import quizEn from './quiz.en';
import quizPl from './quiz.pl';
import lessonsEn from './lessons.en';
import lessonsPl from './lessons.pl';

export default function LawCourse({ onComplete }: { onComplete: () => void }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { lang } = useLang();

  const lessons = lang === 'pl' ? lessonsPl : lessonsEn;
  const quiz = lang === 'pl' ? quizPl : quizEn;

  const currentIndex = useMemo(() => {
    const num = parseInt(lessonId?.replace('lesson-', '') || '1', 10);
    return isNaN(num) ? 0 : num - 1;
  }, [lessonId]);

  const isQuiz = currentIndex >= lessons.length;
  const lesson = lessons[currentIndex];

  if (currentIndex < 0 || (!isQuiz && !lesson)) {
    return <Navigate to="/courses/law-of-supply-and-demand/lesson-1" replace />;
  }

  const handleNextLesson = () => {
    navigate(`/courses/law-of-supply-and-demand/lesson-${currentIndex + 2}`);
  };

  const handleStartQuiz = () => {
    navigate(`/courses/law-of-supply-and-demand/lesson-${lessons.length + 1}`);
  };

  return (
    <div>
      {!isQuiz ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
          <p className="mb-4">{lesson.description}</p>
          <DemandSupplyGraph type={lesson.type} />

          <div className="mt-6 flex gap-3">
            {currentIndex < lessons.length - 1 && (
              <button
                onClick={handleNextLesson}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                {lang === 'pl' ? 'Następna lekcja' : 'Next Lesson'}
              </button>
            )}
            <button
              onClick={handleStartQuiz}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              {lang === 'pl' ? 'Rozpocznij Quiz' : 'Start Quiz Now'}
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">
            {lang === 'pl' ? '🧠 Quiz: Popyt i podaż' : '🧠 Quiz: Supply and Demand'}
          </h2>
          <QuizComponent quiz={quiz} onComplete={onComplete} />
        </>
      )}
    </div>
  );
}
