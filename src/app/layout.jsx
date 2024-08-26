import localFont from "next/font/local";
import "./globals.css";

const antonia = localFont({
  src: [
    {
      path: './AntoniaH2-Light.woff2',
      weight: '100',
      style: 'light',
    },
    {
      path: './AntoniaH2-Regular.woff2',
      fontWeight: '400',
      style: 'regular',
    },
  ],
});

export const metadata = {
  title: "Firstlook: Connecting Singles Globally",
  description: "Firstlook is a dating platform designed to connect singles from around the world. Discover new matches and find your perfect partner today.",
  icons: {
    icon: "/icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DatingPlatform",
  "name": "Firstlook",
  "description": "Firstlook is a dating platform designed to connect singles globally. Discover new matches and find your perfect partner today. We recognize that no existing platform fully grasps the unique needs and emotions of individuals searching for a meaningful connection. Our vision is to create the most interactive platform for singles, dedicated to connecting hearts and fostering relationships that matter. Offering a seamless journey from search to connection, chat and beyond. With verified accounts and a trusted platform, finding your perfect match is easier. A new era of matchmaking, where simplicity meets security, and love is just a click away.",
  "url": "https://www.firstlook.pro",
  "logo": "/icon.png",
  "audience": "Adult",
  "keywords": ["dating platform", "online dating", "singles connection"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/path/to/og-image.jpg" />
        <meta property="og:url" content="https://www.firstlook.pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={antonia.className}>
        {children}
      </body>
    </html>
  );
}
