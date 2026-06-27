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
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/disclaimer">Medical Disclaimer</a>
        </div>
      )}
    </nav>
  );
}