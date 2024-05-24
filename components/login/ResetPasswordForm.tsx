"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPasswordForm = ({ token }: { token: string }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const res = await fetch(`http://localhost:4000/auth/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newPassword }),
    });

    if (res.ok) {
      setMessage("Password has been reset successfully.");
      setError("");
      router.push("/login");
    } else {
      const errorData = await res.json();
      setError(errorData.error);
      setMessage("");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center bg-slate-100 items-center">
      <div className="flex flex-col w-3/4 h-1/2 md:w-1/5 md:h-[40%] items-center shadow-lg rounded-lg bg-white">
        <div className="flex flex-col items-center justify-center gap-5 mt-10">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full px-8">
            <div className="relative">
              <input
                type="password"
                id="newPassword"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label
                htmlFor="newPassword"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                New Password
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-1 left-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:top-1/5 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Confirm Password
              </label>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              Reset Password
            </button>
          </form>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
