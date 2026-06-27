import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container">

        {/* Hero */}
        <div className="hero">
  <h1>Welcome to Fitxaura</h1>

  <p>
    Trusted health information made simple. Explore symptoms, diseases,
    nutrition and fitness with easy-to-understand guides.
  </p>
</div>

        <h2 className="section-title">Explore Health</h2>

        <div className="home-grid">

          <Link href="/symptoms" className="home-card">
            <Image
              src="/images/symptoms.png"
              alt="Symptoms"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Symptoms</h3>
              <p>Understand common symptoms and their causes.</p>
            </div>
          </Link>

          <Link href="/diseases" className="home-card">
            <Image
              src="/images/diseases.png"
              alt="Diseases"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Diseases</h3>
              <p>Learn about diseases, prevention and treatment.</p>
            </div>
          </Link>

          <Link href="/nutrition" className="home-card">
            <Image
              src="/images/nutrition.png"
              alt="Nutrition"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Nutrition</h3>
              <p>Healthy foods, diet plans and nutrition guides.</p>
            </div>
          </Link>

          <Link href="/fitness" className="home-card">
            <Image
              src="/images/fitness.png"
              alt="Fitness"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Fitness</h3>
              <p>Workout routines and healthy lifestyle tips.</p>
            </div>
          </Link>

        </div>

      </div>
      <Footer/>
    </>
  );
}