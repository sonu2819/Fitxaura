import Navbar from "../../components/Navbar";
export const metadata = {
  title: "Headache Causes, Symptoms & Natural Remedies | Fitxaura",
  description:
    "Learn about headache causes, symptoms, types, and simple natural remedies. Fitxaura provides easy health guidance for daily life.",
};

export default function HeadachePage() {
  return (<>
    <Navbar/>
    <div className="container">
      <h1>Headache (Sir Dard)</h1>

      <p>
        A headache is a very common health problem that causes pain in the head,
        scalp, or neck. It can be mild or severe and may last from minutes to hours.
      </p>

      <h2>Common Causes</h2>
      <ul>
        <li>Stress and anxiety</li>
        <li>Lack of sleep</li>
        <li>Dehydration</li>
        <li>Eye strain</li>
        <li>Skipping meals</li>
      </ul>

      <h2>Symptoms</h2>
      <ul>
        <li>Throbbing pain in head</li>
        <li>Sensitivity to light</li>
        <li>Nausea in severe cases</li>
        <li>Pressure around forehead or temples</li>
      </ul>

      <h2>Natural Remedies</h2>
      <ul>
        <li>Drink enough water</li>
        <li>Take proper rest</li>
        <li>Massage your temples gently</li>
        <li>Avoid screen time for some time</li>
        <li>Try deep breathing exercises</li>
      </ul>

      <h2>When to See a Doctor</h2>
      <p>
        If headache is severe, frequent, or comes with vision problems, consult a doctor immediately.
      </p>
    </div>
    </>
  );
}