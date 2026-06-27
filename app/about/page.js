import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "About",
  description: "Learn more about Fitxaura and our mission.",
};

export default function About() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>About Fitxaura</h1>

        <p>
          Fitxaura is a free health information platform designed to provide
          easy-to-understand information about symptoms, diseases, nutrition,
          and fitness.
        </p>

        <p>
          Our goal is to help people make informed health decisions by providing
          simple, reliable, and educational content that is accessible to
          everyone.
        </p>

        <h2>Our Mission</h2>

        <p>
          To make basic health knowledge available to everyone through clear,
          accurate, and easy-to-read articles.
        </p>

        <h2>Important Note</h2>

        <p>
          The information on Fitxaura is for educational purposes only and
          should not replace professional medical advice, diagnosis, or
          treatment. Always consult a qualified healthcare professional for any
          medical concerns.
        </p>
      </div>

      <Footer />
    </>
  );
}