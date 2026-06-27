import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Disclaimer",
  description: "Read the Fitxaura medical disclaimer and terms of use.",
};

export default function Disclaimer() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Disclaimer</h1>

        <p>
          The information provided on <strong>Fitxaura</strong> is for
          educational and informational purposes only. While we strive to keep
          our content accurate and up to date, we make no guarantees regarding
          its completeness, reliability, or accuracy.
        </p>

        <h2>Not Medical Advice</h2>

        <p>
          The content on this website is not intended to replace professional
          medical advice, diagnosis, or treatment. Always seek the advice of a
          qualified healthcare professional regarding any medical condition or
          concerns.
        </p>

        <h2>Emergency Situations</h2>

        <p>
          If you believe you are experiencing a medical emergency, call your
          local emergency services or visit the nearest hospital immediately.
          Do not rely solely on information provided on this website.
        </p>

        <h2>No Doctor–Patient Relationship</h2>

        <p>
          Using this website does not create a doctor–patient relationship
          between you and Fitxaura or its authors.
        </p>

        <h2>External Links</h2>

        <p>
          Fitxaura may contain links to third-party websites for additional
          information. We are not responsible for the content, privacy
          practices, or accuracy of those external websites.
        </p>

        <h2>Limitation of Liability</h2>

        <p>
          Fitxaura and its owners shall not be held responsible for any loss,
          injury, or damages resulting from the use of the information provided
          on this website.
        </p>

        <h2>Contact Us</h2>

        <p>
          If you have any questions about this disclaimer, please contact us at:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:merestro106@gmail.com">
            merestro106@gmail.com
          </a>
        </p>
      </div>

      <Footer />
    </>
  );
}