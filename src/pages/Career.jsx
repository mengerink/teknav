import React from 'react';

const Career = () => {
    return (
        <div className="career-page">
            <header className="page-header">
                <div className="container">
                    <h1>Careers at Teknav</h1>
                    <p>Join us in shaping the future of sensor technology.</p>
                </div>
            </header>

            <div className="container section">
                <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--color-bg-light)', borderRadius: '8px' }}>
                    <h2>Current Openings</h2>
                    <p style={{ margin: '1rem 0' }}>
                        We are always looking for talented engineers and visionaries.
                        While we don't have specific listings at this moment, we'd love to hear from you.
                    </p>
                    <a href="mailto:careers@teknav.com" className="btn btn-primary">Email Your Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Career;
