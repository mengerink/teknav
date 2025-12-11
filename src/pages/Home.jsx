import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Cpu, Eye, Zap, Layers } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <h1>Pioneering MEMS & Photonics Technology</h1>
                    <p>
                        Teknav builds advanced sensor chips using cutting-edge semiconductor technology.
                        Empowering autonomous driving, robotics, and aerospace navigation.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/products" className="btn btn-primary">Our Products</Link>
                        <Link to="/contact" className="btn btn-outline">Contact Us</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title">Core Technologies</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <Layers size={48} className="feature-icon" />
                            <h3>Inertial Sensors</h3>
                            <p>High-precision MEMS gyroscopes and accelerometers for navigation and stability.</p>
                        </div>
                        <div className="feature-card">
                            <Eye size={48} className="feature-icon" />
                            <h3>Imaging Sensors</h3>
                            <p>Advanced IR detectors and bolometers for next-generation imaging systems.</p>
                        </div>
                        <div className="feature-card">
                            <Zap size={48} className="feature-icon" />
                            <h3>Integrated Photonics</h3>
                            <p>Optical switches and modulators driving the future of data transmission.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title">Applications</h2>
                    <div className="applications-grid">
                        <div className="app-item">Autonomous Driving</div>
                        <div className="app-item">Robotics</div>
                        <div className="app-item">Drones (FPV)</div>
                        <div className="app-item">Aerospace Navigation</div>
                        <div className="app-item">Naval Systems</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
