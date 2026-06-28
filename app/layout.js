import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://fitxaura.vercel.app"),

  title: {
    default: "Fitxaura | Trusted Health Information",
    template: "%s | Fitxaura",
  },

  description:
    "Fitxaura provides reliable and easy-to-understand health information on symptoms, diseases, nutrition, and fitness.",

  keywords: [
    "health",
    "symptoms",
    "diseases",
    "nutrition",
    "fitness",
    "health tips",
    "Fitxaura",
  ],

  authors: [{ name: "Fitxaura" }],

  verification: {
    google: "856fmXU1t7GzHG8mfG2JUoY-x5hz3nV3NCUCq_CM5pc",
  },

  openGraph: {
    title: "Fitxaura | Trusted Health Information",
    description:
      "Learn about symptoms, diseases, nutrition, and fitness with simple health guides.",
    url: "https://fitxaura.vercel.app",
    siteName: "Fitxaura",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Fitxaura - Trusted Health Information",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fitxaura | Trusted Health Information",
    description:
      "Learn about symptoms, diseases, nutrition, and fitness with simple health guides.",
    images: ["/preview.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}