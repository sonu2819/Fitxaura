import Navbar from "../../components/Navbar";

export const metadata = {
  title: "Vitamins | Fitxaura",
  description: "Learn about vitamins and their role in maintaining good health.",
};

export default function Vitamins() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Vitamins</h1>

        <p>
          Vitamins are essential nutrients that help your body grow, fight
          infections, and function properly.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Support immunity</li>
          <li>Promote healthy skin</li>
          <li>Improve vision</li>
          <li>Support brain function</li>
        </ul>

        <h2>Food Sources</h2>

        <ul>
          <li>Fruits</li>
          <li>Vegetables</li>
          <li>Dairy products</li>
          <li>Whole grains</li>
          <li>Nuts</li>
        </ul>
      </div>
    </>
  );
}