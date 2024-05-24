import useAuthMenuProfileCheck from "@/hooks/useAuthMenuProfileCheck";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { SlLogout } from "react-icons/sl";

interface ProfileMenuProps {
  isProfileOpen: boolean;
  toggleProfileMenu: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  isProfileOpen,
  toggleProfileMenu,
}) => {
  const isAuthenticated = useAuthMenuProfileCheck();
  return (
    <div
      id="mobileProfileDropdown"
      className={`${
        isProfileOpen ? "max-h-screen" : "max-h-0"
      } transition-max-height duration-500 overflow-hidden bg-bleuHerouville fixed top-20 mt-2 left-0 right-0 z-40 shadow-lg`}
    >
      <div id="contentMobileProfileDropdown" className="w-full flex flex-col">
        <ul className="flex flex-col text-white text-lg divide-y divide-white">
          <li className="px-11 py-7 flex items-center gap-1">
          <IoClose size={20} />

            <button
              className="hover:text-jauneHerouville"
              onClick={toggleProfileMenu}
            >
              Fermer
            </button>
          </li>

          {isAuthenticated ? (
            <>
              <li className="px-11 py-7 flex items-center gap-1">
                <FaListUl size={20} />
                <Link href="/commandes" className="hover:text-jauneHerouville">
                  Commandes
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <LuSettings size={20} />
                <Link href="/reglages" className="hover:text-jauneHerouville">
                  Réglages
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
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
              <li className="px-11 py-7 flex items-center gap-1">
                <CiLogin size={20} />
                <Link href="/login" className="hover:text-jauneHerouville">
                  Se connecter
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <FaPencil size={20} />
                <Link href="/register" className="hover:text-jauneHerouville">
                  S&apos;inscrire
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <wbr></wbr> 
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
