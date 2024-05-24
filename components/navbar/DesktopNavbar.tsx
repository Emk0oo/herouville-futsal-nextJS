import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRegUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import logo from "/public/logo.png";

interface DesktopNavbarProps {
  isProfileOpen: boolean;
  toggleProfileMenu: () => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isProfileOpen, toggleProfileMenu }) => (
  <div
    id="navbarDesktop"
    className="hidden xl:flex xl:flex-row xl:justify-between xl:z-10 xl:fixed xl:top-0 xl:left-0 xl:right-0 xl:w-full"
  >
    <div id="logoNavbar" className="w-1/2 flex items-center ml-[6.5%]">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo du club de futsal de Herouville"
          width={150}
          height={150}
        />
      </Link>
    </div>
    <div
      id="menuNavbar"
      className="w-[47%] h-20 bg-bleuNuitHerouville flex items-center justify-end border-t-8 border-bleuHerouville rectangle text-white text-lg font-bold"
    >
      <ul className="flex flex-row h-full items-center  mx-auto overflow-hidden">
        <li className="flex px-11  border-r border-bleuBorder ">
          <Link href="/equipe" className="hover:text-jauneHerouville">
            Equipe
          </Link>
        </li>
        <li className="flex px-11  border-r border-bleuBorder ">
          <Link href="/actualites" className="hover:text-jauneHerouville">
            Actualités
          </Link>
        </li>
        <li className="flex px-11  border-r border-bleuBorder ">
          <Link href="/calendrier" className="hover:text-jauneHerouville">
            Calendrier
          </Link>
        </li>
        <li className="flex px-11  ">
          <Link href="/boutique" className="hover:text-jauneHerouville">
            Boutique
          </Link>
        </li>
        <li className="flex gap-2 h-full w-full bg-jauneHerouville items-center px-4 pl-7 rectangle2">
          <Link href="https://www.facebook.com/herouvillefutsalforceethonneur/?locale=fr_FR">
            <FaFacebookF size={25} />
          </Link>

          <Link href="https://twitter.com/futsalclubhsc">
            <FaXTwitter size={25} />
          </Link>
          <Link href="https://www.instagram.com/herouvillefutsalhf/">
            <FaInstagram size={25} />
          </Link>
          <button onClick={toggleProfileMenu} className="focus:outline-none">
            <FaRegUser size={25} />
          </button>
          <button className="focus:outline-none">
            <IoBagOutline size={25} />
          </button>
        </li>
      </ul>
    </div>
    {isProfileOpen && (
      <div
        id="dropdownMenuProfile"
        className="absolute right-0 mt-[4%] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          <Link
            href="/login"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-0"
          >
            Se connecter
          </Link>
          <Link
            href="/register"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            id="menu-item-1"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    )}
  </div>
);

export default DesktopNavbar;
