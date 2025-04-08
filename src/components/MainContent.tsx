import { useContext } from 'react';
import { SidebarContext } from './Sidebar';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  const { isOpen, isMobile } = useContext(SidebarContext);

  return (
    <main
      className={`transition-all duration-300 w-full ${
        isMobile
          ? 'fixed inset-0'
          : isOpen
          ? 'sidebar-margin'
          : ''
      }`}
      style={{
        marginLeft: isMobile ? 0 : isOpen ? '256px' : 0
      }}
    >
      <div className={`
        ${isMobile ? 'pt-16' : ''} // Add padding top on mobile for the menu button
        h-full overflow-auto
      `}>
        {children}
      </div>
    </main>
  );
} 