import Link from "next/link";


export const metadata = {
  title: "Common Symptoms Guide | Causes, Signs & Management | Fitxaura",
  description:
    "Learn about common symptoms like headache, fever, cough, cold, and back pain. Understand causes, warning signs, prevention, and health tips.",
};

export default function Symptoms() {
  return (
    <>
     

      <div className="container">
        <h1>Common Symptoms Guide</h1>

        <p>
          Symptoms are signals from your body that may indicate a health issue.
          Understanding common symptoms, their causes, and proper management can
          help you take better care of your health.
        </p>


        <h2>Why Symptoms Should Not Be Ignored</h2>

        <p>
          Paying attention to symptoms early can help identify possible health
          problems and prevent conditions from becoming more serious.
        </p>

        <ul>
          <li>Helps identify health problems early</li>
          <li>Supports faster recovery</li>
          <li>Helps prevent complications</li>
          <li>Guides proper health decisions</li>
        </ul>


        <h2>Explore Common Symptom Guides</h2>

        <p>
          Learn about common symptoms, possible causes, prevention tips, and
          simple ways to manage them.
        </p>


        <ul>
          <li>
            <Link href="/symptoms/headache">
              <strong>Headache Guide</strong>
              <br />
              Learn about headache causes, common triggers, prevention, and
              helpful management tips.
            </Link>
          </li>


          <li>
            <Link href="/symptoms/fever">
              <strong>Fever Guide</strong>
              <br />
              Understand fever causes, symptoms, when to seek help, and basic
              care methods.
            </Link>
          </li>


          <li>
            <Link href="/symptoms/cough">
              <strong>Cough Guide</strong>
              <br />
              Learn about cough causes, types, prevention, and ways to reduce
              discomfort.
            </Link>
          </li>


          <li>
            <Link href="/symptoms/cold">
              <strong>Cold Guide</strong>
              <br />
              Understand common cold symptoms, causes, prevention, and recovery
              tips.
            </Link>
          </li>


          <li>
            <Link href="/symptoms/back-pain">
              <strong>Back Pain Guide</strong>
              <br />
              Learn about common causes of back pain, prevention, and healthy
              habits.
            </Link>
          </li>
        </ul>


        <h2>How to Manage Common Symptoms</h2>

        <p>
          Many mild symptoms improve with proper rest, hydration, and healthy
          daily habits.
        </p>

        <ul>
          <li>Drink enough water</li>
          <li>Take proper rest</li>
          <li>Maintain good hygiene</li>
          <li>Follow a healthy diet</li>
          <li>Avoid unnecessary stress</li>
        </ul>


        <h2>When Should You See a Doctor?</h2>

        <p>
          Consult a healthcare professional if symptoms become severe, continue
          for a long time, or affect your daily activities.
        </p>


        <h2>Frequently Asked Questions</h2>


        <h3>What are symptoms?</h3>

        <p>
          Symptoms are signs or changes in the body that may indicate a possible
          health condition.
        </p>


        <h3>Should mild symptoms be ignored?</h3>

        <p>
          Mild symptoms should still be monitored, especially if they continue
          or become worse.
        </p>


        <h3>Can symptoms improve naturally?</h3>

        <p>
          Some mild symptoms may improve with rest, hydration, and proper care,
          but persistent symptoms may need medical advice.
        </p>

      </div>
     
    </>
  );
}