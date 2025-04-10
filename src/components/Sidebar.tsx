import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, BookOpen, Home, Bookmark, Settings, User } from 'lucide-react';
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

const Sidebar: React.FC = () => {
  const { t } = useLang();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Microeconomics App</h2>
      </div>
      <nav className="mt-4">
        <Link
          to="/"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/') ? 'bg-gray-100' : ''
          }`}
        >
          <Home className="w-5 h-5 mr-3" />
          {t.dashboard}
        </Link>
        <Link
          to="/catalog"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/catalog') ? 'bg-gray-100' : ''
          }`}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          {t.courses}
        </Link>
        <Link
          to="/glossary"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/glossary') ? 'bg-gray-100' : ''
          }`}
        >
          <Bookmark className="w-5 h-5 mr-3" />
          {t.glossary}
        </Link>
        <Link
          to="/profile"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/profile') ? 'bg-gray-100' : ''
          }`}
        >
          <User className="w-5 h-5 mr-3" />
          {t.profile}
        </Link>
        <Link
          to="/settings"
          className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 ${
            isActive('/settings') ? 'bg-gray-100' : ''
          }`}
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
