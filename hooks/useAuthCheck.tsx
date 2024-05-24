import { useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const useAuthCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

    if (!token || !secret) {
      return;
    }

    try {
      const decodedJwt = jwt.decode(token);
      console.log(decodedJwt);

      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          console.log(err);
          router.push("/login");
          return;
        }
        console.log(decoded);
      });
    } catch (error) {
      console.error("JWT verification failed:", error);
      router.push("/login");
    }
  }, [router]);
};

export default useAuthCheck;
