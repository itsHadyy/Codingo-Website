import React, { useState, useEffect, useRef } from "react";

const ContactEnrollmentSection = () => {
    const [children, setChildren] = useState([{}]); 

    const addChild = () => {
        setChildren([...children, {}]);
    };

    const removeChild = (index) => {
        const newChildren = children.filter((_, i) => i !== index);
        setChildren(newChildren);
    };

    const handleChildChange = (index, event) => {
        const newChildren = [...children];
        newChildren[index][event.target.name] = event.target.value;
        setChildren(newChildren);
    };

    const sectionRef = useRef(null);
    const [sectionVisible, setSectionVisible] = useState(false);

    const contactFormRef = useRef(null);
    const [contactFormVisible, setContactFormVisible] = useState(false);

    const enrollmentFormRef = useRef(null);
    const [enrollmentFormVisible, setEnrollmentFormVisible] = useState(false);

    const childInfoRef = useRef(null);
    const [childInfoVisible, setChildInfoVisible] = useState(false);

    const preferredCoursesRef = useRef(null);
    const [preferredCoursesVisible, setPreferredCoursesVisible] = useState(false);

    useEffect(() => {
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

        const contactFormObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setContactFormVisible(true);
                    contactFormObserver.disconnect();
                }
            },
            observerOptions
        );
        if (contactFormRef.current) {
            contactFormObserver.observe(contactFormRef.current);
        }

        const enrollmentFormObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setEnrollmentFormVisible(true);
                    enrollmentFormObserver.disconnect();
                }
            },
            observerOptions
        );
        if (enrollmentFormRef.current) {
            enrollmentFormObserver.observe(enrollmentFormRef.current);
        }

        const childInfoObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setChildInfoVisible(true);
                    childInfoObserver.disconnect();
                }
            },
            observerOptions
        );
        if (childInfoRef.current) {
            childInfoObserver.observe(childInfoRef.current);
        }

        const preferredCoursesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPreferredCoursesVisible(true);
                    preferredCoursesObserver.disconnect();
                }
            },
            observerOptions
        );
        if (preferredCoursesRef.current) {
            preferredCoursesObserver.observe(preferredCoursesRef.current);
        }

        return () => {
            if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
            if (contactFormRef.current) contactFormObserver.unobserve(contactFormRef.current);
            if (enrollmentFormRef.current) enrollmentFormObserver.unobserve(enrollmentFormRef.current);
            if (childInfoRef.current) childInfoObserver.unobserve(childInfoRef.current);
            if (preferredCoursesRef.current) preferredCoursesObserver.unobserve(preferredCoursesRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} id="contactus" className="py-16 bg-gradient-to-b from-indigo-500 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className={`text-5xl font-bold text-white ${sectionVisible ? 'animate-slideUp' : 'opacity-0'}`}>Start Your Child's <span className="text-lime-300">Coding Journey</span></h2>
                <p className={`mt-4 text-xl max-w-2xl mx-auto text-white text-opacity-90 ${sectionVisible ? 'animate-slideUp delay-100' : 'opacity-0'}`}>
                    Ready to enroll? Fill out the form below and we'll get in touch to discuss the best
                    learning path for your child.
                </p>

                <div className="mt-12 flex flex-col lg:flex-row gap-8 items-start">
                    <div ref={contactFormRef} className={`flex-1 bg-white rounded-lg shadow-lg p-8 text-left text-gray-800 transform transition-all duration-300 hover:scale-103 ${contactFormVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                <span className="text-3xl mr-4">✉️</span>
                                <div>
                                    <p className="font-semibold">Email Us</p>
                                    <p className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">hello@codingo.academy</p>
                                </div>
                            </div>
                            <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                                <span className="text-3xl mr-4">📞</span>
                                <div>
                                    <p className="font-semibold">Call Us</p>
                                    <p className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300">+1 (555) 123-CODE</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-2">Office Hours</h4>
                            <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                            <p className="text-gray-700">Sunday: Closed</p>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-bold mb-4">Why Choose Codingo?</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                                    <span className="text-xl mr-2">✨</span> Small class sizes (max 8 students)
                                </li>
                                <li className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                                    <span className="text-xl mr-2">🎓</span> Certified instructors
                                </li>
                                <li className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                                    <span className="text-xl mr-2">💻</span> Modern learning platform
                                </li>
                                <li className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300">
                                    <span className="text-xl mr-2">✅</span> Proven track record
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div ref={enrollmentFormRef} className={`flex-[2] bg-white rounded-lg shadow-lg p-8 text-left text-gray-800 transform transition-all duration-300 hover:scale-103 ${enrollmentFormVisible ? 'animate-slideInRight delay-100' : 'opacity-0'}`}>
                        <h3 className="text-2xl font-bold mb-6">Enrollment Form</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent's Name <span className="text-red-500">*</span></label>
                                    <input type="text" id="parentName" name="parentName" placeholder="Your full name" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 ${enrollmentFormVisible ? 'animate-zoomIn delay-200' : 'opacity-0'}`} required />
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" id="emailAddress" name="emailAddress" placeholder="your.email@example.com" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 ${enrollmentFormVisible ? 'animate-zoomIn delay-300' : 'opacity-0'}`} required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="+1 (555) 123-4567" className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 ${enrollmentFormVisible ? 'animate-zoomIn delay-400' : 'opacity-0'}`} required />
                            </div>

                            <div ref={childInfoRef} className="border-t border-gray-200 pt-6 mt-6">
                                <div className={`flex justify-between items-center mb-4 ${childInfoVisible ? 'animate-slideUp' : 'opacity-0'}`}>
                                    <h4 className="text-lg font-bold text-gray-800">Child Information <span className="text-red-500">*</span></h4>
                                    <button type="button" onClick={addChild} className="text-indigo-600 font-medium text-sm flex items-center hover:scale-105 transition-transform duration-300">
                                        <span className="mr-1">+</span> Add Another Child
                                    </button>
                                </div>
                                {children.map((child, index) => (
                                    <div key={index} className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 relative ${childInfoVisible ? `animate-zoomIn delay-${index * 100 + 100}` : 'opacity-0'}`}>
                                        {index > 0 && (
                                            <button
                                                type="button"
                                                onClick={() => removeChild(index)}
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors transform hover:scale-110"
                                                title="Remove child"
                                            >
                                                -
                                            </button>
                                        )}
                                        <div>
                                            <label htmlFor={`childName-${index}`} className="block text-sm font-medium text-gray-700">Child's Name</label>
                                            <input type="text" id={`childName-${index}`} name="childName" placeholder="Child's full name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" onChange={(e) => handleChildChange(index, e)} value={child.childName || ''} />
                                        </div>
                                        <div>
                                            <label htmlFor={`childAge-${index}`} className="block text-sm font-medium text-gray-700">Age</label>
                                            <select id={`childAge-${index}`} name="childAge" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white pr-8" onChange={(e) => handleChildChange(index, e)} value={child.childAge || ''}>
                                                <option value="">Select age</option>
                                                {[...Array(9)].map((_, i) => <option key={i} value={i + 8}>{i + 8} years old</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor={`childSchool-${index}`} className="block text-sm font-medium text-gray-700">School Name</label>
                                            <input type="text" id={`childSchool-${index}`} name="childSchool" placeholder="School name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500" onChange={(e) => handleChildChange(index, e)} value={child.childSchool || ''} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div ref={preferredCoursesRef} className="border-t border-gray-200 pt-6 mt-6">
                                <h4 className={`text-lg font-bold text-gray-800 mb-4 ${preferredCoursesVisible ? 'animate-slideUp' : 'opacity-0'}`}>Preferred Courses (select all that interest you)</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className={`flex items-center ${preferredCoursesVisible ? 'animate-zoomIn delay-100' : 'opacity-0'}`}>
                                        <input type="checkbox" id="scratch" name="courses" value="Scratch Programming" className="h-4 w-4 text-indigo-600 border-gray-300 rounded transform transition-transform duration-200 hover:scale-110" />
                                        <label htmlFor="scratch" className="ml-2 text-gray-700">Scratch Programming</label>
                                    </div>
                                    <div className={`flex items-center ${preferredCoursesVisible ? 'animate-zoomIn delay-200' : 'opacity-0'}`}>
                                        <input type="checkbox" id="python" name="courses" value="Python Foundations" className="h-4 w-4 text-indigo-600 border-gray-300 rounded transform transition-transform duration-200 hover:scale-110" />
                                        <label htmlFor="python" className="ml-2 text-gray-700">Python Foundations</label>
                                    </div>
                                    <div className={`flex items-center ${preferredCoursesVisible ? 'animate-zoomIn delay-300' : 'opacity-0'}`}>
                                        <input type="checkbox" id="webdev" name="courses" value="Web Development" className="h-4 w-4 text-indigo-600 border-gray-300 rounded transform transition-transform duration-200 hover:scale-110" />
                                        <label htmlFor="webdev" className="ml-2 text-gray-700">Web Development</label>
                                    </div>
                                    <div className={`flex items-center ${preferredCoursesVisible ? 'animate-zoomIn delay-400' : 'opacity-0'}`}>
                                        <input type="checkbox" id="gamedev" name="courses" value="Game Development" className="h-4 w-4 text-indigo-600 border-gray-300 rounded transform transition-transform duration-200 hover:scale-110" />
                                        <label htmlFor="gamedev" className="ml-2 text-gray-700">Game Development</label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="mt-8 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 w-full flex items-center justify-center">
                                Submit Application <span className="ml-2 text-xl">🚀</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactEnrollmentSection; 