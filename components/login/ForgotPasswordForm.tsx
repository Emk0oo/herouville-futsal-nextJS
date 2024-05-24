"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from "sonner";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setMessage(
        "Un lien de récupération a été envoyé à votre adresse e-mail."
      );
      setError("");
      toast.success(
        "Un lien de récupération a été envoyé à votre adresse e-mail."
      );
    } else {
      const errorData = await res.json();
      setError(errorData.error);
      setMessage("");
      toast.error(errorData.error);
    }
  };

  return (
    <>
      <div
        id="mainForgotPassword"
        className="w-full h-screen flex justify-center bg-slate-100 items-center"
      >
        <div
          id="forgotPasswordCard"
          className="flex flex-col w-3/4 h-1/2 md:w-1/5 md:h-[40%] items-center shadow-lg rounded-lg bg-white"
        >
          <div
            id="forgotPasswordContent"
            className="flex flex-col items-center justify-center gap-5 mt-10"
          >
            <Image src={logo} alt="logo" width={75} height={80} />

            <h1 className="text-2xl font-bold">Mot de passe oublié</h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full px-8"
            >
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
              <div className="w-full flex  justify-center">
                <button
                  type="submit"
                  className="w-2/3 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
                >
                  Envoyer un lien de récupération
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
