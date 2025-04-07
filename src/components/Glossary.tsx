import { Link } from 'react-router-dom';

export default function Glossary() {
  const terms = ['Supply', 'Demand', 'Elasticity', 'Equilibrium', 'Opportunity Cost'];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Glossary</h1>
      <ul className="list-disc list-inside">
        {terms.map(term => (
          <li key={term}>
            <Link to={`/glossary/${term.toLowerCase()}`} className="text-blue-600 underline">
              {term}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
