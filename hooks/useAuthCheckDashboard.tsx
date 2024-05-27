import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

const useAuthCheckDashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

    if (!token || !secret) {
      router.push("/login");
      return;
    }

    try {
      const decodedJwt = jwt.decode(token);

      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err);
          router.push("/login");
          return;
        }
        if (decoded && typeof decoded !== "string") {
          setUser(decoded);
          if(decoded.role !== 1) {
            router.push("/");
          }
        }
      });
    } catch (error) {
      console.error("JWT verification failed:", error);
      router.push("/login");
    }
  }, [router]);

  return user;
};

export default useAuthCheckDashboard;
