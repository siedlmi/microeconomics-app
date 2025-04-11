import React from 'react';
import CourseRouter from '../CourseRouter';
import { CourseMetadata } from '../types';
import DemandLesson from './lessons/demand';
import SupplyLesson from './lessons/supply';
import EquilibriumLesson from './lessons/equilibrium';
import ShiftsLesson from './lessons/shifts';
import ElasticityLesson from './lessons/elasticity';
import DemandScheduleLesson from './lessons/demand-schedule';

const metadata: CourseMetadata = {
  id: 'law-of-supply-and-demand',
  title: 'Law of Supply and Demand',
  description: 'Learn about the fundamental economic principles of supply and demand, and how they interact to determine prices in a market economy.',
  content: {
    lessons: [
      {
        title: 'Demand Schedule and Curve',
        description: 'Learn how to create and interpret demand schedules and curves. Understand the relationship between price and quantity demanded.',
      },
      {
        title: 'Supply',
        description: 'Learn about supply and how producers respond to price changes.',
      },
      {
        title: 'Market Equilibrium',
        description: 'Discover how supply and demand interact to determine market prices.',
      },
      {
        title: 'Shifts in Supply and Demand',
        description: 'Explore the factors that cause supply and demand curves to shift.',
      },
      {
        title: 'Elasticity',
        description: 'Understand how responsive supply and demand are to price changes.',
      },
    ],
    quiz: [
      {
        question: 'What happens to quantity demanded when price increases?',
        options: [
          { text: 'It increases', isCorrect: false },
          { text: 'It decreases', isCorrect: true },
          { text: 'It stays the same', isCorrect: false },
          { text: 'It depends on the good', isCorrect: false },
        ],
      },
      {
        question: 'What is market equilibrium?',
        options: [
          { text: 'When supply equals demand', isCorrect: true },
          { text: 'When price equals cost', isCorrect: false },
          { text: 'When quantity equals zero', isCorrect: false },
          { text: 'When profit is maximized', isCorrect: false },
        ],
      },
      {
        question: 'What causes a shift in the demand curve?',
        options: [
          { text: 'Change in price', isCorrect: false },
          { text: 'Change in consumer preferences', isCorrect: true },
          { text: 'Change in quantity demanded', isCorrect: false },
          { text: 'Change in supply', isCorrect: false },
        ],
      },
    ],
  },
};

const renderLesson = (lessonIndex: number) => {
  switch (lessonIndex) {
    case 0:
      return <DemandScheduleLesson />;
    case 1:
      return <SupplyLesson />;
    case 2:
      return <EquilibriumLesson />;
    case 3:
      return <ShiftsLesson />;
    case 4:
      return <ElasticityLesson />;
    default:
      return null;
  }
};

export default function LawCourse({ onComplete }: { onComplete: () => void }) {
  return (
    <CourseRouter
      metadata={metadata}
      onComplete={onComplete}
      renderLesson={renderLesson}
    />
  );
}
