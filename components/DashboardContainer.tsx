"use client";
import React, { ReactNode } from "react";
import { dashboardMenu } from "@/constants/outils";

import { usePathname } from "next/navigation";

type DashboardContainerProps = {
  children: ReactNode;
};

const DashboardContainer = ({ children }: DashboardContainerProps) => {
  const pathname = usePathname();

  const nomPage = dashboardMenu.find((page) => page.link === pathname)?.title;
  return (
    <>
      <div className="w-full h-full flex flex-col  bg-slate-200 rounded-lg   ">
        <div
          id="dashboardContainerHeader"
          className="flex w-full h-10 items-center border-b-2 "
        >
          <p id="titreCard" className=" ml-2">
            {nomPage}
          </p>
        </div>
        <div id="dashboardContainerContent" className="w-full h-full  p-2">
          {children}
        </div>
      </div>{" "}
    </>
  );
};

export default DashboardContainer;
