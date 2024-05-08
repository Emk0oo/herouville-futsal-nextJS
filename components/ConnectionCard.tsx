import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


const ConnectionCard = () => {
  return (
    <main className="flex flex-col  bg-white w-1/3 h-2/3 shadow rounded-lg">
      <div id="logo" className="flex w-full justify-center h-1/6">
        <Image
          src={logo}
          alt="Logo du club de futsal de Herouville"
          width={75}
          height={75}
        />
      </div>
      <div id="form" className="flex flex-col items-center w-full h-5/6 p-4 gap-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 border-2 border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 bg-bleuNuitHerouville text-white rounded-lg"
        >
          <LoginLink>Sign in</LoginLink>


        </button>
        <RegisterLink>Sign up</RegisterLink>
      </div>
    </main>
  );
};

export default ConnectionCard;
