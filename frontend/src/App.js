import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Table from "./Table";
import Scan from "./Scan";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Yearbook Distribution</h1>

        <nav className="tabs">
          <NavLink
            to="/scan"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Scan
          </NavLink>

          <NavLink
            to="/table"
            className={({ isActive }) => (isActive ? "tab active" : "tab")}
          >
            Table
          </NavLink>
        </nav>

        <div className="page">
          <Routes>
            <Route path="/" element={<Navigate to="/scan" replace />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;