import Image from "next/image";
import React from "react";
import logo from '../public/logo.png'

function Navbar() {
  return (
    <div className="flex flex-row justify-between z-50 fixed top-0 left-0 right-0">
      <div className="pl-10">
        <Image 
        src={logo}
        alt="Logo du club de futsal de Herouville"
        width={150}
        height={150}
        />
      </div>

      <div>
        <ul className="flex bg-bleuNuitHerouville border-t-4 border-bleuHerouville rectangle ">
          <li className="p-5 border-r border-bleuBorder ">
            <a href="/equipe" className="text-white hover:text-jauneHerouville">
              Equipe
            </a>
          </li>
          <li className="p-5 border-r border-bleuBorder">
            <a
              href="/actualites"
              className="text-white hover:text-jauneHerouville"
            >
              Actualités
            </a>
          </li>
          <li className="p-5 border-r border-bleuBorder">
            <a
              href="/calendrier"
              className="text-white hover:text-jauneHerouville"
            >
              Calendrier
            </a>
          </li>
          <li className="p-5 ">
            <a
              href="/boutique"
              className="text-white hover:text-jauneHerouville"
            >
              Boutique
            </a>
          </li>

          <li className="p-5 bg-jauneHerouville rectangle2">logo</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
