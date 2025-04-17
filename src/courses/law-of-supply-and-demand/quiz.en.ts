const lawQuiz = [
  {
    question: 'What happens to equilibrium price when demand increases and supply stays constant?',
    options: [
      { 
        text: 'Price goes down',
        isCorrect: false,
        explanation: 'When demand increases with constant supply, there is more competition for the same goods, which puts upward pressure on prices.'
      },
      { 
        text: 'Price goes up',
        isCorrect: true,
        explanation: 'Correct! When demand increases while supply remains constant, competition for the limited supply drives prices up until a new equilibrium is reached at a higher price point.'
      },
      { 
        text: 'Supply increases',
        isCorrect: false,
        explanation: 'Supply is stated to remain constant in this scenario. Changes in demand do not directly cause changes in supply.'
      },
      { 
        text: 'Equilibrium does not change',
        isCorrect: false,
        explanation: 'Any change in demand or supply will lead to a new equilibrium point, unless both curves shift in ways that exactly offset each other.'
      },
    ],
    explanation: 'The equilibrium price is determined by the intersection of supply and demand curves. When demand increases (shifts right) while supply remains constant, the intersection point moves up along the supply curve, resulting in a higher equilibrium price.'
  },
  {
    question: 'What is elasticity in economics?',
    options: [
      { 
        text: 'Price multiplied by demand',
        isCorrect: false,
        explanation: 'This is a mathematical operation, not the economic concept of elasticity which measures responsiveness to changes.'
      },
      { 
        text: 'Responsiveness of quantity to price',
        isCorrect: true,
        explanation: 'Correct! Elasticity measures how responsive quantity demanded or supplied is to changes in price. It helps us understand the sensitivity of market participants to price changes.'
      },
      { 
        text: 'Price divided by supply',
        isCorrect: false,
        explanation: 'This is just a ratio of two numbers, not the measure of how quantity responds to price changes.'
      },
      { 
        text: 'Cost of production',
        isCorrect: false,
        explanation: 'Cost of production is a different economic concept that relates to the expenses involved in producing goods or services.'
      },
    ],
    explanation: 'Elasticity is a crucial concept in economics that measures the percentage change in one variable in response to a percentage change in another variable. In the context of price elasticity, it tells us how sensitive buyers or sellers are to price changes.'
  },
  {
    question: 'In a competitive market, what causes a shortage?',
    options: [
      { 
        text: 'Price above equilibrium',
        isCorrect: false,
        explanation: 'When price is above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus, not a shortage.'
      },
      { 
        text: 'Price below equilibrium',
        isCorrect: true,
        explanation: 'Correct! When price is set below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage. This often happens with price ceilings.'
      },
      { 
        text: 'Supply equals demand',
        isCorrect: false,
        explanation: 'When supply equals demand, the market is at equilibrium and there is neither a shortage nor a surplus.'
      },
      { 
        text: 'Increased production',
        isCorrect: false,
        explanation: 'Increased production actually increases supply, which, all else being equal, would reduce the likelihood of a shortage.'
      },
    ],
    explanation: 'A shortage occurs when quantity demanded exceeds quantity supplied at a given price. This typically happens when prices are artificially held below the equilibrium price, such as with price ceilings. At these lower prices, consumers want to buy more than producers are willing to supply.'
  }
];

export default lawQuiz;
