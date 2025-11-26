"use client";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setmenuToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 fixed flex justify-between items-center bg-transparent top-0 px-5 md:px-20 py-4 
     ${
       scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
     }`}>
      <Logo />

      <div className="hidden md:flex gap-6 text-md items-center ">
        <p className="hover:text-gray-300">Lorem ipsum</p>
        <p className="hover:text-gray-300">Lorem ipsum</p>
        <p className="hover:text-gray-300">Lorem ipsum</p>
      </div>

      <div>
        <Button className="hidden md:block" size={"lg"} variant="outline">
          Sign in
        </Button>
      </div>

      {/* ----- Replace your existing mobile menu block with this ----- */}
      <div className="md:hidden">
        <button
          onClick={() => setmenuToggle((p) => !p)}
          aria-expanded={menuToggle}
          aria-label="Toggle menu"
          className="p-1">
          {menuToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor">
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* fixed so it doesn't depend on parent's positioning */}
        <div
          className={`fixed left-0 right-0 top-20 z-50 flex justify-center transition-transform duration-200 ease-out
      ${
        menuToggle
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-4 opacity-0 pointer-events-none"
      }`}>
          <div className="w-full max-w-md mx-4  bg-black/60 backdrop-blur-md rounded-lg py-6 flex flex-col items-center space-y-4">
            <button className="text-lg font-medium hover:text-gray-300">
              Lorem ipsum
            </button>
            <button className="text-lg font-medium hover:text-gray-300">
              Lorem ipsum
            </button>
            <button className="text-lg font-medium hover:text-gray-300">
              Lorem ipsum
            </button>

            <div className="pt-2">
              <Button
                className="w-36"
                size={"lg"}
                variant="outline"
                onClick={() => setmenuToggle(false)}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
