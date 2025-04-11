import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ProgressTrackerProps {
  courseId: string;
  totalLessons: number;
  currentLesson: number;
  onExit?: () => void;
}

export default function ProgressTracker({ courseId, totalLessons, currentLesson, onExit }: ProgressTrackerProps) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const storedProgress = localStorage.getItem(`course-progress-${courseId}`);
    if (storedProgress) {
      setCompletedLessons(JSON.parse(storedProgress));
    }
  }, [courseId]);

  // Mark lesson as completed only when it's first viewed and it's not the quiz
  useEffect(() => {
    if (currentLesson > 0 && currentLesson <= totalLessons && !completedLessons.includes(currentLesson)) {
      const newCompleted = [...completedLessons, currentLesson];
      setCompletedLessons(newCompleted);
      localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(newCompleted));
    }
  }, [currentLesson, courseId, completedLessons, totalLessons]);

  const progressPercentage = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Course Progress</h3>
          {onExit && (
            <button
              onClick={onExit}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Exit lesson"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          )}
        </div>
        <span className="text-sm text-gray-600">
          {completedLessons.length} of {totalLessons} lessons completed
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
} 