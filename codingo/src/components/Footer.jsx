import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div className="md:col-span-1 flex flex-col items-start">
                    <div className="flex items-center mb-4">
                        <img src="codingo.jpeg" alt="Codingo Logo" className="h-12 w-12 mr-3 transform transition-transform duration-300 hover:scale-105" />
                        <span className="text-2xl font-bold">Codingo</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering the next generation through fun, interactive
                        coding education. We make programming accessible and
                        enjoyable for kids aged 8-16.
                    </p>
                    <div className="mt-4">
                        <div className="flex items-center text-gray-300 hover:text-lime-300 transition-colors duration-300 mb-2">
                            <span className="mr-2">✉️</span>
                            <span>hello@codingo.academy</span>
                        </div>
                        <div className="flex items-center text-gray-300 hover:text-lime-300 transition-colors duration-300">
                            <span className="mr-2">📞</span>
                            <span>+1 (555) 123-CODE</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4 text-lime-300">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors duration-300">Courses</a></li>
                        <li><a href="#feedback" className="text-gray-400 hover:text-white transition-colors duration-300">Feedbacks</a></li>
                        <li><a href="#vision" className="text-gray-400 hover:text-white transition-colors duration-300">Vision</a></li>
                        <li><a href="#mission" className="text-gray-400 hover:text-white transition-colors duration-300">Mission</a></li>
                        <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </div>

                {/* Our Courses */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4 text-lime-300">Our Courses</h3>
                    <ul className="space-y-2">
                        <li><a href="#scratch" className="text-gray-400 hover:text-white transition-colors duration-300">Scratch Programming</a></li>
                        <li><a href="#python" className="text-gray-400 hover:text-white transition-colors duration-300">Python Foundations</a></li>
                        <li><a href="#webdev" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
                        <li><a href="#gamedev" className="text-gray-400 hover:text-white transition-colors duration-300">Game Development</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="md:col-span-1">
                    <h3 className="text-xl font-semibold mb-4 text-lime-300">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-lime-500 transition-colors duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full">
                            f
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-lime-500 transition-colors duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full">
                            t
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-lime-500 transition-colors duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full">
                            in
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-lime-500 transition-colors duration-300 text-white w-10 h-10 flex items-center justify-center rounded-full">
                            yt
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright and Policy Links */}
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                <p>&copy; 2024 Codingo Academy. All rights reserved.</p>
                <div className="mt-2 space-x-4">
                    <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                    <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                    <a href="#cookie" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
                </div>
                <p className="mt-4">Made with <span className="text-lime-300">💚</span> for the next generation of coders</p>
            </div>
        </footer>
    );
};

export default Footer; 