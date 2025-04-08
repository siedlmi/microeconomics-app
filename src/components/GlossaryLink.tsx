import { Link } from 'react-router-dom';

interface GlossaryLinkProps {
  term: string;
  children?: React.ReactNode;
  className?: string;
}

export default function GlossaryLink({ term, children, className = '' }: GlossaryLinkProps) {
  return (
    <Link
      to={`/glossary#${encodeURIComponent(term)}`}
      className={`text-blue-600 hover:text-blue-800 hover:underline ${className}`}
    >
      {children || term}
      <sup className="ml-0.5">📘</sup>
    </Link>
  );
} 