const consumerQuiz = [
    {
      question: 'What does an indifference curve represent?',
      options: [
        { 
          text: 'All affordable bundles of goods',
          isCorrect: false,
          explanation: 'This describes a budget constraint, not an indifference curve. The budget constraint shows what combinations of goods a consumer can afford.'
        },
        { 
          text: 'Bundles providing equal satisfaction',
          isCorrect: true,
          explanation: 'Correct! An indifference curve shows all combinations of goods that give the consumer the same level of satisfaction or utility.'
        },
        { 
          text: 'Maximum utility bundle',
          isCorrect: false,
          explanation: 'The maximum utility bundle is found at the tangent point between the budget line and the highest attainable indifference curve, not by the indifference curve itself.'
        },
        { 
          text: 'Budget constraints',
          isCorrect: false,
          explanation: 'Budget constraints are represented by a separate line showing the combinations of goods that can be purchased with available income.'
        }
      ],
      explanation: 'Indifference curves are a key tool in consumer theory that show all combinations of goods that provide the same level of satisfaction to a consumer. Any point on the same curve represents equal utility.'
    },
    {
      question: 'What happens to the budget line when income increases?',
      options: [
        { 
          text: 'It rotates outward',
          isCorrect: false,
          explanation: 'Rotation of the budget line occurs when relative prices change, not when income changes.'
        },
        { 
          text: 'It shifts inward',
          isCorrect: false,
          explanation: 'An inward shift would represent a decrease in income, not an increase.'
        },
        { 
          text: 'It shifts outward',
          isCorrect: true,
          explanation: 'Correct! When income increases, the consumer can afford more of both goods, resulting in a parallel outward shift of the budget line.'
        },
        { 
          text: 'It becomes vertical',
          isCorrect: false,
          explanation: 'A vertical budget line would imply the consumer can only buy one good, regardless of income level.'
        }
      ],
      explanation: 'The budget line shows all combinations of goods that can be purchased with a given income. An increase in income allows the consumer to buy more of both goods, shifting the entire budget line outward while maintaining its slope.'
    },
    {
      question: 'What is the Marginal Rate of Substitution (MRS)?',
      options: [
        { 
          text: 'The rate at which utility increases',
          isCorrect: false,
          explanation: 'This describes marginal utility, not MRS. MRS is about the trade-off between goods while maintaining the same utility level.'
        },
        { 
          text: 'The rate at which a consumer trades one good for another while maintaining utility',
          isCorrect: true,
          explanation: 'Correct! MRS measures how much of one good a consumer is willing to give up to get one more unit of another good while maintaining the same satisfaction level.'
        },
        { 
          text: 'Price of one good relative to another',
          isCorrect: false,
          explanation: 'This describes the price ratio or relative prices, which is related to but different from MRS.'
        },
        { 
          text: 'Slope of the budget line',
          isCorrect: false,
          explanation: 'The slope of the budget line represents relative prices, not the consumer\'s willingness to substitute goods.'
        }
      ],
      explanation: 'The Marginal Rate of Substitution (MRS) is the rate at which a consumer is willing to give up one good to get more of another while maintaining the same level of satisfaction. It is represented by the slope of the indifference curve at any point.'
    }
  ];
  
  export default consumerQuiz;
