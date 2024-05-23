// dashboard/page.tsx
"use client";
import useAuthCheck from "@/hooks/useAuthCheck";
export default function DashboardPage() {
  useAuthCheck();

  return (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veritatis
      quos dolorum nobis praesentium fuga natus repudiandae autem, vero tempore
      iste veniam in ea eius dolore accusantium nam reprehenderit sapiente.
    </>
  );
}
