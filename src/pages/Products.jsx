import React from 'react';
import './Products.css';

const Products = () => {
    return (
        <div className="products-page">
            <header className="page-header">
                <div className="container">
                    <h1>Our Products</h1>
                    <p>Cutting-edge sensor technology for demanding applications.</p>
                </div>
            </header>

            <div className="container section">

                {/* Category 1 */}
                <div className="product-category">
                    <h2>Inertial Sensors</h2>
                    <p className="category-desc">Precision MEMS, Piezo, and Optical gyroscopes and accelerometers.</p>
                    <div className="product-grid">
                        <div className="product-item">
                            <h3>MEMS Gyroscopes</h3>
                            <p>Micro-Electro-Mechanical Systems gyroscopes offering high performance in a compact footprint.</p>
                        </div>
                        <div className="product-item">
                            <h3>Piezo Gyroscopes</h3>
                            <p>Robust gyroscopes utilizing piezoelectric technology for improved shock resistance.</p>
                        </div>
                        <div className="product-item">
                            <h3>Optical Gyroscopes</h3>
                            <p>Includes Fiber Optic (FOG) and Ring Laser (RLG) gyroscopes for high-end navigation systems.</p>
                        </div>
                        <div className="product-item">
                            <h3>Accelerometers</h3>
                            <p>AC and DC coupled accelerometers for precise motion and vibration tracking.</p>
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                {/* Category 2 */}
                <div className="product-category">
                    <h2>Imaging Sensors</h2>
                    <p className="category-desc">Infrared detectors and imaging arrays for spectral analysis and thermal imaging.</p>
                    <div className="product-grid">
                        <div className="product-item">
                            <h3>IR Photodetectors</h3>
                            <p>Photovoltaic detectors using PbSe, PbS, and HgCdTe materials.</p>
                        </div>
                        <div className="product-item">
                            <h3>Sensor Arrays</h3>
                            <p>Available in single element, 1-D linear arrays, and 2-D focal plane arrays.</p>
                        </div>
                        <div className="product-item">
                            <h3>Bolometers</h3>
                            <p>Uncooled thermal sensors for IR imaging applications.</p>
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                {/* Category 3 */}
                <div className="product-category">
                    <h2>Integrated Photonics</h2>
                    <p className="category-desc">Advanced optical components for signal processing and telecommunications.</p>
                    <div className="product-grid">
                        <div className="product-item">
                            <h3>Optical Switches</h3>
                            <p>High-speed switching solutions for optical networks.</p>
                        </div>
                        <div className="product-item">
                            <h3>Optical Modulators</h3>
                            <p>Efficient modulation devices for fiber optic communications.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;
