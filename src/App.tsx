import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { ThemeProvider } from './contexts/ThemeContext';
import CourseRouter from './courses/CourseRouter';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard';
import Glossary from './components/Glossary';
import GlossaryTerm from './components/GlossaryTerm';
import Profile from './components/Profile';
import Settings from './components/Settings';
import CourseCatalog from './components/CourseCatalog';
import './App.css';

export default function App() {
  const [completed, setCompleted] = useState({ law: false, ppc: false, consumer: false });

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
            <Banner />
            <div className="flex-1 flex min-h-0">
              <Sidebar completed={completed}>
                <div></div>
              </Sidebar>
              <MainContent>
                <div className="h-full overflow-y-auto">
                  <div className="max-w-4xl mx-auto p-4 pt-20">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="/courses/*" element={<CourseRouter setCompleted={setCompleted} />} />
                      <Route path="/catalog" element={<CourseCatalog />} />
                      <Route path="/glossary" element={<Glossary />} />
                      <Route path="/glossary/:term" element={<GlossaryTerm />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </div>
                </div>
              </MainContent>
            </div>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}