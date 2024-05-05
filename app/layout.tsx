import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Herouville Futsal",
  description: "Site officiel du club de futsal de Herouville",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
