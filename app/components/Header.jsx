"use client"
import { useState } from "react";
import CartButton from "./CartButton.jsx";
import HamburgerButton from "./HamburgerButton.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import Navbar from "./NavBar.jsx";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar.jsx";
import { FaArrowRight } from "react-icons/fa";

const links = [ 
  {
    id: 2,
    name: "All Products",
    href: "/products",
  },
  {
    id: 1,
    name: "Achars",
    href: "/collection/achar",
  },
  {
    id: 6,
    name: "Chutneys",
    href: "/collection/chutney",
  },
  {
    id: 6,
    name: "Murabbas",
    href: "/collection/murabba",
  },
  {
    id: 3,
    name: "About Us",
    href: "/about",
  },
  {
    id: 5,
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header({children, headerText}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
    {children}
    <a href="/products">

    <div className="w-full bg-brandOrange p-2 text-center text-white group transition-all hover:text-[1.05rem] text-md flex gap-2 hover:gap-4 items-center justify-center py-2">
      {headerText}
      <FaArrowRight />
    </div>
    </a>
    <header className="max-w-[1440px] mx-auto pt-7 pb-3 flex items-center gap-[103px] h-[84px] min-[1440px]:h-fit px-4 md:px-8 min-[1440px]:px-28 my-4 justice ">
      <Link href={"/"}>
    <Image
        src="/logo.svg"
        alt="Achars"
        width={120}
        height={120}
        draggable={false}
        className="select-none h-[90%] aspect-square"
        onContextMenu={(e)=>{e.preventDefault()}}
        /> 
        </Link>
      <Navbar links={links} />
      <div className="flex justify-center items-center gap-4 ml-auto w-[13rem]">
      <SearchBar type="meow" />
        <CartButton />
        <HamburgerButton onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </div>
      <MobileNavbar
        links={links}
        isMobileOpen={isMobileOpen}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />
    </header>
    </>
  );
}

// export default Header;