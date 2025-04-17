const ppcQuiz = [
    {
      question: 'What does a point inside the PPC curve represent?',
      options: [
        { 
          text: 'Efficient use of resources',
          isCorrect: false,
          explanation: 'Points on the curve, not inside it, represent efficient use of resources where all resources are fully utilized.'
        },
        { 
          text: 'Economic growth',
          isCorrect: false,
          explanation: 'Economic growth is represented by an outward shift of the entire PPC curve, not by points inside it.'
        },
        { 
          text: 'Underutilization of resources',
          isCorrect: true,
          explanation: 'Correct! A point inside the PPC curve indicates that the economy is producing less than it could with its current resources, suggesting unemployment or inefficient resource use.'
        },
        { 
          text: 'Unattainable production',
          isCorrect: false,
          explanation: 'Unattainable production would be represented by points outside the PPC curve, not inside it.'
        }
      ],
      explanation: 'Points inside the PPC curve represent inefficient production where resources are not being fully utilized. This could be due to unemployment, inefficient production methods, or unused resources.'
    },
    {
      question: 'What causes the PPC to shift outward?',
      options: [
        { 
          text: 'Loss of capital',
          isCorrect: false,
          explanation: 'Loss of capital would actually cause the PPC to shift inward, as it reduces productive capacity.'
        },
        { 
          text: 'Economic growth or tech improvement',
          isCorrect: true,
          explanation: 'Correct! Both economic growth and technological improvements increase the productive capacity of an economy, allowing it to produce more of both goods.'
        },
        { 
          text: 'Decrease in labor',
          isCorrect: false,
          explanation: 'A decrease in labor would reduce productive capacity and cause the PPC to shift inward.'
        },
        { 
          text: 'Higher opportunity cost',
          isCorrect: false,
          explanation: 'Changes in opportunity cost affect the shape of the curve (its concavity) but not its overall position.'
        }
      ],
      explanation: 'An outward shift of the PPC represents an increase in productive capacity, typically due to economic growth, technological advancement, or an increase in resources available to the economy.'
    },
    {
      question: 'What is opportunity cost in the context of PPC?',
      options: [
        { 
          text: 'The monetary cost of production',
          isCorrect: false,
          explanation: 'Opportunity cost is not about monetary costs, but rather about what must be given up to produce something else.'
        },
        { 
          text: 'The amount of one good given up to produce more of another',
          isCorrect: true,
          explanation: 'Correct! Opportunity cost is the trade-off between goods - how much of one good must be sacrificed to produce more of another.'
        },
        { 
          text: 'The total cost of all resources',
          isCorrect: false,
          explanation: 'This refers to economic costs, not opportunity costs which are about trade-offs between alternatives.'
        },
        { 
          text: 'The profit margin on goods',
          isCorrect: false,
          explanation: 'Profit margins are a financial concept, while opportunity cost deals with trade-offs in production possibilities.'
        }
      ],
      explanation: 'Opportunity cost is a fundamental concept in economics that represents the trade-off between alternatives. In the context of PPC, it shows how much of one good must be sacrificed to produce more of another good.'
    },
    {
      question: 'What shape is a typical PPC curve?',
      options: [
        { 
          text: 'Straight line',
          isCorrect: false,
          explanation: 'A straight line would indicate constant opportunity costs, which is rarely the case in real economies.'
        },
        { 
          text: 'Concave to the origin',
          isCorrect: true,
          explanation: 'Correct! The concave shape reflects increasing opportunity costs as more of one good is produced.'
        },
        { 
          text: 'Convex to the origin',
          isCorrect: false,
          explanation: 'A convex shape would suggest decreasing opportunity costs, which is contrary to the principle of increasing opportunity costs.'
        },
        { 
          text: 'Circular',
          isCorrect: false,
          explanation: 'A circular shape would not accurately represent the trade-offs and increasing opportunity costs in production.'
        }
      ],
      explanation: 'The PPC is typically concave to the origin due to increasing opportunity costs. As more of one good is produced, the opportunity cost of producing additional units increases due to resources being less suitable for that production.'
    }
  ];
  
  export default ppcQuiz;
