"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <h2>Fitxaura</h2>
      </Link>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Medical Disclaimer</Link>
        </div>
      )}
    </nav>
  );
}