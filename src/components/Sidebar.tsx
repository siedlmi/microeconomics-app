import { useLang } from '../i18n';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar({ completed }: { completed: any }) {
  const { t, switchLanguage, lang } = useLang();
  const [coursesOpen, setCoursesOpen] = useState(true);
  const [openCourse, setOpenCourse] = useState<string | null>('law');

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`;

  return (
    <aside className="w-64 fixed h-screen bg-white p-6 shadow flex flex-col justify-between">
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

                <NavLink to="/courses/ppc" className={linkClass}>
                  {t.ppc} {completed.ppc && '✅'}
                </NavLink>
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
    </aside>
  );
}
