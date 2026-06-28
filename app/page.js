import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Fitxaura | Health, Fitness, Nutrition, Symptoms & Diseases Guide",
  description:
    "Fitxaura is a free health information website. Learn about symptoms, diseases, nutrition, and fitness with simple beginner-friendly guides and tips.",
};

export default function Home() {
  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">

        <span className="hero-badge">
          Trusted Health Information
        </span>

        <h1>
          Your Simple Guide to Better Health
        </h1>

        <p>
          Explore beginner-friendly guides on symptoms, diseases, nutrition,
          and fitness. Fitxaura makes health information easy to understand,
          helping you make informed choices for a healthier lifestyle.
        </p>

       

      </section>

      {/* HEALTH TOPICS */}

      <section>

        <h2 id="explore" className="section-title">
          Explore Health Topics
        </h2>

        <div className="home-grid">

          <Link href="/symptoms" className="home-card">
            <Image
              src="/images/symptoms.png"
              alt="Common symptoms guide"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Symptoms Guide</h3>

              <p>
                Learn about common symptoms like fever, cough, headache,
                fatigue, and understand their possible causes and simple
                remedies.
              </p>
            </div>
          </Link>

          <Link href="/diseases" className="home-card">
            <Image
              src="/images/diseases.png"
              alt="Common diseases guide"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Diseases Guide</h3>

              <p>
                Discover common diseases including diabetes, asthma, dengue,
                and high blood pressure with prevention and awareness tips.
              </p>
            </div>
          </Link>

          <Link href="/nutrition" className="home-card">
            <Image
              src="/images/nutrition.png"
              alt="Nutrition guide"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Nutrition Guide</h3>

              <p>
                Learn about proteins, vitamins, calcium, iron, and healthy
                eating habits to support your overall well-being.
              </p>
            </div>
          </Link>

          <Link href="/fitness" className="home-card">
            <Image
              src="/images/fitness.png"
              alt="Fitness guide"
              width={900}
              height={500}
              className="card-image"
            />

            <div className="card-content">
              <h3>Fitness Guide</h3>

              <p>
                Improve your fitness with simple workouts like push-ups,
                squats, running, and other beginner-friendly exercises.
              </p>
            </div>
          </Link>

        </div>

      </section>

      {/* WHY FITXAURA */}

      <section className="seo-section">

        <h2>Why Choose Fitxaura?</h2>

        <p>
          Fitxaura is designed to provide clear, reliable, and beginner-friendly
          health information. Whether you're learning about symptoms, diseases,
          nutrition, or fitness, our goal is to make health knowledge simple,
          practical, and accessible for everyone.
        </p>

        <ul>
          <li>✔ Easy-to-understand health guides</li>
          <li>✔ Beginner-friendly fitness and nutrition tips</li>
          <li>✔ Reliable educational health content</li>
          <li>✔ Completely free to access</li>
        </ul>

      </section>

    </div>
  );
}