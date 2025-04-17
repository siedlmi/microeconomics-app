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
          { 
            text: 'A cost imposed on third parties not involved in the transaction',
            isCorrect: true,
            explanation: 'Correct! Negative externalities occur when an economic activity imposes costs on uninvolved third parties, like pollution affecting nearby residents.'
          },
          { 
            text: 'A benefit received by third parties not involved in the transaction',
            isCorrect: false,
            explanation: 'This describes a positive externality, such as when education benefits society beyond just the student.'
          },
          { 
            text: 'A government intervention in the market',
            isCorrect: false,
            explanation: 'Government intervention is often a response to externalities, not the externality itself.'
          },
          { 
            text: 'A market failure due to monopoly power',
            isCorrect: false,
            explanation: 'Monopoly power is a different type of market failure, not related to external effects on third parties.'
          }
        ],
        explanation: 'Negative externalities represent costs imposed on third parties who are not directly involved in a market transaction. Examples include pollution, noise, or traffic congestion, where the social cost exceeds the private cost.'
      },
      {
        question: 'What characterizes a public good?',
        options: [
          { 
            text: 'It is excludable and rival',
            isCorrect: false,
            explanation: 'Excludable and rival goods are private goods, not public goods.'
          },
          { 
            text: 'It is non-excludable and non-rival',
            isCorrect: true,
            explanation: 'Correct! Public goods cannot exclude users (non-excludable) and one person\'s use doesn\'t reduce availability for others (non-rival).'
          },
          { 
            text: 'It is provided by the government',
            isCorrect: false,
            explanation: 'While governments often provide public goods, what makes something a public good is its non-excludable and non-rival nature, not who provides it.'
          },
          { 
            text: 'It is always free to use',
            isCorrect: false,
            explanation: 'Public goods may have costs, but their non-excludable nature makes it difficult to charge users directly.'
          }
        ],
        explanation: 'Public goods are defined by two key characteristics: non-excludability (cannot prevent people from using it) and non-rivalry (one person\'s use doesn\'t reduce availability for others). Examples include national defense and lighthouses.'
      },
      {
        question: 'What is adverse selection?',
        options: [
          { 
            text: 'When one party has more information than the other before a transaction',
            isCorrect: true,
            explanation: 'Correct! Adverse selection occurs when information asymmetry leads to a selection bias in markets, like in insurance or used car markets.'
          },
          { 
            text: 'When a market fails to reach equilibrium',
            isCorrect: false,
            explanation: 'Market disequilibrium is a different issue from adverse selection, which is about information problems.'
          },
          { 
            text: 'When government intervention creates inefficiency',
            isCorrect: false,
            explanation: 'Government failure is different from adverse selection, which is about information asymmetry in markets.'
          },
          { 
            text: 'When externalities are not internalized',
            isCorrect: false,
            explanation: 'Uninternalized externalities are a different type of market failure from adverse selection.'
          }
        ],
        explanation: 'Adverse selection occurs when information asymmetry before a transaction leads to a biased selection of market participants. For example, people more likely to need insurance are more likely to buy it, potentially making insurance markets unstable.'
      },
      {
        question: 'What is the purpose of a Pigouvian tax?',
        options: [
          { 
            text: 'To raise government revenue',
            isCorrect: false,
            explanation: 'While Pigouvian taxes do raise revenue, their primary purpose is to correct market inefficiencies from negative externalities.'
          },
          { 
            text: 'To correct negative externalities',
            isCorrect: true,
            explanation: 'Correct! Pigouvian taxes aim to make producers or consumers pay for the external costs they impose on society.'
          },
          { 
            text: 'To subsidize public goods',
            isCorrect: false,
            explanation: 'While public goods might be funded by tax revenue, Pigouvian taxes specifically address negative externalities.'
          },
          { 
            text: 'To regulate monopolies',
            isCorrect: false,
            explanation: 'Monopoly regulation uses different tools; Pigouvian taxes are specifically for addressing negative externalities.'
          }
        ],
        explanation: 'A Pigouvian tax is set equal to the marginal external cost of a negative externality, making producers or consumers internalize the full social cost of their actions. This helps achieve a more efficient market outcome.'
      },
      {
        question: 'What does deadweight loss represent?',
        options: [
          { 
            text: 'The total cost of production',
            isCorrect: false,
            explanation: 'Production costs are normal business expenses, not the efficiency loss represented by deadweight loss.'
          },
          { 
            text: 'The loss of economic efficiency',
            isCorrect: true,
            explanation: 'Correct! Deadweight loss represents the reduction in total economic welfare due to market inefficiency.'
          },
          { 
            text: 'Government tax revenue',
            isCorrect: false,
            explanation: 'Tax revenue is a transfer from one party to another, not a net loss to society like deadweight loss.'
          },
          { 
            text: 'Consumer surplus',
            isCorrect: false,
            explanation: 'Consumer surplus is the benefit consumers get above what they pay, not the efficiency loss from market failures.'
          }
        ],
        explanation: 'Deadweight loss represents the loss in economic efficiency that occurs when a market fails to achieve the optimal allocation of resources. It measures the total value lost to society due to market distortions or failures.'
      }
    ]
  }
};

export default marketFailuresMetadata;