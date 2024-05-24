"use client";
import React from "react";
import { useParams } from "next/navigation";
import ResetPasswordForm from "@/components/login/ResetPasswordForm";

const ResetPasswordPage = () => {
  const params = useParams();
  let token = params.token;

  if (Array.isArray(token)) {
    token = token[0];
  }

  if (!token) {
    return <p>Loading...</p>;
  }

  return <ResetPasswordForm token={token} />;
};

export default ResetPasswordPage;
