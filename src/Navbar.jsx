import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1>Student Sage AI</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/opportunities">Opportunities</Link>
        </li>
        <li>
          <Link to="/study-tools">Study Tools</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
