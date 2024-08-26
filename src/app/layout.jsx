import localFont from "next/font/local";
import "./globals.css";

const antonia = localFont({
  src: [
    {
      path: './AntoniaH2-Light.woff2',
      weight: '100',
      style: 'light',
    },
    // {
    //   path: './AntoniaH2-Regular.woff2',
    //   weight: '100',
    //   style: 'regular',
    // },
    // {
    //   path: './AntoniaH2-Medium.woff2',
    //   weight: '300',
    //   style: 'medium',
    // },
    // {
    //   path: './AntoniaH2-SemiBold.woff2',
    //   weight: '400',
    //   style: 'semibold',
    // },
    // {
    //   path: './AntoniaH2-Bold.woff2',
    //   weight: '700',
    //   style: 'bold',
    // },
  ],
})

export const metadata = {
  title: "Firstlook: Connecting Singles Globally",
  description: "Firstlook is a dating platform designed to connect singles from around the world. Discover new matches and find your perfect partner today.",
  icons: {
    icon: "/icon.png",
  },
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
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/path/to/twitter-image.jpg" />
      </head>
      <body className={antonia.className}>
        {children}
      </body>
    </html>
  );
}
