import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Squats | Fitxaura",
  description: "Learn proper squat technique and its health benefits.",
};

export default function Squats() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Squats</h1>

        <p>
          Squats are one of the best lower-body exercises for building leg
          strength and improving balance.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Strengthens legs</li>
          <li>Builds glute muscles</li>
          <li>Improves balance</li>
          <li>Supports healthy joints</li>
        </ul>

        <h2>Tips</h2>

        <ul>
          <li>Keep your back straight.</li>
          <li>Lower until thighs are parallel.</li>
          <li>Keep your knees aligned.</li>
          <li>Push through your heels.</li>
        </ul>
      </div>
    </>
  );
}