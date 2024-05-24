"use client";
import "../globals.css";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import GenericPage from "@/components/GenericPage";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import { Toaster, toast } from 'sonner'



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} font-sans w-full h-full `}>
          <Navbar />
          <Toaster richColors position="bottom-right" />

          {isHomepage ? (
            children
          ) : (
            <GenericPage>
              {children}
            </GenericPage>
          )}
          <Footer />
      </body>
    </html>
  );
}
