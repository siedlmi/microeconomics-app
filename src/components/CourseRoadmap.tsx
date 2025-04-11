import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { CourseMetadata } from '../courses/types';

interface CourseRoadmapProps {
  metadata: CourseMetadata;
}

export default function CourseRoadmap({ metadata }: CourseRoadmapProps) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const storedProgress = localStorage.getItem(`course-progress-${metadata.id}`);
    if (storedProgress) {
      setCompletedLessons(JSON.parse(storedProgress));
    }
  }, [metadata.id]);

  const isLessonAvailable = (lessonIndex: number) => {
    // First lesson is always available
    if (lessonIndex === 0) return true;
    // Other lessons are available if the previous lesson is completed
    return completedLessons.includes(lessonIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 pt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
        <p className="text-gray-600">{metadata.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Course Roadmap</h2>
        
        <div className="space-y-6">
          {metadata.content.lessons.map((lesson, index) => {
            const isCompleted = completedLessons.includes(index + 1);
            const isAvailable = isLessonAvailable(index);
            
            return (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  isAvailable 
                    ? 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer' 
                    : 'border-gray-100 bg-gray-50 cursor-not-allowed'
                } transition-colors`}
              >
                <Link 
                  to={isAvailable ? `/courses/${metadata.id}/lesson-${index + 1}` : '#'}
                  className={`flex items-center justify-between ${
                    !isAvailable && 'pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                  {isCompleted && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </Link>
              </div>
            );
          })}

          {/* Quiz section */}
          <div 
            className={`p-4 rounded-lg border ${
              completedLessons.length === metadata.content.lessons.length
                ? 'border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer'
                : 'border-gray-100 bg-gray-50 cursor-not-allowed'
            } transition-colors`}
          >
            <Link 
              to={completedLessons.length === metadata.content.lessons.length 
                ? `/courses/${metadata.id}/quiz` 
                : '#'}
              className={`flex items-center justify-between ${
                completedLessons.length !== metadata.content.lessons.length && 'pointer-events-none'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-medium">Q</span>
                </div>
                <div>
                  <h3 className="font-medium">Final Quiz</h3>
                  <p className="text-sm text-gray-600">Test your knowledge</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 