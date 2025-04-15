import React from 'react';
import { useParams } from 'react-router-dom';
import { CourseMetadata, Lesson } from '../courses/types';

interface CourseRoadmapProps {
  metadata: CourseMetadata;
  onLessonSelect: (lesson: Lesson, index: number) => void;
}

export default function CourseRoadmap({ metadata, onLessonSelect }: CourseRoadmapProps) {
  const { lessonId } = useParams();

  // Determine current lesson index from URL
  let currentLessonIndex = 0;
  if (lessonId && lessonId.startsWith('lesson-')) {
    const index = parseInt(lessonId.replace('lesson-', ''));
    if (!isNaN(index)) {
      currentLessonIndex = index - 1;
    }
  }

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg dark:bg-gray-800 min-w-[300px] relative z-0">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Course Progress</h2>
      <div className="space-y-4">
        {metadata.content.lessons.map((lesson, index) => (
          <div
            key={index}
            onClick={() => onLessonSelect(lesson, index)}
            className={`relative group cursor-pointer transition-all duration-200 ease-in-out
              ${index === currentLessonIndex 
                ? 'transform scale-102 -translate-x-1'
                : 'hover:transform hover:scale-101'}`}
          >
            {/* Progress line */}
            {index < metadata.content.lessons.length - 1 && (
              <div className={`absolute left-4 top-14 w-0.5 h-full -z-10
                ${index < currentLessonIndex ? 'bg-indigo-500' : 'bg-gray-200 dark:bg-gray-700'}`}
              />
            )}
            
            <div className={`flex items-start space-x-4 px-4 py-4 rounded-lg border-2 transition-all duration-200
              ${index === currentLessonIndex
                ? 'bg-indigo-50 border-indigo-500 shadow-md dark:bg-indigo-900/30 dark:border-indigo-400 scale-102'
                : index < currentLessonIndex
                  ? 'bg-white border-indigo-200 dark:bg-gray-800 dark:border-indigo-800'
                  : 'bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700'
              } hover:shadow-lg hover:-translate-y-0.5`}
            >
              {/* Progress indicator */}
              <div className={`flex-shrink-0 w-8 h-8 mt-1 rounded-full flex items-center justify-center
                ${index === currentLessonIndex
                  ? 'bg-indigo-500 ring-4 ring-indigo-200 dark:ring-indigo-900'
                  : index < currentLessonIndex
                    ? 'bg-indigo-500'
                    : 'bg-gray-200 dark:bg-gray-700'}`}
              >
                {index < currentLessonIndex ? (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                ) : (
                  <span className="text-white font-medium">{index + 1}</span>
                )}
              </div>
              
              <h3 className={`text-lg font-semibold leading-snug break-words pr-2
                ${index === currentLessonIndex
                  ? 'text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-900 dark:text-gray-100'}`}
              >
                {lesson.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
