import { LessonType } from './types';

const lawLessons: { title: string; description: string; type: LessonType }[] = [
  {
    title: 'Lesson 1: Supply vs Price',
    description: 'Explore how supply changes with price.',
    type: 'supply',
  },
  {
    title: 'Lesson 2: Demand vs Price',
    description: 'Explore how demand changes with price.',
    type: 'demand',
  },
  {
    title: 'Lesson 3: Supply & Demand Together',
    description: 'See how both interact to form equilibrium.',
    type: 'both',
  },
];

export default lawLessons;
