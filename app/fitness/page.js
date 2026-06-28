import Navbar from "../components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fitness Exercises at Home | Beginner Workout Guide | Fitxaura",
  description:
    "Learn fitness exercises at home like push-ups, squats, pull-ups, and running. Beginner-friendly workout guide to build strength, stamina, and improve health naturally.",
};

export default function Fitness() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Fitness Exercises at Home (Beginner Guide)</h1>

        <p>
          Fitness exercises are simple physical activities that help improve
          strength, stamina, flexibility, and overall health. You don’t need a
          gym — you can start at home using your own body weight.
        </p>

        <h2>Why Fitness is Important</h2>
        <p>
          Regular fitness training improves both physical and mental health. It
          is one of the most effective ways to stay active and prevent lifestyle
          diseases.
        </p>

        <ul>
          <li>Improves heart health and blood circulation</li>
          <li>Helps in weight loss and fat control</li>
          <li>Builds muscle strength and endurance</li>
          <li>Increases energy and reduces fatigue</li>
          <li>Improves mental health and reduces stress</li>
        </ul>

        <h2>Best Beginner Fitness Exercises</h2>
        <p>
          Start with simple bodyweight exercises that can be done anywhere at
          home.
        </p>

        <ul>
          <li>
            <Link href="/fitness/push-ups">
              <strong>Push-ups</strong> – Builds chest, shoulders, and arm
              strength. Great for upper body development.
            </Link>
          </li>

          <li>
            <Link href="/fitness/squats">
              <strong>Squats</strong> – Strengthens legs, thighs, and glutes.
              Improves lower body power and balance.
            </Link>
          </li>

          <li>
            <Link href="/fitness/pull-ups">
              <strong>Pull-ups</strong> – Builds back, biceps, and shoulder
              strength. One of the best upper body exercises.
            </Link>
          </li>

          <li>
            <Link href="/fitness/running">
              <strong>Running</strong> – Improves stamina, heart health, and
              overall endurance.
            </Link>
          </li>
        </ul>

        <h2>Beginner Weekly Workout Plan</h2>
        <p>
          If you are new, start slow and focus on consistency rather than heavy
          training.
        </p>

        <ul>
          <li><strong>Day 1:</strong> Push-ups + Squats</li>
          <li><strong>Day 2:</strong> Running / Walking</li>
          <li><strong>Day 3:</strong> Rest</li>
          <li><strong>Day 4:</strong> Push-ups + Pull-ups</li>
          <li><strong>Day 5:</strong> Squats + Running</li>
          <li><strong>Day 6:</strong> Light activity / stretching</li>
          <li><strong>Day 7:</strong> Rest</li>
        </ul>

        <h2>Common Beginner Mistakes</h2>
        <ul>
          <li>Doing too many reps on the first day</li>
          <li>Ignoring proper form and posture</li>
          <li>Skipping rest days</li>
          <li>Not staying consistent</li>
        </ul>

        <h2>Fitness Tip for Beginners</h2>
        <p>
          Start with just 10–15 minutes daily. Gradually increase intensity over
          time. Consistency is more important than heavy workouts.
        </p>

       <h2>Detailed Fitness Exercise Guides</h2>

<p>
Want to learn each exercise step by step? Explore our detailed guides
covering proper technique, benefits, common mistakes, and beginner tips.
</p>

<ul>
  <li>
    <Link href="/fitness/push-ups">
      <strong>Push-ups Guide</strong><br />
      Learn the correct form, benefits, mistakes to avoid, and beginner routine.
    </Link>
  </li>

  <li>
    <Link href="/fitness/squats">
      <strong>Squats Guide</strong><br />
      Improve leg strength, balance, and posture with proper squat technique.
    </Link>
  </li>

  <li>
    <Link href="/fitness/pull-ups">
      <strong>Pull-ups Guide</strong><br />
      Build a stronger back and arms with step-by-step pull-up training.
    </Link>
  </li>

  <li>
    <Link href="/fitness/running">
      <strong>Running Guide</strong><br />
      Learn beginner running tips, endurance training, and common mistakes.
    </Link>
  </li>
</ul>
      </div>
    </>
  );
}