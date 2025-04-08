import { CourseMetadata } from '../types';

const ppcMetadata: CourseMetadata = {
  id: 'production-possibilities-curve',
  title: 'Production Possibilities Curve',
  description: 'Learn about production trade-offs and opportunity costs',
  content: {
    lessons: [
      { 
        title: 'Introduction to PPC', 
        description: 'Understanding the basic concept of Production Possibilities Curve.' 
      },
      { 
        title: 'Opportunity Cost', 
        description: 'Learn about trade-offs and the cost of choosing one option over another.' 
      },
      { 
        title: 'Efficiency and Underutilization', 
        description: 'Explore efficient production points and resource utilization.' 
      },
      { 
        title: 'Economic Growth', 
        description: 'Understanding how technological progress and resource changes affect the PPC.' 
      }
    ],
    quiz: [
      {
        question: 'What does a point inside the PPC curve represent?',
        options: [
          { text: 'Efficient use of resources', isCorrect: false },
          { text: 'Economic growth', isCorrect: false },
          { text: 'Underutilization of resources', isCorrect: true },
          { text: 'Unattainable production', isCorrect: false },
        ],
      },
      {
        question: 'What causes the PPC to shift outward?',
        options: [
          { text: 'Loss of capital', isCorrect: false },
          { text: 'Economic growth or tech improvement', isCorrect: true },
          { text: 'Decrease in labor', isCorrect: false },
          { text: 'Higher opportunity cost', isCorrect: false },
        ],
      },
      {
        question: 'What is opportunity cost in the context of PPC?',
        options: [
          { text: 'The monetary cost of production', isCorrect: false },
          { text: 'The amount of one good given up to produce more of another', isCorrect: true },
          { text: 'The total cost of all resources', isCorrect: false },
          { text: 'The profit margin on goods', isCorrect: false },
        ],
      },
      {
        question: 'What shape is a typical PPC curve?',
        options: [
          { text: 'Straight line', isCorrect: false },
          { text: 'Concave to the origin', isCorrect: true },
          { text: 'Convex to the origin', isCorrect: false },
          { text: 'Circular', isCorrect: false },
        ],
      },
    ]
  }
};

export default ppcMetadata; 