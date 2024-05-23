"use client";
import useAuthCheckDashboard from "@/hooks/useAuthCheckDashboard";


export default function DashboardPage() {
  const user = useAuthCheckDashboard();

  if (!user) {
    return <div>Loading...</div>; // ou tout autre message de chargement ou redirection si nécessaire
  }

  return (
    <>
      <h1>Welcome, User {user.id}</h1>
      <p>Your role is: {user.role}</p>
    </>
  );
}
