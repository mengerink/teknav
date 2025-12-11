import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Teknav</h3>
                    <p>Advancing MEMS technology for a smarter future.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@teknav.com</p> {/* Placeholder */}
                    <p>Phone: +1 123 456 7890</p> {/* Placeholder */}
                </div>
                <div className="footer-section">
                    <h4>Address</h4>
                    <p>123 Semiconductor Way</p>
                    <p>Silicon Valley, CA</p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Teknav. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
