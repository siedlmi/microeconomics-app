import React from 'react';
import { Bookmark } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useBookmarks } from '../contexts/BookmarksContext';
import GlossaryLink from './GlossaryLink';

interface LessonContentProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  courseId?: string;
  courseName?: string;
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

export default function LessonContent({ title, description, children, courseId, courseName }: LessonContentProps) {
  const { lessonId } = useParams();
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();

  const handleBookmarkToggle = () => {
    if (!courseId || !lessonId || !title || !courseName) return;

    if (isBookmarked(courseId, lessonId)) {
      removeBookmark(courseId, lessonId);
    } else {
      addBookmark({
        courseId,
        lessonId,
        title,
        courseName
      });
    }
  };

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
    <div className="space-y-6">
      {title && (
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          {courseId && lessonId && (
            <button
              onClick={handleBookmarkToggle}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked(courseId, lessonId)
                  ? 'text-yellow-500 hover:text-yellow-600'
                  : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <Bookmark className="w-6 h-6" fill={isBookmarked(courseId, lessonId) ? "currentColor" : "none"} />
            </button>
          )}
        </div>
      )}
      {description && (
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {addGlossaryLinks(description)}
          </p>
        </div>
      )}
      <div className="mt-8">
        {children}
      </div>
    </div>
  );
}