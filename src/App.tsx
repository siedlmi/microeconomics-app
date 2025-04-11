import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { ThemeProvider } from './contexts/ThemeContext';
import LawCourse from './courses/law-of-supply-and-demand';
import PPCCourse from './courses/production-possibilities-curve';
import ConsumerCourse from './courses/consumer-choice';
import MarketStructuresCourse from './courses/market-structures';
import MarketFailuresCourse from './courses/market-failures';
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
              <Sidebar />
              <MainContent>
                <div className="h-full overflow-y-auto">
                  <div className="max-w-4xl mx-auto p-4 pt-20">
                    <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route 
                        path="/courses/law-of-supply-and-demand/*" 
                        element={
                          <LawCourse 
                            onComplete={() => setCompleted(s => ({ ...s, law: true }))} 
                          />
                        } 
                      />
                      <Route 
                        path="/courses/production-possibilities-curve/*" 
                        element={
                          <PPCCourse 
                            onComplete={() => setCompleted(s => ({ ...s, ppc: true }))} 
                          />
                        } 
                      />
                      <Route 
                        path="/courses/consumer-choice/*" 
                        element={
                          <ConsumerCourse 
                            onComplete={() => setCompleted(s => ({ ...s, consumer: true }))} 
                          />
                        } 
                      />
                      <Route 
                        path="/courses/market-structures/*" 
                        element={
                          <MarketStructuresCourse 
                            onComplete={() => setCompleted(s => ({ ...s, marketStructures: true }))} 
                          />
                        } 
                      />
                      <Route 
                        path="/courses/market-failures/*" 
                        element={
                          <MarketFailuresCourse 
                            onComplete={() => setCompleted(s => ({ ...s, marketFailures: true }))} 
                          />
                        } 
                      />
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