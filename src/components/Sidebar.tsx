import { useLang } from '../i18n';
import { useState, useEffect, createContext, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const SidebarContext = createContext<{
  isOpen: boolean;
  isMobile: boolean;
}>({ isOpen: true, isMobile: false });

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

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`;

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
            <NavLink to="/" className={linkClass}>{t.dashboard}</NavLink>

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
                        <NavLink to="/courses/law-of-supply-and-demand/lesson-1" className={linkClass}>• Lesson 1</NavLink>
                        <NavLink to="/courses/law-of-supply-and-demand/lesson-2" className={linkClass}>• Lesson 2</NavLink>
                        <NavLink to="/courses/law-of-supply-and-demand/lesson-3" className={linkClass}>• Lesson 3</NavLink>
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
                        <NavLink to="/courses/consumer-choice/lesson-1" className={linkClass}>• Preferences</NavLink>
                        <NavLink to="/courses/consumer-choice/lesson-2" className={linkClass}>• Budget Constraint</NavLink>
                        <NavLink to="/courses/consumer-choice/lesson-3" className={linkClass}>• Indifference Curves</NavLink>
                        <NavLink to="/courses/consumer-choice/lesson-4" className={linkClass}>• MRS</NavLink>
                        <NavLink to="/courses/consumer-choice/lesson-5" className={linkClass}>• Equilibrium</NavLink>
                        <NavLink to="/courses/consumer-choice/lesson-6" className={linkClass}>• Effects of Income/Prices</NavLink>
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
                        <NavLink to="/courses/ppc/1" className={linkClass}>• Introduction to PPC</NavLink>
                        <NavLink to="/courses/ppc/2" className={linkClass}>• Opportunity Cost</NavLink>
                        <NavLink to="/courses/ppc/3" className={linkClass}>• Efficiency</NavLink>
                        <NavLink to="/courses/ppc/4" className={linkClass}>• Economic Growth</NavLink>
                        <NavLink to="/courses/ppc/quiz" className={linkClass}>• Quiz</NavLink>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/glossary" className={linkClass}>{t.glossary}</NavLink>
            <NavLink to="/profile" className={linkClass}>{t.profile}</NavLink>
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
