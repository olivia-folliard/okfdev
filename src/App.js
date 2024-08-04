import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from './components/Navbar';
import React from "react";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
