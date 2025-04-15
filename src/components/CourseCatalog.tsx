import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../i18n';
import lawMetadata from '../courses/law-of-supply-and-demand/metadata';
import ppcMetadata from '../courses/production-possibilities-curve/metadata';
import consumerMetadata from '../courses/consumer-choice/metadata';
import marketStructuresMetadata from '../courses/market-structures/metadata';
import marketFailuresMetadata from '../courses/market-failures/metadata';
const courses = [
  {
    id: 'law-of-supply-and-demand',
    metadata: lawMetadata,
    image: '📈',
  },
  {
    id: 'production-possibilities-curve',
    metadata: ppcMetadata,
    image: '📊',
  },
  {
    id: 'consumer-choice',
    metadata: consumerMetadata,
    image: '🛒',
  },
  {
    id: 'market-structures',
    metadata: marketStructuresMetadata,
    image: '🏢',
  },
  {
    id: 'market-failures',
    metadata: marketFailuresMetadata,
    image: '🚫',
  },
];

export default function CourseCatalog() {
  const { t } = useLang();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.metadata.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Course Catalog</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Link
            key={course.id}
            to={`/courses/${course.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center space-x-4">
              <span className="text-4xl">{course.image}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{course.metadata.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{course.metadata.description}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{course.metadata.content.lessons.length} lessons</span>
              <span className="text-indigo-600 hover:text-indigo-700">View Course →</span>
            </div>
          </Link>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found matching your search.</p>
        </div>
      )}
    </div>
  );
}