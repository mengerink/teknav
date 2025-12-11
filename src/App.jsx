import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Career from './pages/Career';
import About from './pages/About';
import Support from './pages/Support';
import './App.css'; // This is empty but good to keep if needed later

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="career" element={<Career />} />
        <Route path="about" element={<About />} />
        <Route path="support" element={<Support />} />
        {/* Optional: Add a 404 page or redirect */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
