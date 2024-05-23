import Image from "next/image";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import logo from "../public/logo.png";
import logo2 from "../public/logo2.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaInstagram, FaRegUser } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

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

  return (
    <nav className={`${montserrat.variable} font-sans w-full h-full`}>
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
            isOpen ? "block" : "hidden"
          } bg-bleuNuitHerouville fixed top-20 left-0 right-0 z-40 shadow-lg`}
        >
          <ul className="flex flex-col text-white text-lg">
            <li className="px-11 py-7 border-b border-bleuBorder">
              <a href="/equipe" className="hover:text-jauneHerouville">
                Equipe
              </a>
            </li>
            <li className="px-11 py-7 border-b border-bleuBorder">
              <a href="/actualites" className="hover:text-jauneHerouville">
                Actualités
              </a>
            </li>
            <li className="px-11 py-7 border-b border-bleuBorder">
              <a href="/calendrier" className="hover:text-jauneHerouville">
                Calendrier
              </a>
            </li>
            <li className="px-11 py-7 border-b border-bleuBorder">
              <a href="/boutique" className="hover:text-jauneHerouville">
                Boutique
              </a>
            </li>
            <li className="px-11 py-7 bg-jauneHerouville flex flex-row gap-6 justify-center md:justify-start">
              <a href="https://www.facebook.com/herouvillefutsalforceethonneur/?locale=fr_FR">
                <Image
                  src="/facebook.png"
                  alt="Logo de Facebook"
                  width={18}
                  height={30}
                  className="object-cover"
                />
              </a>
              <a href="https://twitter.com/futsalclubhsc">
                <Image
                  src="/twitter.png"
                  alt="Logo de Twitter"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </a>
              <a href="https://www.instagram.com/herouvillefutsalhf/">
                <Image
                  src="/instagram.png"
                  alt="Logo d'Instagram"
                  width={30}
                  height={30}
                  className="object-cover"
                />
              </a>
              <Link href="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="6" r="4" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                    opacity=".5"
                  />
                </svg>
              </Link>
            </li>
          </ul>
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
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-0"
              >
                Account settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-1"
              >
                Support
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                id="menu-item-2"
              >
                License
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
