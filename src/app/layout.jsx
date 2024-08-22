import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firstlook: Connecting Singles Globally",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.adobe.com/fonts/antonia-variable#fonts-section" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
