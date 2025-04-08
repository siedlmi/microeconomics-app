import { useEffect, useState } from 'react';

interface ProgressTrackerProps {
  courseId: string;
  totalLessons: number;
  currentLesson: number;
}

export default function ProgressTracker({ courseId, totalLessons, currentLesson }: ProgressTrackerProps) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const storedProgress = localStorage.getItem(`course-progress-${courseId}`);
    if (storedProgress) {
      setCompletedLessons(JSON.parse(storedProgress));
    }
  }, [courseId]);

  const toggleLessonCompletion = (lessonNumber: number) => {
    setCompletedLessons(prev => {
      const newCompleted = prev.includes(lessonNumber)
        ? prev.filter(num => num !== lessonNumber)
        : [...prev, lessonNumber];
      
      // Save to localStorage
      localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Course Progress</h3>
        <span className="text-sm text-gray-600">
          {completedLessons.length} of {totalLessons} lessons completed
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalLessons }, (_, i) => i + 1).map(lessonNumber => (
          <button
            key={lessonNumber}
            onClick={() => toggleLessonCompletion(lessonNumber)}
            className={`flex items-center justify-center p-2 rounded ${
              completedLessons.includes(lessonNumber)
                ? 'bg-green-100 text-green-600'
                : 'bg-gray-100 text-gray-600'
            } ${
              lessonNumber === currentLesson ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {completedLessons.includes(lessonNumber) ? '✅' : lessonNumber}
          </button>
        ))}
      </div>
    </div>
  );
} 