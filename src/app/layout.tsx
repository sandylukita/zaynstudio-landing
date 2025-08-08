import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zayn Studio - Apps that reshape reality",
  description: "ZaynStudio is an app holding company creating innovative applications that reshape reality and change lives.",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#7C3AED',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Zayn Studio - Apps that reshape reality',
    description: 'ZaynStudio is an app holding company creating innovative applications that reshape reality and change lives.',
    url: 'https://zaynstudio.app',
    siteName: 'Zayn Studio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Zayn Studio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zayn Studio - Apps that reshape reality',
    description: 'ZaynStudio is an app holding company creating innovative applications that reshape reality and change lives.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
