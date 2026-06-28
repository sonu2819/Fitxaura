
import Link from "next/link";

export const metadata = {
  title: "Common Diseases Guide | Symptoms, Causes & Prevention | Fitxaura",
  description:
    "Learn about common diseases like diabetes, high blood pressure, asthma, and dengue. Understand symptoms, causes, prevention, treatment, and healthy lifestyle tips.",
};

export default function Diseases() {
  return (
    <>
      
      <div className="container">
        <h1>Common Diseases Guide</h1>

        <p>
          Diseases are health conditions that affect the normal functioning of
          the body. Learning about common diseases, their symptoms, causes, risk
          factors, and prevention methods can help you maintain better health
          and seek treatment at the right time.
        </p>

        <h2>Why Learning About Diseases is Important</h2>

        <p>
          Understanding diseases allows you to recognize warning signs early,
          adopt healthier habits, and reduce the risk of serious health
          complications.
        </p>

        <ul>
          <li>Helps detect health problems early</li>
          <li>Encourages a healthier lifestyle</li>
          <li>Reduces the risk of serious complications</li>
          <li>Supports better treatment and recovery</li>
          <li>Improves overall health awareness</li>
        </ul>

        <h2>Explore Detailed Disease Guides</h2>

        <p>
          Browse our detailed disease guides to learn about symptoms, causes,
          risk factors, prevention, treatment options, and healthy lifestyle
          recommendations.
        </p>

        <ul>
          <li>
            <Link href="/diseases/diabetes">
              <strong>Diabetes Guide</strong>
              <br />
              Learn about diabetes symptoms, causes, prevention, treatment, and
              healthy eating habits.
            </Link>
          </li>

          <li>
            <Link href="/diseases/blood-pressure">
              <strong>High Blood Pressure Guide</strong>
              <br />
              Understand hypertension, warning signs, causes, prevention, and
              ways to manage blood pressure naturally.
            </Link>
          </li>

          <li>
            <Link href="/diseases/asthma">
              <strong>Asthma Guide</strong>
              <br />
              Learn about asthma triggers, breathing difficulties, symptoms,
              treatment, and prevention tips.
            </Link>
          </li>

          <li>
            <Link href="/diseases/dengue">
              <strong>Dengue Guide</strong>
              <br />
              Learn about dengue symptoms, mosquito prevention, warning signs,
              recovery, and home care.
            </Link>
          </li>
        </ul>

        <h2>How to Prevent Common Diseases</h2>

        <p>
          While not every disease can be prevented, many health conditions can
          be reduced through healthy habits and regular medical checkups.
        </p>

        <ul>
          <li>Eat a balanced diet rich in fruits and vegetables</li>
          <li>Exercise regularly</li>
          <li>Drink clean and safe water</li>
          <li>Maintain good personal hygiene</li>
          <li>Get regular health checkups</li>
          <li>Take recommended vaccinations</li>
        </ul>

        <h2>When Should You See a Doctor?</h2>

        <p>
          Seek medical advice if symptoms are severe, continue for several days,
          or interfere with your daily activities. Early diagnosis often leads
          to better treatment outcomes.
        </p>

        <h2>Popular Disease Guides</h2>

        <p>
          Continue learning with our detailed disease articles below.
        </p>

        <ul>
          <li>
            <Link href="/diseases/diabetes">
              Read the Complete Diabetes Guide →
            </Link>
          </li>

          <li>
            <Link href="/diseases/blood-pressure">
              Read the Complete High Blood Pressure Guide →
            </Link>
          </li>

          <li>
            <Link href="/diseases/asthma">
              Read the Complete Asthma Guide →
            </Link>
          </li>

          <li>
            <Link href="/diseases/dengue">
              Read the Complete Dengue Guide →
            </Link>
          </li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What are the most common diseases?</h3>

        <p>
          Some common diseases include diabetes, high blood pressure, asthma,
          dengue, and heart disease.
        </p>

        <h3>Can diseases be prevented?</h3>

        <p>
          Many diseases can be prevented or managed by eating a healthy diet,
          exercising regularly, maintaining good hygiene, and attending routine
          health checkups.
        </p>

        <h3>Why is early diagnosis important?</h3>

        <p>
          Early diagnosis helps doctors begin treatment sooner, reducing the
          risk of complications and improving recovery.
        </p>
      </div>
     
    </>
  );
}