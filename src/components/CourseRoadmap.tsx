import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CourseMetadata } from '../courses/types';

interface CourseRoadmapProps {
  metadata: CourseMetadata;
}

export default function CourseRoadmap({ metadata }: CourseRoadmapProps) {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  // Determine current lesson index from URL (assumes "lesson-{number}")
  let currentLessonIndex = 0;
  if (lessonId && lessonId.startsWith('lesson-')) {
    const index = parseInt(lessonId.replace('lesson-', ''));
    if (!isNaN(index)) {
      currentLessonIndex = index - 1;
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Course Roadmap</h2>
      <ul className="space-y-2">
        {metadata.content.lessons.map((lesson, index) => (
          <li
            key={index}
            onClick={() => navigate(`/courses/${metadata.id}/lesson-${index + 1}`)}
            className={`cursor-pointer p-2 rounded border ${
              index === currentLessonIndex ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
            }`}
          >
            <div className="font-medium">{lesson.title}</div>
            <div className="text-sm text-gray-600">{lesson.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
