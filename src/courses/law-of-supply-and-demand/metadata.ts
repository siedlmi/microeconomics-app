import { CourseMetadata } from '../types';
import { LessonType } from './types';

export interface LawLesson {
  title: string;
  description: string;
  type: LessonType;
}

const lawMetadata: CourseMetadata & { content: { lessons: LawLesson[] } } = {
  id: 'law-of-supply-and-demand',
  title: 'Law of Supply and Demand',
  description: 'Learn how prices are determined in competitive markets',
  content: {
    lessons: [
      {
        title: 'Demand Schedule and Curve',
        description: 'Learn how to create and interpret demand schedules and curves. Understand the relationship between price and quantity demanded.',
        type: 'demand'
      },
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
      },
      {
        title: 'Supply Elasticity',
        description: 'Learn how responsive supply is to changes in price. Supply elasticity measures how much the quantity supplied changes when the price changes.',
        type: 'supply'
      },
      {
        title: 'Normal and Inferior Goods',
        description: 'Understand how different types of goods respond to changes in income. Normal goods see increased demand with higher income, while inferior goods see decreased demand.',
        type: 'demand'
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
      {
        question: 'Which of the following indicates elastic supply?',
        options: [
          { text: 'A small change in price causes a large change in quantity supplied', isCorrect: true },
          { text: 'A large change in price causes a small change in quantity supplied', isCorrect: false },
          { text: 'Price and quantity change proportionally', isCorrect: false },
          { text: 'Supply does not change with price', isCorrect: false },
        ],
      },
      {
        question: 'What is a normal good?',
        options: [
          { text: 'A good whose demand increases when income increases', isCorrect: true },
          { text: 'A good whose demand decreases when income increases', isCorrect: false },
          { text: 'A good that is always in high demand', isCorrect: false },
          { text: 'A good that is always in low demand', isCorrect: false },
        ],
      },
      {
        question: 'Which of the following is an example of an inferior good?',
        options: [
          { text: 'Luxury cars', isCorrect: false },
          { text: 'Generic brand products', isCorrect: true },
          { text: 'Organic food', isCorrect: false },
          { text: 'Designer clothing', isCorrect: false },
        ],
      }
    ]
  }
};

export default lawMetadata; 