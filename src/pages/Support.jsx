import React from 'react';

const Support = () => {
    return (
        <div className="support-page">
            <header className="page-header">
                <div className="container">
                    <h1>Support Center</h1>
                    <p>We are here to help with your technical inquiries.</p>
                </div>
            </header>

            <div className="container section">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    <div className="support-card" style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                        <h3>Technical Documentation</h3>
                        <p style={{ marginBottom: '1rem' }}>Access datasheets, application notes, and integration guides for our products.</p>
                        <button className="btn btn-outline">Browse Docs</button>
                    </div>

                    <div className="support-card" style={{ padding: '2rem', border: '1px solid var(--color-border)', borderRadius: '8px' }}>
                        <h3>Contact Support</h3>
                        <p style={{ marginBottom: '1rem' }}>Need specific help? Reach out to our engineering support team directly.</p>
                        <a href="mailto:support@teknav.com" className="btn btn-primary">Contact Support</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Support;
