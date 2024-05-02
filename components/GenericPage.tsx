import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const GenericPage = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <div className={`${montserrat.variable} font-sans w-full h-screen`}>
      <div className="bg-photo1 w-full h-[54%]  bg-no-repeat flex flex-col justify-end">
        <div className="w-2/3 mx-auto pb-[3%] pl-[4%]">
          <h1 className="text-white text-4xl font-bold ">{title}</h1>
        </div>
      </div>
      <div>
        {children} {/* Ici, les enfants passés au composant seront rendus */}{" "}
      </div>
    </div>
  );
};

export default GenericPage;
