import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Nutrition | Fitxaura",
  description:
    "Learn about essential nutrients including protein, vitamins, iron, and calcium.",
};

export default function Nutrition() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Nutrition</h1>

        <p>
          Good nutrition helps your body stay healthy, energetic, and protected
          from diseases. Learn about important nutrients your body needs every day.
        </p>

        <ul>
          <li>
            <Link href="/nutrition/protein">
              <strong> Protein</strong>
              <br />
              Learn why protein is important for muscles and body repair.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/vitamins">
              <strong> Vitamins</strong>
              <br />
              Discover different vitamins and their health benefits.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/iron">
              <strong> Iron</strong>
              <br />
              Understand the importance of iron for healthy blood.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/calcium">
              <strong> Calcium</strong>
              <br />
              Learn how calcium keeps your bones and teeth strong.
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}