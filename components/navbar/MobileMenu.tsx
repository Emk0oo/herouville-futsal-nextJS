import Link from "next/link";
import { IoMdFootball } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCalendarAlt,
  FaRegUser,
} from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

interface MobileMenuProps {
  isOpen: boolean;
  toggleProfileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  toggleProfileMenu,
}) => {
  return (
    <div
      id="menuDropdown"
      className={`${
        isOpen ? "max-h-screen" : "max-h-0"
      } transition-max-height duration-500 overflow-hidden bg-bleuNuitHerouville fixed top-20 left-0 right-0 z-40 shadow-lg`}
    >
      <ul className="flex flex-col text-white text-lg divide-y divide-bleuBorder">
        <li className="px-10 py-7 flex items-center gap-1">
          <IoMdFootball size={30} />
          <Link href="/equipe" className="hover:text-jauneHerouville">
            Equipe
          </Link>
        </li>
        <li className="px-10 py-7 flex items-center gap-1">
          <IoNewspaperOutline size={30} />
          <Link href="/actualites" className="hover:text-jauneHerouville">
            Actualités
          </Link>
        </li>
        <li className="px-10 py-7 flex items-center gap-1">
          <FaRegCalendarAlt size={30} />
          <Link href="/calendrier" className="hover:text-jauneHerouville">
            Calendrier
          </Link>
        </li>
        <li className="px-10 py-7 flex items-center gap-1">
          <CiShop size={30} />
          <Link href="/boutique" className="hover:text-jauneHerouville">
            Boutique
          </Link>
        </li>
        <li className="px-11 py-7 bg-jauneHerouville flex flex-row gap-6 justify-center md:justify-start">
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
  );
};

export default MobileMenu;
