"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";

const RegisterForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Ajout de l'état pour afficher/cacher le mot de passe
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nom, prenom, email, password }),
    });

    if (res.ok) {
      router.push("/login"); // Redirection vers la page de connexion après l'inscription
    } else {
      const errorData = await res.json();
      alert(errorData.error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      id="mainRegister"
      className="w-full h-screen flex justify-center bg-slate-100 items-center"
    >
      <div
        id="registerCard"
        className="flex flex-col w-2/3 md:w-1/4 h-2/3 md:h-[60%] items-center shadow-lg rounded-lg bg-white"
      >
        <div
          id="registerContent"
          className="flex flex-col items-center justify-center gap-5 mt-10"
        >
          <div id="logo" className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={75} height={80} />
            <p className="text-2xl font-bold">Inscription</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-8">
            <div className="relative">
              <input
                type="text"
                id="nom"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
              <label
                htmlFor="nom"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Nom
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="prenom"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
              />
              <label
                htmlFor="prenom"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Prénom
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Utilisation de l'état showPassword
                id="password"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Mot de passe
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? "Cacher" : "Afficher"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
