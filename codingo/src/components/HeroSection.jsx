import React, { useEffect, useRef, useState } from "react";
import FloatingCircle from "./FloatingCircle";
import Navbar from "./NavBar";

const HeroSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} id="home" className="relative min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 overflow-hidden text-white flex flex-col items-center justify-center text-center px-4">
            <Navbar />
            {/* Floating Circles */}
            <FloatingCircle size="120px" top="10%" left="5%" opacity={0.05} delay="0s" reverse />
            <FloatingCircle size="100px" top="60%" left="20%" opacity={0.08} delay="1s" />
            <FloatingCircle size="80px" top="30%" left="80%" opacity={0.06} delay="2s" reverse />
            <FloatingCircle size="60px" top="70%" left="70%" opacity={0.04} delay="3s" />
            <FloatingCircle size="90px" top="40%" left="40%" opacity={0.07} delay="1.5s" reverse />

            {/* Content */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${isVisible ? 'animate-slideUp' : 'opacity-0'}`}>
  Empowering Kids <br />
  <span className="text-lime-300">Through Code</span>
</h1>
            <p className={`mt-4 text-xl max-w-xl ${isVisible ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                Transform your child's curiosity into coding superpowers! Fun, interactive programming
                courses designed for kids aged 8 - 16.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
                <button className={`bg-lime-400 text-black font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-lime-300 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                    Join a Course
                </button>
                <input
                    type="text"
                    className={`rounded-full px-4 py-2 text-black w-96 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-slideInRight delay-100' : 'opacity-0'}`}
                    placeholder="Enter email"
                />
            </div>

            {/* Stats Cards */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 px-4 z-10">
                <div className={`bg-indigo-400 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl w-80 transform transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-zoomIn delay-200' : 'opacity-0'}`}>
                    <div className="text-5xl font-bold text-lime-300">500+</div>
                    <p className="mt-2 text-lg text-white">Happy Students</p>
                </div>
                <div className={`bg-indigo-400 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl w-80 transform transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-zoomIn delay-300' : 'opacity-0'}`}>
                    <div className="text-5xl font-bold text-lime-300">15+</div>
                    <p className="mt-2 text-lg text-white">Expert Instructors</p>
                </div>
                <div className={`bg-indigo-400 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl w-80 transform transition-all duration-300 hover:scale-105 ${isVisible ? 'animate-zoomIn delay-400' : 'opacity-0'}`}>
                    <div className="text-5xl font-bold text-lime-300">4.9⭐</div>
                    <p className="mt-2 text-lg text-white">Parent Rating</p>
                </div>
            </div>

            {/* Animated Arrow */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounceArrow">

                <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default HeroSection;
