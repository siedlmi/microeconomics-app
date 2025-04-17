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
          { 
            text: 'Many sellers and buyers with identical products',
            isCorrect: true,
            explanation: 'Correct! Perfect competition requires many buyers and sellers trading homogeneous (identical) products, with no individual having market power.'
          },
          { 
            text: 'One seller with complete market control',
            isCorrect: false,
            explanation: 'This describes a monopoly, where a single firm has market power, not perfect competition.'
          },
          { 
            text: 'Few sellers with differentiated products',
            isCorrect: false,
            explanation: 'This describes monopolistic competition or oligopoly, where firms have some market power through product differentiation.'
          },
          { 
            text: 'Government price controls',
            isCorrect: false,
            explanation: 'Government price controls are a form of market intervention, not a characteristic of perfect competition.'
          }
        ],
        explanation: 'Perfect competition is characterized by many buyers and sellers trading identical products, with free entry and exit, perfect information, and no individual market power. Firms are price takers in this market structure.'
      },
      {
        question: 'What is deadweight loss in a monopoly?',
        options: [
          { 
            text: 'The profit earned by the monopolist',
            isCorrect: false,
            explanation: 'Monopoly profit is a transfer from consumers to the producer, not a deadweight loss to society.'
          },
          { 
            text: 'The loss of economic efficiency due to monopoly pricing',
            isCorrect: true,
            explanation: 'Correct! Deadweight loss represents the economic value lost to society because a monopoly produces less and charges more than would occur in perfect competition.'
          },
          { 
            text: 'The cost of production',
            isCorrect: false,
            explanation: 'Production costs are expenses incurred by the monopolist, not the efficiency loss to society.'
          },
          { 
            text: 'The price difference between monopoly and competitive markets',
            isCorrect: false,
            explanation: 'While monopolies do charge higher prices, the price difference itself is not the deadweight loss - it\'s the lost economic value from reduced trade.'
          }
        ],
        explanation: 'Deadweight loss in a monopoly represents the economic value lost to society due to the monopolist restricting output and charging prices above marginal cost. This creates allocative inefficiency where some mutually beneficial trades do not occur.'
      },
      {
        question: 'What is the main characteristic of monopolistic competition?',
        options: [
          { 
            text: 'Identical products',
            isCorrect: false,
            explanation: 'Identical products characterize perfect competition, not monopolistic competition where products are differentiated.'
          },
          { 
            text: 'Product differentiation',
            isCorrect: true,
            explanation: 'Correct! Firms in monopolistic competition compete by differentiating their products, giving them some price-setting power.'
          },
          { 
            text: 'Barriers to entry',
            isCorrect: false,
            explanation: 'While some barriers may exist, significant barriers to entry are more characteristic of monopolies and oligopolies.'
          },
          { 
            text: 'Price fixing',
            isCorrect: false,
            explanation: 'Price fixing is a form of collusion typically associated with oligopolies, not monopolistic competition.'
          }
        ],
        explanation: 'Monopolistic competition combines elements of both perfect competition and monopoly. Firms compete by differentiating their products, giving them some price-setting power, but free entry ensures normal profits in the long run.'
      },
      {
        question: 'What is the prisoner\'s dilemma in oligopoly?',
        options: [
          { 
            text: 'A situation where firms must choose between cooperation and competition',
            isCorrect: true,
            explanation: 'Correct! The prisoner\'s dilemma in oligopoly shows why firms might compete even when cooperation would be more profitable for all.'
          },
          { 
            text: 'A legal restriction on market entry',
            isCorrect: false,
            explanation: 'While oligopolies often have barriers to entry, the prisoner\'s dilemma refers to the strategic interaction between existing firms.'
          },
          { 
            text: 'A type of price discrimination',
            isCorrect: false,
            explanation: 'Price discrimination is a pricing strategy, while the prisoner\'s dilemma describes the strategic interaction between firms.'
          },
          { 
            text: 'A government regulation',
            isCorrect: false,
            explanation: 'The prisoner\'s dilemma is a concept from game theory explaining firm behavior, not a government regulation.'
          }
        ],
        explanation: 'The prisoner\'s dilemma in oligopoly explains why firms might end up competing even when cooperation would be more profitable. Each firm has an incentive to "cheat" on agreements, leading to a competitive outcome despite the potential for higher profits through cooperation.'
      },
      {
        question: 'What is first-degree price discrimination?',
        options: [
          { 
            text: 'Charging different prices to different groups',
            isCorrect: false,
            explanation: 'This describes third-degree price discrimination, where prices vary by customer group (e.g., student discounts).'
          },
          { 
            text: 'Charging different prices based on quantity',
            isCorrect: false,
            explanation: 'This describes second-degree price discrimination, where prices vary by purchase quantity (e.g., bulk discounts).'
          },
          { 
            text: 'Charging each customer their maximum willingness to pay',
            isCorrect: true,
            explanation: 'Correct! First-degree price discrimination involves charging each customer the maximum they are willing to pay, extracting all consumer surplus.'
          },
          { 
            text: 'Charging different prices in different locations',
            isCorrect: false,
            explanation: 'Geographic price discrimination is a form of third-degree price discrimination, not first-degree.'
          }
        ],
        explanation: 'First-degree (or perfect) price discrimination occurs when a seller charges each customer their maximum willingness to pay. While theoretically efficient, it\'s rarely achievable in practice due to information constraints.'
      }
    ]
  }
};

export default marketStructuresMetadata;