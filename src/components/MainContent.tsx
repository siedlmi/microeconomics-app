import { useContext } from 'react';
import { SidebarContext } from './Sidebar';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const { isOpen, isMobile } = useContext(SidebarContext);

  return (
    <main
      className={`min-h-screen bg-gray-50 transition-all duration-300 ease-in-out
        ${isOpen && !isMobile ? 'ml-64' : 'ml-0'}
        p-4 sm:p-6 md:p-8
        flex flex-col
        ${isMobile ? 'pt-16' : ''}
      `}
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </div>
    </main>
  );
} 