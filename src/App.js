import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function AppContents() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContents />
    </Router>
  )
}

export default App;
