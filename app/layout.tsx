import type { Metadata, Viewport } from "next";
import { Inter, Sansation } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons/faSquareWhatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
});

const sansation = Sansation({
  variable: "--font-sansation",
  weight: "700",
  preload: true,
});

export const metadata: Metadata = {
  title: "D'Belkis Cleaning Services",
  description:
    "D'Belkis Cleaning Services is a professional cleaning company located in the heart of Dubai.",
  metadataBase: process.env.SITE_URL,
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo.jpeg",
      },
    ],
  },
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
        className={`${inter.variable} ${sansation.variable} relative bg-background font-body text-body antialiased`}
      >
        {children}
        <Link
          href={`${process.env.WS_HI_LINK}`}
          className="fixed right-5 bottom-5 z-10 lg:right-10 lg:bottom-10"
        >
          <FontAwesomeIcon
            icon={faSquareWhatsapp}
            className="size-10 text-accent transition-colors duration-300 ease-in-out hover:text-accent/80 md:size-10 lg:size-16"
          />
        </Link>
      </body>
    </html>
  );
}
