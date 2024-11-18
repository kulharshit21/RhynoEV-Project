// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ProductDetail from './ProductDetail';
import CompareAll from './CompareAll';
import PreBook from './PreBook';
import About from './About';
import Contact from './Contact';
import Rentals from './Rentals';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy'; // Import RefundPolicy component
import WebsitePolicy from './WebsitePolicy'; // Import WebsitePolicy component
import Career from './Career';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<ProductDetail />} />
          <Route path="/compare-all" element={<CompareAll />} />
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/website-policy" element={<WebsitePolicy />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
