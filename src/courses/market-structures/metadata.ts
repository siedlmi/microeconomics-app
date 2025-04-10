import { CourseMetadata } from '../types';

const marketStructuresMetadata: CourseMetadata = {
  id: 'market-structures',
  title: 'Market Structures',
  description: 'Learn about competition and pricing in different markets',
  content: {
    lessons: [
      { 
        title: 'Perfect Competition', 
        description: 'Understanding markets with many sellers and price takers.' 
      },
      { 
        title: 'Monopoly', 
        description: 'Exploring pricing power and deadweight loss in monopolistic markets.' 
      },
      { 
        title: 'Monopolistic Competition', 
        description: 'Analyzing markets with product differentiation.' 
      },
      { 
        title: 'Oligopoly', 
        description: 'Understanding game theory and collusion in concentrated markets.' 
      },
      { 
        title: 'Price Discrimination', 
        description: 'Exploring different degrees of price discrimination strategies.' 
      }
    ],
    quiz: [
      {
        question: 'What characterizes a perfectly competitive market?',
        options: [
          { text: 'Many sellers and buyers with identical products', isCorrect: true },
          { text: 'One seller with complete market control', isCorrect: false },
          { text: 'Few sellers with differentiated products', isCorrect: false },
          { text: 'Government price controls', isCorrect: false },
        ],
      },
      {
        question: 'What is deadweight loss in a monopoly?',
        options: [
          { text: 'The profit earned by the monopolist', isCorrect: false },
          { text: 'The loss of economic efficiency due to monopoly pricing', isCorrect: true },
          { text: 'The cost of production', isCorrect: false },
          { text: 'The price difference between monopoly and competitive markets', isCorrect: false },
        ],
      },
      {
        question: 'What is the main characteristic of monopolistic competition?',
        options: [
          { text: 'Identical products', isCorrect: false },
          { text: 'Product differentiation', isCorrect: true },
          { text: 'Barriers to entry', isCorrect: false },
          { text: 'Price fixing', isCorrect: false },
        ],
      },
      {
        question: 'What is the prisoner\'s dilemma in oligopoly?',
        options: [
          { text: 'A situation where firms must choose between cooperation and competition', isCorrect: true },
          { text: 'A legal restriction on market entry', isCorrect: false },
          { text: 'A type of price discrimination', isCorrect: false },
          { text: 'A government regulation', isCorrect: false },
        ],
      },
      {
        question: 'What is first-degree price discrimination?',
        options: [
          { text: 'Charging different prices to different groups', isCorrect: false },
          { text: 'Charging different prices based on quantity', isCorrect: false },
          { text: 'Charging each customer their maximum willingness to pay', isCorrect: true },
          { text: 'Charging different prices in different locations', isCorrect: false },
        ],
      }
    ]
  }
};

export default marketStructuresMetadata; 