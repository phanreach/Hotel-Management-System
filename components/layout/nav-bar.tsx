"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const firstName = Cookies.get("first_name");
    console.log("Cookies first_name:", firstName);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (firstName) setUsername(firstName);
  }, []);

  const firstLetter = username?.charAt(0).toUpperCase() ?? "";

  const links = [
    { name: "Home", href: "/home" },
    { name: "My Booking", href: "/booking-history" },
    { name: "Contact", href: "/contact" },
  ];

  const profileLinks = [{ name: "Logout", href: "/logout" }];

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("expiration");
    Cookies.remove("role");
    Cookies.remove("email");
    Cookies.remove("user_id");
    Cookies.remove("first_name");
    Cookies.remove("last_name");

    setUsername(null);
    router.push("/auth/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/home"
          className="flex items-center space-x-3 font-bold text-lg text-gray-900"
        >
          Luxury
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-gray-50 rounded-lg border border-gray-200 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    isActive(link.href)
                      ? "text-white bg-blue-600 md:text-blue-600 md:bg-transparent"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {username ? (
              <li className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center font-semibold focus:outline-none"
                >
                  {firstLetter}
                </button>

                {profileOpen && (
                  <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">
                    {profileLinks.map((pl) =>
                      pl.name === "Logout" ? (
                        <li key={pl.name}>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left block px-4 py-2 rounded text-gray-700 hover:bg-gray-100"
                          >
                            {pl.name}
                          </button>
                        </li>
                      ) : (
                        <li key={pl.name}>
                          <Link
                            href={pl.href}
                            className={`block px-4 py-2 rounded ${
                              isActive(pl.href)
                                ? "text-white bg-blue-600"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {pl.name}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </li>
            ) : (
              <li>
                <Link
                  href="/auth/login"
                  className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
