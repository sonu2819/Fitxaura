"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2>Fitxaura</h2>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="links">
          <a href="/">Home</a>
          <a href="/symptoms">Symptoms</a>
          <a href="/diseases">Diseases</a>
          <a href="/nutrition">Nutrition</a>
          <a href="/fitness">Fitness</a>
        </div>
      )}
    </nav>
  );
}