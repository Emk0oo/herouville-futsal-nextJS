"use client";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import GenericPage from "@/components/GenericPage";
import MetadataWrapper from "@/components/MetadataWrapper"; // Importez votre composant MetadataWrapper

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
      <body>
        <MetadataWrapper>
          <Navbar />
          {isHomepage ? (
            children
          ) : (
            <GenericPage>
              {children}
            </GenericPage>
          )}
          <Footer />
        </MetadataWrapper>
      </body>
    </html>
  );
}
