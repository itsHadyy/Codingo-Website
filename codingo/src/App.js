import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CoursesSection />
    </div>
  );
}

export default App;
