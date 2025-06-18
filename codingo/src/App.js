import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import VisionMissionValues from './components/VisionMissionValues';
import PricingSection from './components/PricingSection';
import ContactEnrollmentSection from './components/ContactEnrollmentSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function PrivateRoute({ children }) {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);
  if (user === undefined) return null;
  return user ? children : <Navigate to="/login" />;
}

function MainSite() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}
