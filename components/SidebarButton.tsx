import React from "react";

type SidebarButtonProps = {
  title: string;
  link: string;
  isActive: boolean;
  isSidebarOpen: boolean;
  icon: React.ReactNode;  // Icone en tant que prop ReactNode
};

const SidebarButton = ({ title, link, isSidebarOpen, isActive, icon }: SidebarButtonProps) => {
  return (
    <a
      href={link}
      className={`flex items-center rounded-xl p-3 gap-2 transition-all duration-300 hover:bg-indigo-500 hover:text-white ${
        isSidebarOpen ? "w-full justify-start" : "w-16 justify-center"
      } ${isActive ? "bg-indigo-500 text-white" : " bg-white"}`}
    >
      {icon}
      {isSidebarOpen && <span>{title}</span>}
    </a>
  );
};

export default SidebarButton;
