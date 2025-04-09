import { useParams, useNavigate, Navigate } from 'react-router-dom';
import QuizComponent from '../components/QuizComponent';
import LessonContent from '../components/LessonContent';
import ProgressTracker from '../components/ProgressTracker';
import { CourseProps, CourseMetadata } from './types';

interface BaseCourseProps extends CourseProps {
  metadata: CourseMetadata;
  renderLesson: (lessonIndex: number) => React.ReactNode;
}

export default function BaseCourse({ 
  metadata, 
  onComplete, 
  renderLesson 
}: BaseCourseProps) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  
  const isQuiz = lessonId === 'quiz';
  const currentLessonIndex = isQuiz 
    ? metadata.content.lessons.length 
    : (lessonId 
      ? parseInt(lessonId.replace('lesson-', '')) - 1 
      : 0);

  // Validate lesson index
  if (!isQuiz && (currentLessonIndex < 0 || currentLessonIndex >= metadata.content.lessons.length)) {
    return <Navigate to={`/courses/${metadata.id}/lesson-1`} replace />;
  }

  const handleNextLesson = () => {
    if (currentLessonIndex < metadata.content.lessons.length - 1) {
      navigate(`/courses/${metadata.id}/lesson-${currentLessonIndex + 2}`);
    } else {
      navigate(`/courses/${metadata.id}/quiz`);
    }
  };

  const handleQuizComplete = () => {
    onComplete();
    navigate('/courses');
  };

  const currentLesson = !isQuiz ? metadata.content.lessons[currentLessonIndex] : null;

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">
      <ProgressTracker 
        courseId={metadata.id}
        currentLesson={isQuiz ? metadata.content.lessons.length + 1 : currentLessonIndex + 1}
        totalLessons={metadata.content.lessons.length}
      />
      
      {!isQuiz && currentLesson ? (
        <LessonContent>
          <h2 className="text-2xl font-bold mb-4">{currentLesson.title}</h2>
          {renderLesson(currentLessonIndex)}
          <button
            onClick={handleNextLesson}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            {currentLessonIndex < metadata.content.lessons.length - 1 ? 'Next Lesson' : 'Start Quiz'}
          </button>
        </LessonContent>
      ) : (
        <QuizComponent 
          quiz={metadata.content.quiz} 
          onComplete={handleQuizComplete}
        />
      )}
    </div>
  );
} 