export interface Lesson {
  title: string;
  description: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface CourseContent {
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface CourseProps {
  onComplete: () => void;
}

export type CourseId = 'consumer-choice' | 'production-possibilities-curve' | 'law-of-supply-and-demand';

export interface CourseMetadata {
  id: CourseId;
  title: string;
  description: string;
  content: CourseContent;
} 