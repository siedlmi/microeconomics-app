import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseRoadmap from '../components/CourseRoadmap';
import { CourseMetadata, Lesson } from './types';

interface CourseLayoutProps {
  metadata: CourseMetadata;
  children: React.ReactNode;
}

export default function CourseLayout({ metadata, children }: CourseLayoutProps) {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleLessonSelect = (lesson: Lesson, index: number) => {
    setSelectedLesson(lesson);
  };

  const handleStartLesson = (index: number) => {
    navigate(`/courses/${metadata.id}/lesson-${index + 1}`);
    setSelectedLesson(null);
  };
  
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
        <p className="text-gray-600">{metadata.description}</p>
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-[350px] flex-shrink-0">
          <CourseRoadmap 
            metadata={metadata} 
            onLessonSelect={handleLessonSelect}
          />
        </aside>
        <main className="flex-1 min-w-0">
          {selectedLesson ? (
            <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-800 animate-fadeIn w-full">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedLesson.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {selectedLesson.description}
              </p>
              <button
                onClick={() => handleStartLesson(
                  metadata.content.lessons.findIndex(l => l.title === selectedLesson.title)
                )}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                  transition-colors duration-200 flex items-center gap-2 font-medium"
              >
                Start Lesson
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          ) : children}
        </main>
      </div>
    </div>
  );
}