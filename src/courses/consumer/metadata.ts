import { CourseMetadata } from '../types';

const consumerMetadata: CourseMetadata = {
  id: 'consumer',
  title: 'Consumer Choice Theory',
  description: 'Learn how consumers make decisions given their preferences and constraints',
  content: {
    lessons: [
      { title: 'Preferences', description: 'Understanding how consumers rank bundles of goods.' },
      { title: 'Budget Constraint', description: 'Visualize what a consumer can afford.' },
      { title: 'Indifference Curves', description: 'Explore bundles that provide equal satisfaction.' },
      { title: 'Marginal Rate of Substitution', description: 'Trade-offs between goods for constant utility.' },
      { title: 'Consumer Equilibrium', description: 'Where budget and preferences meet.' },
      { title: 'Effects of Changes in Income and Prices', description: 'Income and substitution effects.' },
    ],
    quiz: [
      {
        question: 'What does an indifference curve represent?',
        options: [
          { text: 'All affordable bundles of goods', isCorrect: false },
          { text: 'Bundles providing equal satisfaction', isCorrect: true },
          { text: 'Maximum utility bundle', isCorrect: false },
          { text: 'Budget constraints', isCorrect: false },
        ],
      },
      {
        question: 'What happens to the budget line when income increases?',
        options: [
          { text: 'It rotates outward', isCorrect: false },
          { text: 'It shifts inward', isCorrect: false },
          { text: 'It shifts outward', isCorrect: true },
          { text: 'It becomes vertical', isCorrect: false },
        ],
      },
      {
        question: 'What is the Marginal Rate of Substitution (MRS)?',
        options: [
          { text: 'The rate at which utility increases', isCorrect: false },
          { text: 'The rate at which a consumer trades one good for another while maintaining utility', isCorrect: true },
          { text: 'Price of one good relative to another', isCorrect: false },
          { text: 'Slope of the budget line', isCorrect: false },
        ],
      },
    ]
  }
};

export default consumerMetadata; 