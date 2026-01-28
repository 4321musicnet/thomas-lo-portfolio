import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thomas Lo - Sound Engineer & Immersive Art Curator",
  description: "Award-winning sound engineer and immersive art curator. Director of 432 1 Music, specializing in multitrack mixing and immersive concert experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
