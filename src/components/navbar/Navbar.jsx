"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  const session = useSession();

  return (
    <nav className="h-[100px] flex justify-between items-center">
      <Link href="/" className="font-bold text-2xl">
        lamamia
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
        {session.status === "authenticated" && (
          <button
            onClick={signOut}
            className="px-3 py-2 cursor-pointer text-white rounded bg-green-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
