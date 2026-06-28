import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Fitxaura | Health, Fitness, Nutrition, Symptoms & Diseases Guide",
  description:
    "Fitxaura is a free health information website. Learn about symptoms, diseases, nutrition, and fitness with simple beginner-friendly guides and tips.",
};

export default function Home() {
  return (
    <>
     

      <div className="container">

        {/* HERO SEO IMPROVED */}
        <div className="hero">
          <h1>Fitxaura – Simple Health, Fitness & Nutrition Guide</h1>

          <p>
            Fitxaura is a free health knowledge platform where you can learn about
            symptoms, diseases, nutrition, and fitness in a simple and easy way.
            Our goal is to make medical and health information easy for everyone
            to understand.
          </p>
        </div>

        {/* INTRO SEO TEXT */}
        <div className="intro">
          <h2>Learn About Health in Simple Language</h2>

          <p>
            Whether you want to understand common diseases, improve your fitness,
            learn about nutrition, or identify symptoms, Fitxaura provides clear
            and beginner-friendly guides.
          </p>
        </div>

        <h2 className="section-title">Explore Health Topics</h2>

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
                Learn about common symptoms like fever, cough, headache and
                their causes and remedies.
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
                Understand common diseases like diabetes, asthma and high blood
                pressure with prevention tips.
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
                Learn about protein, vitamins, iron and calcium for better
                health and energy.
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
                Simple home workouts like push-ups, squats, and running to
                build strength and stamina.
              </p>
            </div>
          </Link>

        </div>

        {/* SEO TEXT BLOCK */}
        <div className="seo-section">
          <h2>Why Use Fitxaura?</h2>

          <ul>
            <li>Simple and easy health explanations</li>
            <li>Beginner-friendly fitness and nutrition guides</li>
            <li>Free health information in one place</li>
            <li>Structured topics for quick learning</li>
          </ul>

          <p>
            Fitxaura helps you understand health topics in simple language so
            you can take better care of your body and lifestyle.
          </p>
        </div>

      </div>

    </>
  );
}