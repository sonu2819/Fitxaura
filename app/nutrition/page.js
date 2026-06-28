import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Nutrition Guide | Essential Nutrients for Health | Fitxaura",
  description:
    "Learn about essential nutrition including protein, vitamins, iron, and calcium. Understand nutrients, balanced diet, deficiencies, and healthy eating habits.",
};

export default function Nutrition() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Nutrition Guide (Essential Nutrients for Health)</h1>

        <p>
          Nutrition is the process of providing your body with essential
          nutrients needed for energy, growth, repair, and overall health.
          A balanced diet helps your body function properly and supports a
          healthy lifestyle.
        </p>


        <h2>Why Nutrition is Important</h2>

        <p>
          Good nutrition helps maintain energy levels, supports muscle growth,
          strengthens immunity, and improves overall body functions.
        </p>

        <ul>
          <li>Improves energy and daily performance</li>
          <li>Supports muscle growth and recovery</li>
          <li>Strengthens the immune system</li>
          <li>Helps prevent nutrient deficiencies</li>
          <li>Supports overall health and wellbeing</li>
        </ul>


        <h2>Explore Essential Nutrition Guides</h2>

        <p>
          Learn about important nutrients your body needs. Each guide explains
          benefits, food sources, importance, and common deficiency problems.
        </p>

        <ul>
          <li>
            <Link href="/nutrition/protein">
              <strong>Protein Guide</strong>
              <br />
              Learn why protein is important for muscles, body repair, and
              growth.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/vitamins">
              <strong>Vitamin Guide</strong>
              <br />
              Understand different vitamins, their benefits, and their role in
              keeping your body healthy.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/iron">
              <strong>Iron Guide</strong>
              <br />
              Learn how iron supports healthy blood, energy levels, and helps
              prevent deficiency.
            </Link>
          </li>

          <li>
            <Link href="/nutrition/calcium">
              <strong>Calcium Guide</strong>
              <br />
              Discover how calcium supports strong bones, teeth, and muscle
              function.
            </Link>
          </li>
        </ul>


        <h2>How to Maintain Good Nutrition</h2>

        <p>
          A healthy diet should include a balance of proteins, carbohydrates,
          healthy fats, vitamins, and minerals.
        </p>

        <ul>
          <li>Eat a variety of natural foods</li>
          <li>Include fruits and vegetables daily</li>
          <li>Drink enough water</li>
          <li>Choose healthy protein sources</li>
          <li>Maintain regular meal timing</li>
        </ul>


        <h2>Common Nutrient Deficiencies</h2>

        <ul>
          <li>
            <strong>Iron deficiency</strong> → May cause tiredness and weakness
          </li>

          <li>
            <strong>Vitamin D deficiency</strong> → Can affect bones and immunity
          </li>

          <li>
            <strong>Protein deficiency</strong> → Can affect muscle growth and
            repair
          </li>

          <li>
            <strong>Calcium deficiency</strong> → Can affect bone strength
          </li>
        </ul>


        <h2>Frequently Asked Questions</h2>

        <h3>What is balanced nutrition?</h3>

        <p>
          Balanced nutrition means eating different types of foods that provide
          all essential nutrients required by the body.
        </p>


        <h3>Why is protein important?</h3>

        <p>
          Protein helps build muscles, repair body tissues, and maintain body
          strength.
        </p>


        <h3>What happens if nutrition is poor?</h3>

        <p>
          Poor nutrition can lead to low energy, weakness, nutrient
          deficiencies, and increased health risks.
        </p>

      </div>
    </>
  );
}