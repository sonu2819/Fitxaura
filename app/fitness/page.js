import Link from "next/link";

export const metadata = {
  title: "Fitness Exercises at Home | Beginner Workout Guide | Fitxaura",
  description:
    "Learn fitness exercises at home like push-ups, squats, pull-ups, and running. Beginner-friendly workout guide to build strength, stamina, and improve health naturally.",
};

export default function Fitness() {
  return (
    <div className="container">
      <h1>Fitness Exercises at Home (Beginner Guide)</h1>

      <p>
        Fitness exercises are simple physical activities that help improve
        strength, stamina, flexibility, and overall health. You don’t need a
        gym — you can start at home using your own body weight.
      </p>

      <h2>Why Fitness is Important</h2>

      <p>
        Regular fitness training improves both physical and mental health. It is
        one of the most effective ways to stay active and prevent lifestyle
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
        If you are new, start slowly and focus on consistency rather than heavy
        training.
      </p>

      <ul>
        <li>
          <strong>Day 1:</strong> Push-ups + Squats
        </li>
        <li>
          <strong>Day 2:</strong> Running / Walking
        </li>
        <li>
          <strong>Day 3:</strong> Rest
        </li>
        <li>
          <strong>Day 4:</strong> Push-ups + Pull-ups
        </li>
        <li>
          <strong>Day 5:</strong> Squats + Running
        </li>
        <li>
          <strong>Day 6:</strong> Light stretching or walking
        </li>
        <li>
          <strong>Day 7:</strong> Rest
        </li>
      </ul>

      <h2>Common Beginner Mistakes</h2>

      <ul>
        <li>Doing too many repetitions on the first day.</li>
        <li>Ignoring proper exercise form.</li>
        <li>Skipping warm-up and cool-down.</li>
        <li>Not taking enough rest between workouts.</li>
        <li>Expecting quick results and losing motivation.</li>
      </ul>

      <h2>Fitness Safety Tips</h2>

      <p>
        Following simple safety practices helps prevent injuries and allows you
        to enjoy long-term fitness progress.
      </p>

      <ul>
        <li>Warm up for 5–10 minutes before every workout.</li>
        <li>Focus on proper form instead of higher repetitions.</li>
        <li>Drink enough water before and after exercise.</li>
        <li>Wear comfortable clothing and supportive footwear.</li>
        <li>Increase workout intensity gradually.</li>
        <li>Stop exercising if you experience severe pain or dizziness.</li>
      </ul>

      <h2>Fitness Tip for Beginners</h2>

      <p>
        Start with just 10–15 minutes of exercise each day and gradually
        increase your workout time. Staying consistent is far more important
        than doing intense workouts occasionally.
      </p>

      <h2>Conclusion</h2>

      <p>
        Fitness is a lifelong journey that helps improve your physical and
        mental well-being. Simple exercises like push-ups, squats, pull-ups, and
        running can build strength, improve endurance, and boost overall health.
        Stay active, eat a balanced diet, and make exercise a regular part of
        your daily routine for lasting results.
      </p>
    </div>
  );
}