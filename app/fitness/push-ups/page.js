import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Push-ups | Fitxaura",
  description: "Learn how to perform push-ups correctly and their benefits.",
};

export default function PushUps() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Push-ups</h1>

        <p>
          Push-ups are a bodyweight exercise that strengthens the chest,
          shoulders, arms, and core muscles.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Strengthens chest and shoulders</li>
          <li>Builds arm muscles</li>
          <li>Improves core stability</li>
          <li>Requires no equipment</li>
        </ul>

        <h2>Tips</h2>

        <ul>
          <li>Keep your body straight.</li>
          <li>Lower your chest slowly.</li>
          <li>Push back up with control.</li>
          <li>Breathe normally.</li>
        </ul>
      </div>
    </>
  );
}