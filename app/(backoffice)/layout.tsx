// dashboard/layout.tsx
import React from "react";
import "../globals.css";
import { Montserrat } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {isAuthenticated} = getKindeServerSession()
  const isLoggedIn= await isAuthenticated();




    if (!isLoggedIn) {
    redirect("/login");
    };
  
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body className={`${montserrat.variable} font-sans  `}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
