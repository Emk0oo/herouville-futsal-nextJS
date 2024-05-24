import { useEffect, useState } from "react";
import jwt, { JwtPayload } from "jsonwebtoken";

const useAuthMenuProfileCheck = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

    if (!token || !secret) {
      return;
    }

    try {
      const decoded = jwt.verify(token, secret) as JwtPayload;
      const isTokenExpired = (decoded.exp || 0) * 1000 < Date.now();

      if (isTokenExpired) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated;
};

export default useAuthMenuProfileCheck;
