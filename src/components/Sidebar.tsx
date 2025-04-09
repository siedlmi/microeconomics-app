import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useLang } from '../i18n';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import lawMetadata from '../courses/law-of-supply-and-demand/metadata';
import consumerMetadata from '../courses/consumer-choice/metadata';
import ppcMetadata from '../courses/production-possibilities-curve/metadata';

interface SidebarProps {
  children: React.ReactNode;
  completed: {
    law: boolean;
    consumer: boolean;
    ppc: boolean;
  };
}

export const SidebarContext = React.createContext({
  isOpen: true,
  isMobile: false,
  toggleSidebar: () => {},
});

interface CourseMetadata {
  id: string;
  content: {
    lessons: Array<{
      title: string;
    }>;
  };
}

const courseMetadata: Record<string, CourseMetadata> = {
  'law-of-supply-and-demand': lawMetadata,
  'consumer-choice': consumerMetadata,
  'production-possibilities-curve': ppcMetadata,
};

const generateLessonLinks = (courseId: string, basePath: string) => {
  const metadata = courseMetadata[basePath];
  if (!metadata) return null;

  return metadata.content.lessons.map((lesson, index) => (
    <Link
      key={`${basePath}-lesson-${index + 1}`}
      to={`/courses/${basePath}/lesson-${index + 1}`}
      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md text-left"
    >
      • {lesson.title}
    </Link>
  ));
};

export default function Sidebar({ children, completed }: SidebarProps) {
  const { t, switchLanguage, lang } = useLang();
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(true);
  const [openCourse, setOpenCourse] = useState<string | null>('law');
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  };

  return (
    <SidebarContext.Provider value={{ isOpen, isMobile, toggleSidebar }}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-800">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 bg-white dark:bg-gray-800 shadow-lg`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center h-16 px-4 bg-indigo-600 dark:bg-indigo-700">
              <h1 className="text-xl font-bold text-white text-left">Microeconomics App</h1>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
              <Link
                to="/"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md text-left ${
                  location.pathname === '/'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {t.dashboard}
              </Link>

              {/* Courses Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-left"
                >
                  <span>{t.courses}</span>
                  {coursesOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {coursesOpen && (
                  <div className="ml-4 space-y-1">
                    {/* Law Course */}
                    <div>
                      <button
                        onClick={() => setOpenCourse(openCourse === 'law' ? null : 'law')}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-left"
                      >
                        <span>{t.law} {completed.law && '✅'}</span>
                        {openCourse === 'law' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {openCourse === 'law' && (
                        <div className="ml-4">
                          {generateLessonLinks('law', 'law-of-supply-and-demand')}
                        </div>
                      )}
                    </div>

                    {/* Consumer Course */}
                    <div>
                      <button
                        onClick={() => setOpenCourse(openCourse === 'consumer' ? null : 'consumer')}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-left"
                      >
                        <span>{t.consumer} {completed.consumer && '✅'}</span>
                        {openCourse === 'consumer' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {openCourse === 'consumer' && (
                        <div className="ml-4">
                          {generateLessonLinks('consumer', 'consumer-choice')}
                        </div>
                      )}
                    </div>

                    {/* PPC Course */}
                    <div>
                      <button
                        onClick={() => setOpenCourse(openCourse === 'ppc' ? null : 'ppc')}
                        className="flex items-center justify-between w-full px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md text-left"
                      >
                        <span>{t.ppc} {completed.ppc && '✅'}</span>
                        {openCourse === 'ppc' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>
                      {openCourse === 'ppc' && (
                        <div className="ml-4">
                          {generateLessonLinks('ppc', 'production-possibilities-curve')}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/glossary"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md text-left ${
                  location.pathname === '/glossary'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {t.glossary}
              </Link>
              <Link
                to="/profile"
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md text-left ${
                  location.pathname === '/profile'
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {t.profile}
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4">
                <button
                  onClick={() => switchLanguage('en')}
                  className={`text-xl ${lang === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  🇬🇧
                </button>
                <button
                  onClick={() => switchLanguage('pl')}
                  className={`text-xl ${lang === 'pl' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
                >
                  🇵🇱
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
