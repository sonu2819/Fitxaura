import Navbar from "../components/Navbar";

export default function Fitness() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Fitness</h1>

        <ul>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Pull-ups</li>
          <li>Running</li>
        </ul>
      </div>
    </>
  );
}