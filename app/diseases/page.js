import Navbar from "../components/Navbar";

export default function Diseases() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Diseases</h1>

        <ul>
          <li>Diabetes</li>
          <li>Blood Pressure</li>
          <li>Asthma</li>
          <li>Dengue</li>
        </ul>
      </div>
    </>
  );
}