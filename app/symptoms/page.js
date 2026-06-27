import Navbar from "../components/Navbar";

export default function Symptoms() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Symptoms</h1>

        <ul>
          <li>Headache</li>
          <li>Fever</li>
          <li>Cough</li>
          <li>Cold</li>
          <li>Back Pain</li>
        </ul>
      </div>
    </>
  );
}