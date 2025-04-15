import React from 'react';
import { useParams } from 'react-router-dom';
import CourseRoadmap from '../components/CourseRoadmap';
import { CourseMetadata } from './types';

interface CourseLayoutProps {
  metadata: CourseMetadata;
  children: React.ReactNode;
}

export default function CourseLayout({ metadata, children }: CourseLayoutProps) {
  const { lessonId } = useParams();
  
  return (
    <div className="p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{metadata.title}</h1>
        <p className="text-gray-600">{metadata.description}</p>
      </header>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4">
          {/* Effective usage pattern:
              • Import CourseRoadmap here.
              • Pass course metadata (including lessons array & unique id).
              • Use a URL scheme (lesson-1, lesson-2) for the current lesson index.
              • Place CourseRoadmap in the sidebar for persistent navigation.
          */}
          <CourseRoadmap metadata={metadata} />
        </aside>
        <main className="md:w-3/4">
          {children}
        </main>
      </div>
    </div>
  );
}