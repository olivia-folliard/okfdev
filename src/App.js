import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from "react";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function AppContents() {
  const location = useLocation();
  const hidePath = ['/'];
  const hide = hidePath.includes(location.pathname);

  return (
    <div>
      {!hide  && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
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
