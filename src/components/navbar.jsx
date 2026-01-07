import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
            <ul className="flex gap-6 p-4 max-w-6xl mx-auto">
                <li>
                    <Link to="/" className="text-white hover:text-purple-200 font-semibold transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:text-purple-200 font-semibold transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white hover:text-purple-200 font-semibold transition-colors">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;