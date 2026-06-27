import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Dengue Symptoms, Causes & Prevention | Fitxaura",
  description:
    "Learn about dengue symptoms, causes, prevention, and mosquito protection.",
};

export default function Dengue() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dengue</h1>

        <p>
          Dengue is a viral infection spread by infected Aedes mosquitoes. It is
          common in tropical regions, especially during the rainy season.
        </p>

        <h2>Common Symptoms</h2>
        <ul>
          <li>High fever</li>
          <li>Severe headache</li>
          <li>Muscle and joint pain</li>
          <li>Pain behind the eyes</li>
          <li>Skin rash</li>
          <li>Nausea and vomiting</li>
        </ul>

        <h2>Causes</h2>
        <ul>
          <li>Mosquito bites</li>
          <li>Standing water</li>
          <li>Poor mosquito control</li>
        </ul>

        <h2>Prevention</h2>
        <ul>
          <li>Use mosquito repellents</li>
          <li>Wear full-sleeved clothing</li>
          <li>Remove standing water</li>
          <li>Sleep under mosquito nets</li>
        </ul>
      </div>
    </>
  );
}