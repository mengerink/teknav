import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products & Services' },
        { path: '/career', label: 'Career' },
        { path: '/about', label: 'About Us' },
        { path: '/support', label: 'Support' },
    ];

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <NavLink to="/" className="navbar-logo">
                    <img src="/logo.png" alt="Teknav Logo" />
                    <span className="logo-text">Teknav</span>
                </NavLink>

                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
