import React from 'react';

const About = () => {
    return (
        <div className="about-page">
            <header className="page-header">
                <div className="container">
                    <h1>About Us</h1>
                </div>
            </header>

            <div className="container section">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                        Teknav is a leader in semiconductor technology, specifically designing and manufacturing high-performance MEMS (Micro-Electro-Mechanical Systems) sensor chips.
                    </p>

                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Mission</h2>
                    <p style={{ marginBottom: '2rem' }}>
                        To provide precise, reliable, and innovative sensor solutions that power the autonomous systems of tomorrow.
                        From self-driving cars to aerospace navigation, our chips are the sensory organs of advanced machinery.
                    </p>

                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Technology</h2>
                    <p>
                        We specialize in Inertial Sensors, Infrared Imaging, and Integrated Photonics.
                        Our fabrication processes allow us to create sensors that are not only highly accurate but also scalable for mass production.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
