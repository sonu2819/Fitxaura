import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Fitxaura. All Rights Reserved.
      </p>
    </footer>
  );
}