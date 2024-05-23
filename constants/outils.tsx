import { CiShop } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export const dashboardMenu = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <RxDashboard size={30} />,
  },
  {
    title: "Calendrier",
    link: "/dashboard/calendrier",
    icon: <FaRegCalendarAlt size={30} />,
  },
  {
    title: "Boutique",
    link: "/dashboard/boutique",
    icon: <CiShop size={30} />,
  },
  {
    title: "Actualités",
    link: "/dashboard/actualites",
    icon: <IoNewspaperOutline size={30} />,
  },
  {
    title: "Equipe",
    link: "/dashboard/equipe",
    icon: <IoMdFootball size={30} />
,
  },
];
