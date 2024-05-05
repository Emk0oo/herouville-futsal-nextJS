// dashboard/layout.tsx
import React from "react";
import "../globals.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <link rel="icon" href="/favicon.ico" />
      <body>
        {children}
      </body>
    </html>
  );
}
