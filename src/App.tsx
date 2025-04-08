import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Glossary from './components/Glossary';
import Profile from './components/Profile';
import GlossaryTerm from './components/GlossaryTerm';
import CourseRouter from './courses/CourseRouter';
import MainContent from './components/MainContent';

export default function App() {
  const [completed, setCompleted] = useState({ law: false, ppc: false, consumer: false });

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar completed={completed} />
        <MainContent>
          <div className="p-6 h-full">
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
    </Router>
  );
}