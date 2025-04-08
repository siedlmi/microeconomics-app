import { useState, useEffect } from 'react';
import Flashcard from './Flashcard';

interface Term {
  term: string;
  definition: string;
}

interface FlashcardsModeProps {
  terms: Term[];
  onClose: () => void;
}

export default function FlashcardsMode({ terms, onClose }: FlashcardsModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledTerms, setShuffledTerms] = useState<Term[]>([]);
  const [studyMode, setStudyMode] = useState<'ordered' | 'random'>('ordered');

  useEffect(() => {
    if (studyMode === 'random') {
      setShuffledTerms([...terms].sort(() => Math.random() - 0.5));
    } else {
      setShuffledTerms([...terms]);
    }
  }, [terms, studyMode]);

  const currentTerm = shuffledTerms[currentIndex];

  const handleNext = () => {
    if (currentIndex < shuffledTerms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    setStudyMode(studyMode === 'ordered' ? 'random' : 'ordered');
    setCurrentIndex(0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Flashcards</h2>
          <div className="flex gap-2">
            <button
              onClick={handleShuffle}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded hover:bg-indigo-200"
            >
              {studyMode === 'ordered' ? '🔀 Shuffle' : '📝 Ordered'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>

        <div className="mb-4 text-center text-sm text-gray-500">
          Card {currentIndex + 1} of {shuffledTerms.length}
        </div>

        {currentTerm && (
          <Flashcard
            term={currentTerm.term}
            definition={currentTerm.definition}
            onNext={currentIndex < shuffledTerms.length - 1 ? handleNext : undefined}
            onPrevious={currentIndex > 0 ? handlePrevious : undefined}
          />
        )}

        <div className="mt-4 text-center text-sm text-gray-500">
          Use arrow keys to navigate • Space/Enter to flip
        </div>
      </div>
    </div>
  );
} 