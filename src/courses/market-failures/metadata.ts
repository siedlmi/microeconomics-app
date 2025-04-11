import { CourseMetadata } from '../types';

const marketFailuresMetadata: CourseMetadata = {
  id: 'market-failures',
  title: 'Market Failures and Government Intervention',
  description: 'Learn about when markets fail to deliver optimal outcomes',
  content: {
    lessons: [
      { 
        title: 'Externalities', 
        description: 'Understanding positive and negative externalities and their impact on market efficiency.' 
      },
      { 
        title: 'Public Goods', 
        description: 'Exploring non-excludable and non-rival goods and the challenges they present to markets.' 
      },
      { 
        title: 'Asymmetric Information', 
        description: 'Analyzing adverse selection and moral hazard in markets with imperfect information.' 
      },
      { 
        title: 'Government Tools', 
        description: 'Understanding how taxes, subsidies, and regulations can address market failures.' 
      },
      { 
        title: 'Deadweight Loss and Efficiency', 
        description: 'Graphical analysis of market inefficiencies and their impact on social welfare.' 
      }
    ],
    quiz: [
      {
        question: 'What is a negative externality?',
        options: [
          { text: 'A cost imposed on third parties not involved in the transaction', isCorrect: true },
          { text: 'A benefit received by third parties not involved in the transaction', isCorrect: false },
          { text: 'A government intervention in the market', isCorrect: false },
          { text: 'A market failure due to monopoly power', isCorrect: false },
        ],
      },
      {
        question: 'What characterizes a public good?',
        options: [
          { text: 'It is excludable and rival', isCorrect: false },
          { text: 'It is non-excludable and non-rival', isCorrect: true },
          { text: 'It is provided by the government', isCorrect: false },
          { text: 'It is always free to use', isCorrect: false },
        ],
      },
      {
        question: 'What is adverse selection?',
        options: [
          { text: 'When one party has more information than the other before a transaction', isCorrect: true },
          { text: 'When a market fails to reach equilibrium', isCorrect: false },
          { text: 'When government intervention creates inefficiency', isCorrect: false },
          { text: 'When externalities are not internalized', isCorrect: false },
        ],
      },
      {
        question: 'What is the purpose of a Pigouvian tax?',
        options: [
          { text: 'To raise government revenue', isCorrect: false },
          { text: 'To correct negative externalities', isCorrect: true },
          { text: 'To subsidize public goods', isCorrect: false },
          { text: 'To regulate monopolies', isCorrect: false },
        ],
      },
      {
        question: 'What does deadweight loss represent?',
        options: [
          { text: 'The total cost of production', isCorrect: false },
          { text: 'The loss of economic efficiency', isCorrect: true },
          { text: 'The profit earned by firms', isCorrect: false },
          { text: 'The cost of government intervention', isCorrect: false },
        ],
      }
    ]
  }
};

export default marketFailuresMetadata; 