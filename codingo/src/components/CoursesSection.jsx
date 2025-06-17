import React, { useState, useEffect, useRef } from "react";

const CoursesSection = () => {
    const courseRefs = useRef([]);
    const [coursesVisible, setCoursesVisible] = useState({});

    const learnSectionRef = useRef(null);
    const [learnSectionVisible, setLearnSectionVisible] = useState(false);

    const sectionRef = useRef(null);
    const [sectionVisible, setSectionVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const courseObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCoursesVisible(prev => ({
                        ...prev,
                        [entry.target.dataset.index]: true
                    }));
                    // courseObserver.unobserve(entry.target); // Keep observing for potential re-animation if user scrolls back up
                }
            });
        }, observerOptions);

        courseRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.dataset.index = index;
                courseObserver.observe(ref);
            }
        });

        const learnSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setLearnSectionVisible(true);
                    learnSectionObserver.disconnect();
                }
            });
        }, observerOptions);

        if (learnSectionRef.current) {
            learnSectionObserver.observe(learnSectionRef.current);
        }

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true);
                    sectionObserver.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            courseRefs.current.forEach(ref => {
                if (ref) courseObserver.unobserve(ref);
            });
            if (learnSectionRef.current) {
                learnSectionObserver.unobserve(learnSectionRef.current);
            }
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} id="courses" className="py-16 bg-white text-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-5xl font-bold text-gray-700 ${sectionVisible ? 'animate-slideUp' : 'opacity-0'}`}>Our <span className="text-indigo-600">Courses</span></h2>
                <p className={`mt-4 text-xl max-w-2xl mx-auto text-gray-600 ${sectionVisible ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                    Choose the perfect coding journey for your child. Our courses are designed to be fun,
                    engaging, and age-appropriate while building real programming skills.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Course Card 1: Scratch Programming */}
                    <div
                        ref={el => courseRefs.current[0] = el}
                        className={`rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-orange-300 to-yellow-300 transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${coursesVisible[0] ? 'animate-slideUp' : 'opacity-0'}`}>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-4xl">
                            🎨
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Scratch Programming</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 8-11</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">8 weeks</span>
                        </div>
                        <p className="mt-4 text-gray-700 text-sm">
                            Visual programming with drag-and-drop blocks. Perfect for beginners to learn
                            coding logic through fun games and animations.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-indigo-600 font-semibold group transition-all duration-300 hover:translate-x-1 hover:text-indigo-800">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 2: Python Foundations */}
                    <div
                        ref={el => courseRefs.current[1] = el}
                        className={`rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-indigo-400 to-blue-400 transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${coursesVisible[1] ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-4xl">
                            🐍
                        </div>
                        <h3 className="text-xl font-bold text-white">Python Foundations</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 12-14</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">12 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Text-based programming with Python. Learn real coding syntax while building
                            games, apps, and solving fun challenges.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group transition-all duration-300 hover:translate-x-1 hover:text-gray-200">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 3: Web Development */}
                    <div
                        ref={el => courseRefs.current[2] = el}
                        className={`rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-green-300 to-teal-300 transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${coursesVisible[2] ? 'animate-slideUp delay-200' : 'opacity-0'}`}>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-4xl">
                            🌐
                        </div>
                        <h3 className="text-xl font-bold text-white">Web Development</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 13-16</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">10 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Build your own websites with HTML, CSS, and JavaScript. Create interactive web
                            pages and learn modern web technologies.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group transition-all duration-300 hover:translate-x-1 hover:text-gray-200">
                            Learn More →
                        </a>
                    </div>

                    {/* Course Card 4: Game Development */}
                    <div
                        ref={el => courseRefs.current[3] = el}
                        className={`rounded-2xl p-6 shadow-lg text-left bg-gradient-to-br from-purple-400 to-pink-400 transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${coursesVisible[3] ? 'animate-slideUp delay-300' : 'opacity-0'}`}>
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-4xl">
                            🎮
                        </div>
                        <h3 className="text-xl font-bold text-white">Game Development</h3>
                        <div className="mt-2 flex justify-between items-center text-sm">
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">Ages 14-16</span>
                            <span className="bg-white text-gray-600 rounded-full px-3 py-1">14 weeks</span>
                        </div>
                        <p className="mt-4 text-white text-opacity-90 text-sm">
                            Create your own video games! Learn game design principles and programming while
                            building 2D games that you can share with friends.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center text-white font-semibold group transition-all duration-300 hover:translate-x-1 hover:text-gray-200">
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* What Your Child Will Learn Section */}
                <div
                    ref={learnSectionRef}
                    className={`mt-20 ${learnSectionVisible ? 'animate-slideUp' : 'opacity-0'}`}>
                    <h2 className={`text-3xl font-bold text-gray-700 ${learnSectionVisible ? 'animate-slideUp' : 'opacity-0'}`}>What Your Child Will Learn</h2>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className={`flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 ${learnSectionVisible ? 'animate-zoomIn delay-100' : 'opacity-0'}`}>
                            <span className="child-learn text-4xl">🧠</span>
                            <p className="text-lg font-medium text-gray-700">Problem Solving</p>
                        </div>
                        <div className={`flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 ${learnSectionVisible ? 'animate-zoomIn delay-200' : 'opacity-0'}`}>
                            <span className="child-learn text-4xl">🎯</span>
                            <p className="text-lg font-medium text-gray-700">Logical Thinking</p>
                        </div>
                        <div className={`flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 ${learnSectionVisible ? 'animate-zoomIn delay-300' : 'opacity-0'}`}>
                            <span className="child-learn text-4xl">🤝</span>
                            <p className="text-lg font-medium text-gray-700">Collaboration</p>
                        </div>
                        <div className={`flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 ${learnSectionVisible ? 'animate-zoomIn delay-400' : 'opacity-0'}`}>
                            <span className="child-learn text-4xl">💡</span>
                            <p className="text-lg font-medium text-gray-700">Creativity</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection; 