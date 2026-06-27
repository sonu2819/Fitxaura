import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Asthma Symptoms & Prevention | Fitxaura",
  description:
    "Learn about asthma symptoms, causes, prevention, and breathing health.",
};

export default function Asthma() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Asthma</h1>

        <p>
          Asthma is a chronic disease that causes inflammation and narrowing of
          the airways, making breathing difficult.
        </p>

        <h2>Common Symptoms</h2>
        <ul>
          <li>Wheezing</li>
          <li>Shortness of breath</li>
          <li>Chest tightness</li>
          <li>Persistent cough</li>
        </ul>

        <h2>Causes</h2>
        <ul>
          <li>Allergies</li>
          <li>Air pollution</li>
          <li>Respiratory infections</li>
          <li>Exercise</li>
        </ul>

        <h2>Prevention</h2>
        <ul>
          <li>Avoid triggers</li>
          <li>Take prescribed medicines</li>
          <li>Keep indoor air clean</li>
          <li>Avoid smoking</li>
        </ul>
      </div>
    </>
  );
}