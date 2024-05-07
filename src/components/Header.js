"use client";
import { AlignRight, ArrowBigRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className=" shadow-md py-4 ">
      <div className="flex justify-between px-5 items-center">
        <Link href={"/"}>
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-green-700 px-2 py-1 rounded-md text-white ">
            CareShare
          </h1>
        </Link>
        <div className="hidden md:inline">
          <div className="flex gap-5">
            <Link href={"/"}>
              <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
                Home
              </h2>
            </Link>
            <Link href={"/about"}>
              <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
                About
              </h2>
            </Link>
            <Link href={"/causes"}>
              <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
                Causes
              </h2>
            </Link>
            <Link href={"/blogs"}>
              <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
                Blogs
              </h2>
            </Link>
            <Link href={"/contribution"}>
              <h2 className="text-gray-800 font-semibold hover:scale-110 hover:bg-green-500 transition-all">
                Contributions
              </h2>
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Link href={"/signin"}>
            <button className="bg-green-500 text-white  font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </Link>
          {menuOpen ? (
            <X
              size="30px"
              onClick={toggleMenu}
              className="md:hidden cursor-pointer hover:bg-gray-300 hover:text-green-500 hover:scale-110"
            />
          ) : (
            <AlignRight
              className="md:hidden cursor-pointer  hover:bg-gray-400 hover:text-green-500 hover:scale-110"
              onClick={toggleMenu}
              size="30px"
            />
          )}
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="p-8 m-1 w-full absolute bg-green-500 z-30 md:hidden">
            <div className=" flex flex-col gap-3">
              <Link
                href={"/"}
                onClick={toggleMenu}
                className="flex gap-1 items-center"
              >
                <ArrowBigRight />
                <h2 className="text-gray-800 font-semibold hover:scale-105 p-1 hover:bg-gray-500 transition-all">
                  Home
                </h2>
              </Link>
              <Link
                href={"/about"}
                onClick={toggleMenu}
                className="flex gap-1 items-center"
              >
                <ArrowBigRight />
                <h2 className="text-gray-800 font-semibold hover:scale-105 p-1 hover:bg-gray-500 transition-all">
                  About
                </h2>
              </Link>
              <Link
                href={"/causes"}
                onClick={toggleMenu}
                className="flex gap-1 items-center"
              >
                <ArrowBigRight />
                <h2 className="text-gray-800 font-semibold hover:scale-105 p-1 hover:bg-gray-500 transition-all">
                  Causes
                </h2>
              </Link>
              <Link
                href={"/blogs"}
                onClick={toggleMenu}
                className="flex gap-1 items-center"
              >
                <ArrowBigRight />
                <h2 className="text-gray-800 font-semibold hover:scale-105 p-1 hover:bg-gray-500 transition-all">
                  Blogs
                </h2>
              </Link>
              <Link
                href={"/contribution"}
                onClick={toggleMenu}
                className="flex gap-1 items-center"
              >
                <ArrowBigRight />
                <h2 className="text-gray-800 font-semibold hover:scale-105 p-1 hover:bg-gray-500 transition-all">
                  Contributions
                </h2>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
