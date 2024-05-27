import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaListUl, FaRegUser } from "react-icons/fa";
import { FaPencil, FaXTwitter } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import logo from "/public/logo.png";
import useAuthMenuProfileCheck from "@/hooks/useAuthMenuProfileCheck";
import { CiLogin } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";

interface DesktopNavbarProps {
  isProfileOpen: boolean;
  toggleProfileMenu: () => void;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isProfileOpen, toggleProfileMenu }) => {
  const isAuthenticated = useAuthMenuProfileCheck(); // Utilisation du hook d'authentification

  return (
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
            <Link href="/panier" className="focus:outline-none">
              <IoBagOutline size={25} />
            </Link>
          </li>
        </ul>
      </div>
      <div
        id="dropdownMenuProfile"
        className={`${isProfileOpen ? "max-h-screen" : "max-h-0"} transition-max-height duration-100 overflow-hidden absolute right-0 mt-[4.2%] w-56 origin-top-right rounded-b-lg bg-bleuHerouville text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <ul className=" flex flex-col divide-y" role="none">
          {isAuthenticated ? (
            <>
              <li className="px-4 py-2 flex items-center gap-1">
                <FaListUl size={20} />
                <Link href="/commandes" className="hover:text-jauneHerouville">
                  Commandes
                </Link>
              </li>
              <li className="px-4 py-2 flex items-center gap-1">
                <LuSettings size={20} />
                <Link href="/reglages" className="hover:text-jauneHerouville">
                  Réglages
                </Link>
              </li>
              <li className="px-4 py-2 flex items-center gap-1">
                <SlLogout size={20} color="red" />
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Déconnexion
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="px-4 py-2 flex items-center gap-1">
                <CiLogin size={20} />
                <Link href="/login" className="hover:text-jauneHerouville">
                  Se connecter
                </Link>
              </li>
              <li className="px-4 py-2 flex items-center gap-1">
                <FaPencil size={20} />
                <Link href="/register" className="hover:text-jauneHerouville">
                  S&apos;inscrire
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
