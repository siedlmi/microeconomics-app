export type CourseId = 'law-of-supply-and-demand' | 'consumer-choice' | 'production-possibilities-curve' | 'market-structures' | 'market-failures';

export interface Lesson {
  title: string;
  description: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
  explanation?: string;
}

export interface CourseContent {
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface CourseMetadata {
  id: CourseId;
  title: string;
  description: string;
  content: CourseContent;
}

export interface CourseProps {
  onComplete: () => void;
}