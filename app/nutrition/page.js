import Navbar from "../components/Navbar";

export default function Nutrition() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Nutrition</h1>

        <ul>
          <li>Protein</li>
          <li>Vitamins</li>
          <li>Iron</li>
          <li>Calcium</li>
        </ul>
      </div>
    </>
  );
}