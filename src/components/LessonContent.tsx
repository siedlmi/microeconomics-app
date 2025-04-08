import React from 'react';
import GlossaryLink from './GlossaryLink';

interface LessonContentProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

// Terms we want to link to the glossary
const glossaryTerms = [
  'Supply',
  'Demand',
  'Price',
  'Equilibrium',
  'Elasticity',
  'Market',
  'Quantity',
  'Surplus',
  'Shortage',
  'Price Ceiling',
  'Price Floor'
];

export default function LessonContent({ title, description, children }: LessonContentProps) {
  // Function to add glossary links to text
  const addGlossaryLinks = (text: string) => {
    let result = [];
    let lastIndex = 0;

    // Sort terms by length (longest first) to handle overlapping terms
    const sortedTerms = [...glossaryTerms].sort((a, b) => b.length - a.length);

    // Find all glossary terms in the text
    const matches = sortedTerms.reduce((acc, term) => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        acc.push({ term, index: match.index, length: match[0].length });
      }
      return acc;
    }, [] as { term: string; index: number; length: number }[]);

    // Sort matches by index
    matches.sort((a, b) => a.index - b.index);

    // Build the result with glossary links
    matches.forEach((match, i) => {
      // Add text before the match
      if (match.index > lastIndex) {
        result.push(text.slice(lastIndex, match.index));
      }

      // Add the glossary link
      result.push(
        <GlossaryLink
          key={`${match.term}-${i}`}
          term={match.term}
        >
          {text.slice(match.index, match.index + match.length)}
        </GlossaryLink>
      );

      lastIndex = match.index + match.length;
    });

    // Add any remaining text
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }

    return result;
  };

  return (
    <div className="mb-6">
      {title && <h1 className="text-2xl font-bold mb-2">{title}</h1>}
      {description && <p className="mb-4">{addGlossaryLinks(description)}</p>}
      {children}
    </div>
  );
} 