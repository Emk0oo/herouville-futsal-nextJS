import Image from "next/image";
import { Montserrat } from "next/font/google";
import React, { useState, useEffect } from "react";
import logo from "../public/logo.png";
import logo2 from "../public/logo2.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  FaFacebookF,
  FaInstagram,
  FaRegCalendarAlt,
  FaRegUser,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBagOutline, IoNewspaperOutline } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { CiShop } from "react-icons/ci";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsProfileOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="w-full h-full">
      <div id="mobileNavbar" className="xl:hidden">
        <div
          id="headerNavbar"
          className="flex flex-row w-full h-20 bg-bleuNuitHerouville justify-between z-10 fixed top-0 left-0 right-0 items-center shadow p-1"
        >
          <div className="ml-2 ">
            <a href="/" className="text-white hover:text-jauneHerouville">
              <div className="flex items-center gap-3">
                <Image
                  src={logo2}
                  alt="Logo du club de futsal de Herouville"
                  width={50}
                  height={50}
                />
                <div
                  id="titre"
                  className="text-white font-bold flex flex-col items-center"
                >
                  <p className="text-sm uppercase bg-bleuNuitHerouville">
                    Futsal
                  </p>
                  <p className="text-sm uppercase bg-bleuHerouville p-1 rotate-herouville">
                    Herouville
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div id="burger" className="mr-2">
            <button onClick={toggleMenu} className="border-2 rounded-xl p-1">
              <RxHamburgerMenu size={35} color="white" />
            </button>
          </div>
        </div>
        <div
          id="menuDropdown"
          className={`${
            isOpen ? "max-h-screen" : "max-h-0"
          } transition-max-height duration-500 overflow-hidden bg-bleuNuitHerouville fixed top-20 left-0 right-0 z-40 shadow-lg`}
        >
          <ul className="flex flex-col text-white text-lg divide-y divide-bleuBorder ">
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
                <Image
                  src="/facebook.png"
                  alt="Logo de Facebook"
                  width={18}
                  height={30}
                  className="object-cover"
                />
              </Link>
              <Link href="https://twitter.com/futsalclubhsc">
                <Image
                  src="/twitter.png"
                  alt="Logo de Twitter"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </Link>
              <Link href="https://www.instagram.com/herouvillefutsalhf/">
                <Image
                  src="/instagram.png"
                  alt="Logo d'Instagram"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </Link>
              <button
                onClick={toggleProfileMenu}
                className="focus:outline-none"
              >
                <FaRegUser size={25} />
              </button>
              <button className="focus:outline-none">
                <IoBagOutline size={25} />
              </button>
            </li>
          </ul>
        </div>
        <div
          id="mobileProfileDropdown"
          className={`${
            isProfileOpen ? "max-h-screen" : "max-h-0"
          } transition-max-height duration-500 overflow-hidden bg-bleuHerouville fixed top-20 mt-2 left-0 right-0 z-40 shadow-lg `}
        >
          <div
            id="contentMobileProfileDropdown"
            className="w-full  flex flex-col"
          >
            <ul className="flex flex-col text-white text-lg divide-y divide-white ">
              <li className="px-11 py-7 flex items-center gap-1">
                <button
                  className="hover:text-jauneHerouville"
                  onClick={toggleProfileMenu}
                >
                  Fermer
                </button>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <Link href="/actualites" className="hover:text-jauneHerouville">
                  Commandes
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <Link href="/calendrier" className="hover:text-jauneHerouville">
                  Réglages
                </Link>
              </li>
              <li className="px-11 py-7 flex items-center gap-1">
                <Link href="/boutique" className="hover:text-jauneHerouville">
                  Déconnexion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
              <button
                onClick={toggleProfileMenu}
                className="focus:outline-none"
              >
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
    </nav>
  );
}

export default Navbar;
