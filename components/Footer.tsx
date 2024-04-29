import Image from "next/image";
import { Montserrat } from "next/font/google";
import React from "react";
import logo from "../public/logo.png";
import phone from "../public/telephone.png";
import pointeur from "../public/pointeur.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

function Footer() {
  return (
    <footer
      className={`${montserrat.variable} font-sans  text-bleuNuitHerouville shadow `}
    >
      <div
        id="content"
        className="flex justify-center items-center gap-10  border-t border-b py-[10%] "
      >
        <div id="image" className="">
          <Image
            src={logo}
            alt="Logo du club de futsal de Herouville"
            width={170}
            height={170}
          />
        </div>
        <div id="contenuLien" className="flex gap-10">
          <div id="coordonnees" className="flex flex-col gap-2">
            <h1 className=" font-bold ">Coordonnées du club</h1>
            <div className="flex flex-row gap-2 ">
              <Image
                src={pointeur}
                alt="icone pointeur"
                width={25}
                height={16}
              />
              <p className="">21 Rue du Club 1400 Herouvile</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image src={phone} alt="icone pointeur" width={25} height={16} />
              <p>02 31 10 20 30</p>
            </div>
          </div>
          <div id="liens" className="flex flex-col gap-2 ">
            <h1 className="font-bold">Liens</h1>
            <a href="/">Accueil</a>
            <a href="/">Actualités</a>
            <a href="/">Calendrier</a>
            <a href="/">Boutique</a>
          </div>
          <div id="reseaux" className="flex flex-col gap-2 items-center">
            <h1 className="font-bold">Suivez nous !</h1>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center p-4 gap-2  mt-4 w-full text-sm font-bold">
        <a href="/">Mentions légales</a>
        <a href="/">Plan du site</a>
      </div>
    </footer>
  );
}

export default Footer;
