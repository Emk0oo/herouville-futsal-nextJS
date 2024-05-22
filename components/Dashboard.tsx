"use client";

import Image from "next/image";
import React, { ReactNode, useState } from "react";
import SidebarButton from "./SidebarButton";
import { dashboardMenu } from "@/constants/outils";
import { usePathname } from "next/navigation";
import DashboardContainer from "./DashboardContainer";

const nomDeMarque = "Herouville Futsal";

type DashboardProps = {
  children: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const nomPage = dashboardMenu.find((page) => page.link === pathname)?.title;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <main id="dashboard" className="relative w-full h-screen shadow bg-slate-400">
      {/* Header */}
      <div id="header" className="absolute w-full h-[10%] bg-white z-10 ">
        <div
          id="headerContent"
          className={`flex flex-row transition-all duration-300 ${
            isSidebarOpen ? "ml-[17%]" : "ml-[5%]"
          }`}
        >
          <div id="titrePage" className="flex items-center gap-2 p-3">
            <h1 className="text-xl font-bold">{nomPage}</h1>
          </div>
        </div>
      </div>

      <aside
        id="sidebar"
        className={`absolute top-0 left-0 transition-all duration-300 h-full shadow overflow-hidden bg-white z-20 ${
          isSidebarOpen ? "w-1/6" : "w-[5%] "
        }`}
      >
        <div id="marque" className="flex items-center gap-2 px-5 py-4">
          {/* Bouton qui englobe le logo et le texte */}
          <button
            onClick={toggleSidebar}
            className="flex items-center gap-2 w-full"
          >
            <Image src="/logo.png" alt="logo" width={75} height={75} />

            {/* Afficher le titre seulement si le panneau est ouvert */}
            {isSidebarOpen && (
              <h1 className="text-xl font-bold text-bleuNuitHerouville">
                {nomDeMarque}
              </h1>
            )}
          </button>
        </div>

        <div
          id="content"
          className={`flex flex-col gap-4  ${
            isSidebarOpen ? "p-4" : "px-1 py-4"
          }`}
        >
          <div id="menu" className="flex flex-col gap-4 p-4">
            {dashboardMenu.map((item, index) => (
              <SidebarButton
                key={index}
                title={item.title}
                link={item.link}
                isSidebarOpen={isSidebarOpen}
                isActive={
                  pathname === item.link 
                }
              />
            ))}
          </div>
        </div>
      </aside>

      <div
        id="contentDashboard"
        className={`absolute top-[10%] transition-all duration-300 bg-slate-200  ${
          isSidebarOpen ? "left-[16.5%] w-[83%]" : "left-[5%] w-[95%]"
        } h-[90%] bg-slate-100 p-4`}
      >
        <DashboardContainer>{children}</DashboardContainer>
      </div>
    </main>
  );
};

export default Dashboard;
