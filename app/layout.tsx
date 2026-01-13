import type { Metadata, Viewport } from "next";
import { Inter, Sansation } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sansation = Sansation({
  variable: "--font-sansation",
  weight: "700",
});

export const metadata: Metadata = {
  title: "D'Belkis Cleaning Services",
  description:
    "D'Belkis Cleaning Services is a professional cleaning company located in the heart of Dubai.",
  metadataBase: process.env.SITE_URL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.SITE_URL,
    siteName: "D'Belkis Cleaning Services",
    images: [
      {
        url: `${process.env.SITE_URL}/images/hero.jpg`,
        alt: "D'Belkis Cleaning Services",
      },
    ],
    phoneNumbers: ["+971527280736"],
  },
  authors: {
    name: "Osmanys Fuentes Lombá",
    url: "https://github.com/wonddark",
  },
  creator: "Osmanys Fuentes Lombá",
  generator: "Next.js",
  keywords: [
    "cleaning services dubai",
    "dubai home cleaning",
    "dubai residential cleaning",
    "dubai office cleaning",
    "dubai deep cleaning",
  ],
  robots: "index, follow",
  formatDetection: {
    url: true,
    date: false,
    address: true,
    email: true,
    telephone: true,
  },
  pagination: {
    previous: process.env.SITE_URL,
    next: process.env.SITE_URL,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F5F7FA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sansation.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
