import { useParams } from 'react-router-dom';

export default function GlossaryTerm() {
  const { term } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{term}</h1>
      <p>[Definition for <strong>{term}</strong> will go here]</p>
    </div>
  );
}
