"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // toggle menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // pathname for current nav
  const currentPath = usePathname();

  // router
  const router = useRouter();

  const pages = [
    { name: "Overview", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Resource", path: "/resource" },
  ];

  const isActive = (path) => {
    return currentPath === path;
  };

  // images
  const logo = "/images/logo.png";
  return (
    <header
      className={`z-40 mb-20 flex justify-between gap-10 align-middle lg:p-0 lg:px-8 p-3 transition duration-700 ease-in-out w-full items-center bg-white bg-opacity-90 rounded-full ${
        sticky
          ? "!fixed !z-[9999] bg-black bg-opacity-40 shadow-sticky backdrop-blur-md !transition align-middle items-center"
          : "absolute"
      }`}
    >
      <div className="flex gap-10 justify-be align-middle items-center">
        <button className="rounded-full">
          <Image
            src={logo}
            width="100"
            height="100"
            alt=""
            className="rounded-full w-10"
          />
        </button>
      </div>
      <div className="p-3 rounded-full">
        <nav className="flex gap-8 align-middle items-center w-full">
          <ul className="lg:hidden 2xl:flex flex sm:hidden md:hidden gap-10 align-middle items-center w-full overflow-x-auto max-md:hidden font-semibold p-5">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  href={page.path}
                  alt={page.name}
                  className={
                    isActive(page.path)
                      ? "active p-3 px-6 "
                      : "hover:font-bold hover:text-gray-600"
                  }
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-8 align-middle items-center">
        <button className="bg-black text-white p-3 px-6 rounded-full">
          Get started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
