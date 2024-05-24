"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Ajout de l'état pour afficher/cacher le mot de passe
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      router.push("/");
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
      id="mainLogin"
      className="w-full h-screen flex justify-center bg-slate-100 items-center"
    >
      <div
        id="loginCard"
        className="flex flex-col w-2/3 md:w-1/4 h-[50%] md:h-[50%] items-center shadow-lg rounded-lg bg-white"
      >
        <div
          id="loginContent"
          className="flex flex-col items-center justify-center gap-5 mt-10"
        >
          <div id="logo" className="flex flex-col items-center">
            <Image src={logo} alt="logo" width={75} height={80} />
            <p className="text-2xl font-bold">Connexion</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-8">
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
              <Link href="/login/forgot-password" className="text-sm text-bleuHerouville">Mot de passe oublié ?</Link>
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
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
