import React, { useState, useEffect, useRef } from "react";

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            avatar: '&#128100;', 
            name: "Michael Chen",
            role: "Parent of Alex (13)",
            rating: 5,
            text: "\"Alex started with zero coding experience and now he's building his own websites. The Python course really opened his eyes to possibilities.\"",
        },
        {
            id: 2,
            avatar: '&#127891;', 
            name: "Lisa Rodriguez",
            role: "Parent of Maya & Diego",
            rating: 5,
            text: "\"Both my kids are taking different courses at Codingo. The age-appropriate content and engaging teaching style keep them excited about learning.\"",
        },
        {
            id: 3,
            avatar: '&#128103;',
            name: "Emma (12)",
            role: "Student",
            rating: 5,
            text: "\"I love coding at Codingo! I made a game where you catch falling stars and my friends want to play it all the time. Can't wait for the next class!\"",
        },
        {
            id: 2,
            avatar: '&#127891;', 
            name: "Lisa Rodriguez",
            role: "Parent of Maya & Diego",
            rating: 5,
            text: "\"Both my kids are taking different courses at Codingo. The age-appropriate content and engaging teaching style keep them excited about learning.\"",
        },
        {
            id: 3,
            avatar: '&#128103;',
            name: "Emma (12)",
            role: "Student",
            rating: 5,
            text: "\"I love coding at Codingo! I made a game where you catch falling stars and my friends want to play it all the time. Can't wait for the next class!\"",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesPerView = 3; 

    const sectionRef = useRef(null);
    const [sectionVisible, setSectionVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / slidesPerView));
        }, 5000); 

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const sectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSectionVisible(true);
                    sectionObserver.disconnect();
                }
            },
            observerOptions
        );

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            clearInterval(interval);
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, [testimonials.length, slidesPerView]);

    return (
        <section ref={sectionRef} id="feedbacks" className="py-16 bg-gradient-to-b from-indigo-500 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-5xl font-bold text-white ${sectionVisible ? 'animate-slideUp' : 'opacity-0'}`}>What Families Say</h2>
                <p className={`mt-4 text-xl max-w-2xl mx-auto text-white text-opacity-90 ${sectionVisible ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                    Hear from parents and students who have experienced the magic of learning to code
                    with Codingo.
                </p>

                <div className="mt-12 relative w-full overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className={`flex-shrink-0 w-1/3 px-4 ${sectionVisible ? `animate-zoomIn delay-${index * 100 + 200}` : 'opacity-0'}`}>
                                <div className="bg-white rounded-lg p-8 shadow-lg text-gray-800 text-left h-full transform transition-all duration-300 hover:scale-103">
                                    <div className="flex items-center mb-4">
                                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-4xl mr-4">
                                            <span dangerouslySetInnerHTML={{ __html: testimonial.avatar }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex text-yellow-500 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i}>&#9733;</span>
                                        ))}
                                    </div>
                                    <p className="text-gray-700">{testimonial.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-gray-400 hover:bg-lime-300 hover:scale-110"}
                            `}
                            onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection; 