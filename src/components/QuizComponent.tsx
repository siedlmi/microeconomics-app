import { useEffect, useState } from 'react';

export default function QuizComponent({ quiz, onComplete }: { quiz: any[]; onComplete: () => void }) {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = quiz[qIndex];

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(score + 1);
    if (qIndex + 1 < quiz.length) setQIndex(qIndex + 1);
    else setDone(true);
  };

  useEffect(() => {
    if (done) onComplete();
  }, [done]);

  if (done) {
    return (
      <div className="mt-6 p-4 bg-green-100 rounded">
        <h2 className="text-xl font-bold mb-2">🎉 Quiz Complete!</h2>
        <p>Your Score: {score} / {quiz.length}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold mb-2">{current.question}</h3>
      <ul className="space-y-2">
        {current.options.map((opt: { text: string; isCorrect: boolean }, i: number) => (
          <li key={i}>
            <button
              onClick={() => handleAnswer(opt.isCorrect)}
              className="w-full text-left px-4 py-2 border rounded hover:bg-blue-100"
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
