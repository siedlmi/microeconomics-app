import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardProps {
  term: string;
  definition: string;
  onNext?: () => void;
  onPrevious?: () => void;
  showControls?: boolean;
}

export default function Flashcard({ 
  term, 
  definition, 
  onNext, 
  onPrevious,
  showControls = true 
}: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      setIsFlipped(!isFlipped);
    } else if (e.key === 'ArrowRight' && onNext) {
      onNext();
    } else if (e.key === 'ArrowLeft' && onPrevious) {
      onPrevious();
    }
  };

  return (
    <div 
      className="w-full max-w-lg mx-auto p-4"
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <div 
        className="relative h-64 w-full cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isFlipped ? 'back' : 'front'}
            initial={{ rotateY: isFlipped ? -180 : 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: isFlipped ? 180 : -180, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 backface-hidden"
          >
            <div className="h-full w-full bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
              <div className="text-sm text-gray-500 mb-2">
                {isFlipped ? 'Definition' : 'Term'}
              </div>
              <div className="text-xl font-medium">
                {isFlipped ? definition : term}
              </div>
              <div className="text-sm text-gray-400 mt-4">
                Click to flip or press Space/Enter
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {showControls && (
        <div className="flex justify-between mt-4">
          <button
            onClick={onPrevious}
            disabled={!onPrevious}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            disabled={!onNext}
            className="px-4 py-2 bg-gray-100 rounded disabled:opacity-50"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
} 