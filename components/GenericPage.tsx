"use client"
import React from "react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import usePageTitle from "@/utils/usePageTitle"; 

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const GenericPage = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const pageTitle = usePageTitle();

  const useGenericPage = ["/actualites", "/boutique", "/calendrier", "/equipe"].some(path => pathname.startsWith(path));

  if (useGenericPage) {
    return (
      <div className={`${montserrat.variable} font-sans w-full min-h-screen flex flex-col`}>
        <div className="bg-photo1 w-full h-[54vh] bg-no-repeat flex flex-col justify-end">
          <div className="w-2/3 mx-auto pb-[3%] pl-[4%]">
            <h1 className="text-white text-4xl font-bold">{pageTitle}</h1>
          </div>
        </div>
        <div className="flex-grow p-4 overflow-auto">
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GenericPage;
