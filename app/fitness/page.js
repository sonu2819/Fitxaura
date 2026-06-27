import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fitness | Fitxaura",
  description:
    "Explore fitness exercises including push-ups, squats, pull-ups, and running.",
};

export default function Fitness() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Fitness</h1>

        <p>
          Improve your health with simple exercises that help build strength,
          endurance, and overall fitness.
        </p>

        <ul>
          <li>
            <Link href="/fitness/push-ups">
              <strong>Push-ups</strong>
              <br />
              Build upper body strength and improve endurance.
            </Link>
          </li>

          <li>
            <Link href="/fitness/squats">
              <strong> Squats</strong>
              <br />
              Strengthen your legs and improve balance.
            </Link>
          </li>

          <li>
            <Link href="/fitness/pull-ups">
              <strong> Pull-ups</strong>
              <br />
              Develop back, shoulder, and arm muscles.
            </Link>
          </li>

          <li>
            <Link href="/fitness/running">
              <strong>Running</strong>
              <br />
              Boost heart health and overall stamina.
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}