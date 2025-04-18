import React from 'react';

interface GraphQuestionProps {
  question: string;
  // Add more props as needed
}

const GraphQuestionComponent: React.FC<GraphQuestionProps> = ({ question }) => {
  return (
    <div className="graph-question">
      <h3>{question}</h3>
      {/* Add graph rendering and interaction logic here */}
    </div>
  );
};

export default GraphQuestionComponent;