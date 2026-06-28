

export const metadata = {
  title: "Protein | Fitxaura",
  description: "Learn about protein, its benefits, and the best food sources.",
};

export default function Protein() {
  return (
    <>
     
      <div className="container">
        <h1>Protein</h1>

        <p>
          Protein is an essential nutrient that helps build muscles, repair body
          tissues, and support healthy growth.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>Builds muscles</li>
          <li>Repairs body tissues</li>
          <li>Supports immunity</li>
          <li>Provides energy</li>
        </ul>

        <h2>Good Sources</h2>

        <ul>
          <li>Eggs</li>
          <li>Chicken</li>
          <li>Fish</li>
          <li>Milk</li>
          <li>Beans and Lentils</li>
          <li>Nuts</li>
        </ul>
      </div>
    </>
  );
}