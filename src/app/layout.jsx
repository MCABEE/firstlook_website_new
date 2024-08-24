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
      weight: '200',
      style: 'regular',
    },
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
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={antonia.className}>
        {children}
      </body>
    </html>
  );
}
