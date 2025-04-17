import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight, BookOpen, Home, Bookmark, Settings, User, LucideIcon } from 'lucide-react';
import { useLang } from '../i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme } from '../contexts/ThemeContext';

type NavLabel = 'dashboard' | 'glossary' | 'profile' | 'courses' | 'settings';

const navItems: Array<{
  path: string;
  icon: LucideIcon;
  label: NavLabel;
  tooltip: string;
}> = [
  { path: '/', icon: Home, label: 'dashboard', tooltip: 'Dashboard' },
  { path: '/catalog', icon: BookOpen, label: 'courses', tooltip: 'Course Catalog' },
  { path: '/glossary', icon: Bookmark, label: 'glossary', tooltip: 'Glossary' },
  { path: '/profile', icon: User, label: 'profile', tooltip: 'Profile' },
  { path: '/settings', icon: Settings, label: 'settings', tooltip: 'Settings' },
];

const IconWrapper = ({ icon: Icon, className }: { icon: LucideIcon, className?: string }) => {
  return <Icon className={className} />;
};

export default function Sidebar() {
  const { t, lang } = useLang();
  const { theme } = useTheme();
  const location = useLocation();
  const { isOpen, isCollapsed, toggleSidebar, toggleCollapse } = useSidebar();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Trap focus when sidebar is open on mobile
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || window.innerWidth >= 768) return;

      if (e.key === 'Escape') {
        toggleSidebar();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = sidebarRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements?.length) return;

        const first = focusableElements[0] as HTMLElement;
        const last = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, toggleSidebar]);

  const isActive = (path: string) => location.pathname === path;

  const sidebarVariants = {
    open: { x: 0, width: isCollapsed ? '5rem' : '16rem' },
    closed: { x: '-100%', width: '16rem' },
  };

  const overlayVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 },
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && window.innerWidth < 768 && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={`fixed top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 shadow-lg z-40 
          flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} transform lg:translate-x-0
          ${lang === 'pl' ? 'right-0 left-auto' : 'left-0'}`}
      >
        {/* Header with toggle buttons */}
        <div className="p-4 flex items-center justify-between border-b dark:border-gray-700">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Menu</h2>
          )}
          <div className="flex items-center gap-2">
            {window.innerWidth >= 1024 && (
              <button
                onClick={toggleCollapse}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
            )}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto py-4">
          {navItems.map((item) => {
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-700 dark:text-gray-200
                  ${active ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300' : ''}
                  hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors relative group`}
                onClick={() => window.innerWidth < 768 && toggleSidebar()}
              >
                <IconWrapper 
                  icon={item.icon} 
                  className={`w-6 h-6 ${active ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
                />
                {!isCollapsed && (
                  <span className="ml-3">{t[item.label]}</span>
                )}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm 
                    rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.tooltip}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>
      </motion.div>

      {/* Mobile toggle button in header */}
      {window.innerWidth < 768 && !isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50
            hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Open sidebar"
        >
          <Menu size={24} />
        </button>
      )}
    </>
  );
}
