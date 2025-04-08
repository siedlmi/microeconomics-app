import { CourseMetadata } from '../types';
import { LessonType } from './types';

export interface LawLesson {
  title: string;
  description: string;
  type: LessonType;
}

const lawMetadata: CourseMetadata & { content: { lessons: LawLesson[] } } = {
  id: 'law',
  title: 'Law of Supply and Demand',
  description: 'Learn how prices are determined in competitive markets',
  content: {
    lessons: [
      { 
        title: 'Supply vs Price', 
        description: 'Explore how supply changes with price.',
        type: 'supply'
      },
      { 
        title: 'Demand vs Price', 
        description: 'Explore how demand changes with price.',
        type: 'demand'
      },
      { 
        title: 'Supply & Demand Together', 
        description: 'See how supply and demand interact to form equilibrium.',
        type: 'both'
      }
    ],
    quiz: [
      {
        question: 'What happens to equilibrium price when demand increases and supply stays constant?',
        options: [
          { text: 'Price goes down', isCorrect: false },
          { text: 'Price goes up', isCorrect: true },
          { text: 'Supply increases', isCorrect: false },
          { text: 'Equilibrium does not change', isCorrect: false },
        ],
      },
      {
        question: 'What is elasticity in economics?',
        options: [
          { text: 'Price multiplied by demand', isCorrect: false },
          { text: 'Responsiveness of quantity to price', isCorrect: true },
          { text: 'Price divided by supply', isCorrect: false },
          { text: 'Cost of production', isCorrect: false },
        ],
      },
      {
        question: 'In a competitive market, what causes a shortage?',
        options: [
          { text: 'Price above equilibrium', isCorrect: false },
          { text: 'Price below equilibrium', isCorrect: true },
          { text: 'Supply equals demand', isCorrect: false },
          { text: 'Increased production', isCorrect: false },
        ],
      },
    ]
  }
};

export default lawMetadata; 