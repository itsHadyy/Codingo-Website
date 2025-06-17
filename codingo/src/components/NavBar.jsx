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

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">Logo</div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {["Home", "Courses", "Feedback", "About Us", "Pricing", "Contact Us"].map(
                        (item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                                className="text-white font-medium transition-all duration-200 hover:text-[#a8e6a3] hover:underline underline-offset-4"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
