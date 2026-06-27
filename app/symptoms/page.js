import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Symptoms Guide | Fitxaura Health Library",
  description:
    "Explore common health symptoms like headache, fever, cough, cold, and back pain. Learn causes and remedies easily on Fitxaura.",
};

export default function Symptoms() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Symptoms</h1>

        <p>
          Learn about common symptoms, their causes, and natural ways to manage them.
        </p>

        <ul>
          <li><Link href="/symptoms/headache">Headache</Link></li>
          <li><Link href="/symptoms/fever">Fever</Link></li>
          <li><Link href="/symptoms/cough">Cough</Link></li>
          <li><Link href="/symptoms/cold">Cold</Link></li>
          <li><Link href="/symptoms/back-pain">Back Pain</Link></li>
        </ul>
      </div>
    </>
  );
}