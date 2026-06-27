import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact | Fitxaura",
  description:
    "Contact Fitxaura for questions, suggestions, or feedback.",
};

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you! If you have any questions, suggestions,
          corrections, or feedback about Fitxaura, feel free to contact us.
        </p>

        

     <h2>Email</h2>

<p className="contact-email">
  <span className="email-icon">📧</span>
  <a href="mailto:merestro106@gmail.com" className="email-link">
    merestro106@gmail.com
  </a>
</p>

        <h2>Why Contact Us?</h2>

        <ul className="contact-list">
  <li>Report incorrect or outdated health information</li>
  <li>Suggest new health topics</li>
  <li>Ask general questions about the website</li>
  <li>Share feedback to help us improve Fitxaura</li>
</ul>

        <h2>Response Time</h2>

        <p>
          We aim to respond to all emails within <strong>24–48 hours</strong>.
        </p>

        <p>
          Thank you for visiting <strong>Fitxaura</strong> and helping us build
          a reliable health information platform.
        </p>
      </div>

      <Footer />
    </>
  );
}