import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import VisionMissionValues from './components/VisionMissionValues';
import PricingSection from './components/PricingSection';
import ContactEnrollmentSection from './components/ContactEnrollmentSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CoursesSection />
      <TestimonialsSection />
      <VisionMissionValues />
      <PricingSection />
      <ContactEnrollmentSection />
      <Footer />
    </div>
  );
}

export default App;
