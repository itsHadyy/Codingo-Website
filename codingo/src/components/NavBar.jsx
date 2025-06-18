import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Close menu on navigation
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <img src="/codingo.jpeg" width={'50px'} alt="Codingo Logo"/>

                {/* Desktop Navigation Links */}
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

                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden flex items-center text-2xl focus:outline-none"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars className={scrolled ? "text-gray-800" : "text-white"} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-[9999] flex" onClick={() => setMenuOpen(false)}>
                    <div className="ml-auto w-3/4 max-w-xs h-full bg-white shadow-lg flex flex-col py-8 px-6 animate-slideInRight" onClick={e => e.stopPropagation()}>
                        <button className="self-end mb-8 text-2xl text-gray-700" aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</button>
                        {["Home", "Courses", "Feedbacks", "Vision", "Mission", "Pricing", "Contact Us"].map(
                            (item) => {
                                const id = item.toLowerCase().replace(/\s+/g, "");
                                return (
                                    <a
                                        key={item}
                                        onClick={() => handleScroll(id)}
                                        className="block py-3 px-2 text-lg font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                );
                            }
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
