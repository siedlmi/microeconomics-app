import { useState, useMemo, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import glossary from '../data/glossaryData';
import FlashcardsMode from './FlashcardsMode';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const termRefs = useRef<{ [key: string]: HTMLLIElement }>({});
  const [isFlashcardsMode, setIsFlashcardsMode] = useState(false);

  // Handle deep linking and highlighting
  useEffect(() => {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash) {
      setHighlightedTerm(hash);
      // Scroll to the term
      setTimeout(() => {
        termRefs.current[hash]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [location.hash]);

  const filtered = useMemo(() => {
    return glossary
      .filter(entry =>
        entry.term.toLowerCase().includes(search.toLowerCase())
      )
      .filter(entry =>
        activeLetter ? entry.term.toUpperCase().startsWith(activeLetter) : true
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeLetter]);

  const grouped = useMemo(() => {
    return filtered.reduce((acc: Record<string, typeof glossary>, item) => {
      const first = item.term[0].toUpperCase();
      if (!acc[first]) acc[first] = [];
      acc[first].push(item);
      return acc;
    }, {});
  }, [filtered]);

  const handleTermClick = (term: string) => {
    navigate(`#${encodeURIComponent(term)}`);
    setHighlightedTerm(term);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">📘 Glossary</h1>
        <button
          onClick={() => setIsFlashcardsMode(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 flex items-center gap-2"
        >
          🔄 Study with Flashcards
        </button>
      </div>

      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full px-4 py-3 rounded border mb-6 shadow"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="flex flex-wrap justify-center gap-2 mb-8 text-sm text-gray-600">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setActiveLetter(letter === activeLetter ? null : letter)}
            className={`w-6 h-6 flex items-center justify-center rounded hover:bg-blue-100 ${
              activeLetter === letter ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {Object.entries(grouped).map(([letter, terms]) => (
          <section key={letter} id={`section-${letter}`}>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3">{letter}</h2>
            <ul className="space-y-2">
              {terms.map((entry, i) => (
                <li
                  key={i}
                  ref={el => {
                    if (el) termRefs.current[entry.term] = el;
                  }}
                  onClick={() => handleTermClick(entry.term)}
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    highlightedTerm === entry.term
                      ? 'bg-yellow-100 shadow-sm'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold">{entry.term}</div>
                  <div className="text-gray-600">{entry.definition}</div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500">No matching terms found.</p>
        )}
      </div>

      {isFlashcardsMode && (
        <FlashcardsMode
          terms={filtered}
          onClose={() => setIsFlashcardsMode(false)}
        />
      )}
    </div>
  );
}
