import React from 'react';
import { useSidebar } from '../contexts/SidebarContext';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { isOpen, isCollapsed } = useSidebar();

  return (
    <main 
      className={`flex-1 min-h-0 transition-[margin] duration-200 ease-in-out
        ${isOpen && !isCollapsed ? 'lg:ml-64' : isOpen && isCollapsed ? 'lg:ml-20' : 'ml-0'}
      `}
    >
      {children}
    </main>
  );
}