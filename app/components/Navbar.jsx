"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  // Auto close when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <Link href="/" className="logo" onClick={closeMenu}>
        <h2>Fitxaura</h2>
      </Link>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {open && (
        <div className="links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link href="/faq" onClick={closeMenu}>FAQ</Link>
          <Link href="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
          <Link href="/disclaimer" onClick={closeMenu}>Medical Disclaimer</Link>
        </div>
      )}
    </nav>
  );
}