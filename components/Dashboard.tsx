import Image from "next/image";
import React from "react";
import SidebarButton from "./SidebarButton";
import { dashboardMenu } from "@/constants/outils";

const nomDeMarque = "Herouville Futsal";

const Dashboard = () => {
  return (
    <main id="dashboard" className="w-full h-screen bg-slate-200 ">
      <aside id="sidebar" className="w-1/6 h-full bg-white">
        <div id="marque" className="flex flex-row px-5 items-center gap-2">
          <Image src="/logo.png" alt="logo" width={75} height={75} />
          <h1 className="text-xl font-bold text-bleuNuitHerouville">
            {nomDeMarque}
          </h1>
        </div>
        <div id="content" className="flex flex-col gap-4 p-4">
          <div id="menu" className="flex flex-col gap-4 p-4">
            {dashboardMenu.map((item, index) => (
              <SidebarButton key={index} title={item.title} link={item.link} svg={item.svg}/>
            ))}
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Dashboard;
