import { useLang } from '../i18n';
import { useState, useEffect, createContext, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import lawMetadata from '../courses/law/metadata';
import consumerMetadata from '../courses/consumer/metadata';
import ppcMetadata from '../courses/ppc/metadata';

export const SidebarContext = createContext<{
  isOpen: boolean;
  isMobile: boolean;
}>({ isOpen: true, isMobile: false });

interface CourseMetadata {
  id: string;
  content: {
    lessons: Array<{
      title: string;
    }>;
  };
}

const courseMetadata: Record<string, CourseMetadata> = {
  law: lawMetadata,
  consumer: consumerMetadata,
  ppc: ppcMetadata,
};

const generateLessonLinks = (courseId: string, basePath: string) => {
  const metadata = courseMetadata[courseId];
  if (!metadata) return null;

  return metadata.content.lessons.map((lesson, index) => (
    <NavLink
      key={`${courseId}-lesson-${index + 1}`}
      to={`/courses/${basePath}/lesson-${index + 1}`}
      className={({ isActive }) =>
        `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`
      }
    >
      • {lesson.title}
    </NavLink>
  ));
};

export default function Sidebar({ completed }: { completed: any }) {
  const { t, switchLanguage, lang } = useLang();
  const [coursesOpen, setCoursesOpen] = useState(true);
  const [openCourse, setOpenCourse] = useState<string | null>('law');
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location, isMobile]);

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  };

  return (
    <SidebarContext.Provider value={{ isOpen, isMobile }}>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed h-screen bg-white shadow-lg flex flex-col justify-between z-50
          w-[256px] p-6`}
      >
        <div>
          <h2 className="text-xl font-bold mb-6">Microeconomics Academy</h2>

          <nav className="flex flex-col gap-3 text-sm">
            <NavLink to="/" className={({ isActive }) =>
              `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`
            }>{t.dashboard}</NavLink>

            <div>
              <div
                onClick={() => setCoursesOpen(!coursesOpen)}
                className="uppercase text-gray-600 font-semibold cursor-pointer flex items-center justify-between"
              >
                {t.courses} <span>{coursesOpen ? '▾' : '▸'}</span>
              </div>

              {coursesOpen && (
                <div className="ml-1 mt-2 space-y-2">
                  <div>
                    <button
                      onClick={() => setOpenCourse(openCourse === 'law' ? null : 'law')}
                      className="text-left w-full text-blue-700 font-medium"
                    >
                      {t.law} {completed.law && '✅'}
                    </button>
                    {openCourse === 'law' && (
                      <div className="ml-3 mt-1 space-y-1">
                        {generateLessonLinks('law', 'law-of-supply-and-demand')}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => setOpenCourse(openCourse === 'consumer' ? null : 'consumer')}
                      className="text-left w-full text-blue-700 font-medium"
                    >
                      {t.consumer} {completed.consumer && '✅'}
                    </button>
                    {openCourse === 'consumer' && (
                      <div className="ml-3 mt-1 space-y-1">
                        {generateLessonLinks('consumer', 'consumer-choice')}
                      </div>
                    )}
                  </div>

                  <div>
                    <button
                      onClick={() => setOpenCourse(openCourse === 'ppc' ? null : 'ppc')}
                      className="text-left w-full text-blue-700 font-medium"
                    >
                      {t.ppc} {completed.ppc && '✅'}
                    </button>
                    {openCourse === 'ppc' && (
                      <div className="ml-3 mt-1 space-y-1">
                        {generateLessonLinks('ppc', 'ppc')}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/glossary" className={({ isActive }) =>
              `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`
            }>{t.glossary}</NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
              `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`
            }>{t.profile}</NavLink>
          </nav>
        </div>

        {/* Language Switcher */}
        <div className="mt-6 pt-4 border-t flex justify-center gap-4">
          <button
            onClick={() => switchLanguage('en')}
            className={`text-xl ${lang === 'en' ? 'opacity-100' : 'opacity-50'}`}
          >
            🇬🇧
          </button>
          <button
            onClick={() => switchLanguage('pl')}
            className={`text-xl ${lang === 'pl' ? 'opacity-100' : 'opacity-50'}`}
          >
            🇵🇱
          </button>
        </div>
      </motion.aside>

      {/* Floating Back Button */}
      {isMobile && location.pathname !== '/' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <NavLink
            to="/"
            className="p-3 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            ←
          </NavLink>
        </motion.div>
      )}
    </SidebarContext.Provider>
  );
}
