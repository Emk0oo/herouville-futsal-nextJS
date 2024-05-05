import React from "react";

type SidebarButtonProps = {
  title: string;
  link: string;
  svg: string;
};

const SidebarButton = (props: SidebarButtonProps) => {
  const { title, link, svg } = props;
  return (
    <a
      href={link}
      className="flex flex-row items-center text-lg  border rounded-xl p-3 bg-indigo-500 text-white gap-2"
    >
      {svg}
      {title}
    </a>
  );
};

export default SidebarButton;
