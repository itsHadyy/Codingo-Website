import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <img src="/codingo.jpeg" width={'50px'}/>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {["Home", "Courses", "Feedbacks", "Vision", "Mission", "Pricing", "Contact Us"].map(
                        (item) => {
                            const id = item.toLowerCase().replace(/\s+/g, "");
                            return (
                                <a
                                    key={item}
                                    onClick={() => handleScroll(id)}
                                    className={`cursor-pointer font-medium transition-all duration-300 transform hover:scale-110 ${scrolled ? "text-gray-800 hover:text-indigo-600" : "text-white hover:text-lime-300"}`}
                                >
                                    {item}
                                </a>
                            );
                        }
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
