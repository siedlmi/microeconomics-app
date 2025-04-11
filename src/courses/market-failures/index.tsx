import BaseCourse from '../BaseCourse';
import marketFailuresMetadata from './metadata';
import { CourseProps } from '../types';

export default function MarketFailuresCourse({ onComplete }: CourseProps) {
  const renderLesson = (lessonIndex: number) => {
    const lesson = marketFailuresMetadata.content.lessons[lessonIndex];
    
    return (
      <div className="space-y-4">
        <div className="prose max-w-none">
          <p className="text-lg">{lesson.description}</p>
        </div>
        {/* Add specific content for each lesson here */}
      </div>
    );
  };

  return (
    <BaseCourse
      metadata={marketFailuresMetadata}
      onComplete={onComplete}
      renderLesson={renderLesson}
    />
  );
} 