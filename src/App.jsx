import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Opportunities from "./pages/Opportunities";
import StudyTools from "./pages/StudyTools";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/study-tools" element={<StudyTools />} />
      </Routes>
    </Router>
  );
}

export default App;
