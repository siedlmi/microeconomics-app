import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import CourseRouter from './courses/CourseRouter';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Dashboard from './components/Dashboard';
import Glossary from './components/Glossary';
import GlossaryTerm from './components/GlossaryTerm';
import Profile from './components/Profile';
import './App.css';

export default function App() {
  const [completed, setCompleted] = useState({ law: false, ppc: false, consumer: false });

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Banner />
          <div className="flex flex-col md:flex-row pt-16">
            <Sidebar completed={completed}>
              <div></div>
            </Sidebar>
            <MainContent>
              <div className="flex-1 p-4 sm:p-6 md:p-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/courses/*" element={<CourseRouter setCompleted={setCompleted} />} />
                  <Route path="/glossary" element={<Glossary />} />
                  <Route path="/glossary/:term" element={<GlossaryTerm />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </div>
            </MainContent>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
}