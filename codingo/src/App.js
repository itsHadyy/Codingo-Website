import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      {/* Add other components here as needed */}
    </div>
  );
}

export default App;
