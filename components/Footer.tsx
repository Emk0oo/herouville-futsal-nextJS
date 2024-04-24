import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import phone from "../public/telephone.png";
import pointeur from "../public/pointeur.png";

function Footer() {
  return (
    <footer className="flex flex-col text-bleuNuitHerouville shadow ">
      <div className="flex flex-col justify-center items-center  ">
        <div>
        <Image
          src={logo}
          alt="Logo du club de futsal de Herouville"
          width={100}
          height={100}
        />
        </div>
        
        <div className="flex flex-col gap-2 items-center">
          <h1 className=" font-bold ">Coordonnées du club</h1>
          <div className="flex flex-row gap-2 ">
            {/* <Image src={pointeur} alt="icone pointeur" width={25} height={16} /> */}
            <p className="max-w-[50%]">21 Rue du Club 1400 Herouvile</p>
          </div>
          <div className="flex flex-row gap-2">
            {/* <Image src={phone} alt="icone pointeur" width={25} height={16} /> */}
            <p>02 31 10 20 30</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-4 gap-2 border-t mt-4 w-full">
          <a href="/">Mentions légales</a>
          <a href="/">Plan du site</a>
        </div>
    </footer>
  );
}

export default Footer;
