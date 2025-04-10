import BaseCourse from '../BaseCourse';
import marketStructuresMetadata from './metadata';
import { CourseProps } from '../types';

export default function MarketStructuresCourse({ onComplete }: CourseProps) {
  const renderLesson = (lessonIndex: number) => {
    const lesson = marketStructuresMetadata.content.lessons[lessonIndex];
    
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
      metadata={marketStructuresMetadata}
      onComplete={onComplete}
      renderLesson={renderLesson}
    />
  );
} 