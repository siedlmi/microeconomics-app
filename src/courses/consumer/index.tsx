import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import QuizComponent from '../../components/QuizComponent';
import consumerLessons from './lessons';
import consumerQuiz from './quiz';

export default function ConsumerCourse({ onComplete }: { onComplete: () => void }) {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const currentIndex = useMemo(() => {
    const num = parseInt(lessonId?.replace('lesson-', '') || '1', 10);
    return isNaN(num) ? 0 : num - 1;
  }, [lessonId]);

  const isQuiz = currentIndex >= consumerLessons.length;
  const lesson = consumerLessons[currentIndex];

  if (currentIndex < 0 || (!isQuiz && !lesson)) {
    return <Navigate to="/courses/consumer-choice/lesson-1" replace />;
  }

  const handleNextLesson = () => {
    navigate(`/courses/consumer-choice/lesson-${currentIndex + 2}`);
  };

  const handleStartQuiz = () => {
    navigate(`/courses/consumer-choice/lesson-${consumerLessons.length + 1}`);
  };

  return (
    <div>
      {!isQuiz ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
          <p className="mb-4">{lesson.description}</p>

          <div className="mt-6 flex gap-3">
            {currentIndex < consumerLessons.length - 1 && (
              <button
                onClick={handleNextLesson}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Next Lesson
              </button>
            )}
            <button
              onClick={handleStartQuiz}
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Start Quiz Now
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-4">🧠 Quiz: Consumer Choice</h2>
          <QuizComponent quiz={consumerQuiz} onComplete={onComplete} />
        </>
      )}
    </div>
  );
}
