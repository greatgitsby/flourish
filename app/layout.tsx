import type { Metadata } from "next";
import { Playfair_Display, Inter, Marcellus } from "next/font/google";
import Navigation from "./components/Navigation";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const marcellus = Marcellus({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Flourish Bread Company | Handcrafted Sourdough | Turlock, CA",
  description: "Artisan sourdough bread, scones, and baked goods by Annie Moen. Visit us at the Turlock Farmer's Market in Central California.",
  keywords: ["sourdough bread", "artisan bakery", "Turlock", "California", "farmer's market", "scones", "pizza crust", "handcrafted"],
  openGraph: {
    title: "Flourish Bread Company",
    description: "Handcrafted sourdough and baked goods from Turlock, CA",
    type: "website",
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
        className={`${playfairDisplay.variable} ${inter.variable} ${marcellus.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
