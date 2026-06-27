
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Fitxaura</h1>
        <p>Your free health knowledge website</p>
      </div>
    </>
  );
}