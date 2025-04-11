import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { CourseMetadata } from './types';
import BaseCourse from './BaseCourse';
import CourseRoadmap from '../components/CourseRoadmap';

interface CourseRouterProps {
  metadata: CourseMetadata;
  onComplete: () => void;
  renderLesson: (lessonIndex: number) => React.ReactNode;
}

export default function CourseRouter({ metadata, onComplete, renderLesson }: CourseRouterProps) {
  const { courseId } = useParams<{ courseId: string }>();

  // If the courseId doesn't match, redirect to the correct course
  if (courseId && courseId !== metadata.id) {
    return <Navigate to={`/courses/${metadata.id}`} replace />;
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={<CourseRoadmap metadata={metadata} />} 
      />
      <Route 
        path="lesson-:lessonId" 
        element={
          <BaseCourse 
            metadata={metadata} 
            onComplete={onComplete} 
            renderLesson={renderLesson} 
          />
        } 
      />
      <Route 
        path="quiz" 
        element={
          <BaseCourse 
            metadata={metadata} 
            onComplete={onComplete} 
            renderLesson={renderLesson} 
          />
        } 
      />
      <Route path="*" element={<Navigate to={`/courses/${metadata.id}`} replace />} />
    </Routes>
  );
}
