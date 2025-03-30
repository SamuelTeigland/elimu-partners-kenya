import React from 'react'
import { Navbar, Footer } from './components/components.js'
import { Home, About, Contact, Newsletter } from './pages/pages.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
        <Footer />
    </Router>
  );
}