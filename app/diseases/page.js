import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Diseases | Fitxaura",
  description:
    "Learn about common diseases including diabetes, high blood pressure, asthma, and dengue.",
};

export default function Diseases() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Diseases</h1>

        <p>
          Learn about common diseases, their symptoms, causes, prevention, and
          healthy lifestyle tips.
        </p>

        <ul>
          <li>
            <Link href="/diseases/diabetes">
              <strong> Diabetes</strong>
              <br />
              Learn about diabetes symptoms, causes and prevention.
            </Link>
          </li>

          <li>
            <Link href="/diseases/blood-pressure">
              <strong> High Blood Pressure</strong>
              <br />
              Understand hypertension, its symptoms and prevention.
            </Link>
          </li>

          <li>
            <Link href="/diseases/asthma">
              <strong> Asthma</strong>
              <br />
              Learn about asthma, breathing problems and treatment.
            </Link>
          </li>

          <li>
            <Link href="/diseases/dengue">
              <strong> Dengue</strong>
              <br />
              Learn about dengue symptoms, mosquito prevention and care.
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}