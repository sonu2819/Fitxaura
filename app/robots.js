export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://fitxaura.vercel.app/sitemap.xml",
    host: "https://fitxaura.vercel.app",
  };
}