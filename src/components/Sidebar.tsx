import { NavLink } from 'react-router-dom';
import { useLang } from '../i18n';
import { useState } from 'react';

const lessonTitles = {
  law: [
    { title: 'Lesson 1: Supply vs Price', route: '/courses/law-of-supply-and-demand/lesson-1' },
    { title: 'Lesson 2: Demand vs Price', route: '/courses/law-of-supply-and-demand/lesson-2' },
    { title: 'Lesson 3: Supply & Demand Together', route: '/courses/law-of-supply-and-demand/lesson-3' },
  ],
  consumer: [
    { title: 'Preferences', route: '/courses/consumer-choice/lesson-1' },
    { title: 'Budget Constraint', route: '/courses/consumer-choice/lesson-2' },
    { title: 'Indifference Curves', route: '/courses/consumer-choice/lesson-3' },
    { title: 'Marginal Rate of Substitution', route: '/courses/consumer-choice/lesson-4' },
    { title: 'Consumer Equilibrium', route: '/courses/consumer-choice/lesson-5' },
    { title: 'Effects of Income/Prices', route: '/courses/consumer-choice/lesson-6' },
  ]
};

export default function Sidebar({ completed }: { completed: { law: boolean; ppc: boolean; consumer: boolean } }) {
  const { t } = useLang();

  const [coursesOpen, setCoursesOpen] = useState(true);
  const [openCourse, setOpenCourse] = useState<string | null>(null);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-2 py-1 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`;

  return (
    <aside className="w-64 fixed h-screen bg-white p-6 shadow overflow-auto">
      <h2 className="text-xl font-bold mb-6">Microeconomics Academy</h2>

      <nav className="flex flex-col gap-3 text-sm">
        <NavLink to="/" className={linkClass}>
          {t.dashboard}
        </NavLink>

        {/* Courses */}
        <div>
          <div
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="uppercase text-gray-600 font-semibold cursor-pointer flex items-center justify-between"
          >
            {t.courses} <span>{coursesOpen ? '▾' : '▸'}</span>
          </div>

          {coursesOpen && (
            <div className="ml-1 mt-2 space-y-2">
              {/* Law Course */}
              <div>
                <button
                  onClick={() => setOpenCourse(openCourse === 'law' ? null : 'law')}
                  className="text-left w-full text-blue-700 font-medium"
                >
                  {t.law} {completed.law && '✅'}
                </button>
                {openCourse === 'law' && (
                  <div className="ml-3 mt-1 space-y-1">
                    {lessonTitles.law.map((l, idx) => (
                      <NavLink key={idx} to={l.route} className={linkClass}>
                        • {l.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Consumer Course */}
              <div>
                <button
                  onClick={() => setOpenCourse(openCourse === 'consumer' ? null : 'consumer')}
                  className="text-left w-full text-blue-700 font-medium"
                >
                  {t.consumer} {completed.consumer && '✅'}
                </button>
                {openCourse === 'consumer' && (
                  <div className="ml-3 mt-1 space-y-1">
                    {lessonTitles.consumer.map((l, idx) => (
                      <NavLink key={idx} to={l.route} className={linkClass}>
                        • {l.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* PPC Course */}
              <NavLink to="/courses/ppc" className={linkClass}>
                {t.ppc} {completed.ppc && '✅'}
              </NavLink>
            </div>
          )}
        </div>

        {/* Glossary/Profile */}
        <NavLink to="/glossary" className={linkClass}>
          {t.glossary}
        </NavLink>
        <NavLink to="/profile" className={linkClass}>
          {t.profile}
        </NavLink>
      </nav>
    </aside>
  );
}
