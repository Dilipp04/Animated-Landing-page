"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
  children: React.ReactNode;
}

const AOSProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animation only once
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
