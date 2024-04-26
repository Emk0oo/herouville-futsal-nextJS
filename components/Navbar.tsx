import Image from "next/image";
import { Montserrat } from "next/font/google";
import React from "react";
import logo from "../public/logo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Navbar() {
  return (
    <nav className={`${montserrat.variable} font-sans `}>
      <div className=" flex flex-row justify-between z-50 fixed top-0 left-0 right-0">
        <div className="ml-10">
          <a href="/" className="text-white hover:text-jauneHerouville">
            <Image
              src={logo}
              alt="Logo du club de futsal de Herouville"
              width={150}
              height={150}
            />
          </a>
        </div>

        <div className="">
          <ul className="flex bg-bleuNuitHerouville border-t-4 border-bleuHerouville text-2xl rectangle  ">
            <li className="px-11 py-7 border-r border-bleuBorder ">
              <a
                href="/equipe"
                className="text-white hover:text-jauneHerouville"
              >
                Equipe
              </a>
            </li>
            <li className="px-11 py-7 border-r border-bleuBorder">
              <a
                href="/actualites"
                className="text-white hover:text-jauneHerouville"
              >
                Actualités
              </a>
            </li>
            <li className="px-11 py-7 border-r border-bleuBorder">
              <a
                href="/calendrier"
                className="text-white hover:text-jauneHerouville"
              >
                Calendrier
              </a>
            </li>
            <li className="px-11 py-7 ">
              <a
                href="/boutique"
                className="text-white hover:text-jauneHerouville"
              >
                Boutique
              </a>
            </li>

            <li className="px-11 py-7 bg-jauneHerouville rectangle2 flex flex-row gap-6">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
