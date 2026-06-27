import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Pull-ups | Fitxaura",
  description: "Learn the correct way to perform pull-ups and their benefits.",
};

export default function PullUps() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Pull-ups</h1>

        <p>
          Pull-ups are an effective upper-body exercise that develops the back,
          shoulders, and arm muscles.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Builds upper-body strength</li>
          <li>Improves grip strength</li>
          <li>Strengthens the back</li>
          <li>Enhances posture</li>
        </ul>

        <h2>Tips</h2>

        <ul>
          <li>Grip the bar firmly.</li>
          <li>Pull until your chin passes the bar.</li>
          <li>Lower yourself slowly.</li>
          <li>Avoid swinging.</li>
        </ul>
      </div>
    </>
  );
}