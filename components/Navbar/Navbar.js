"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black fixed top-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold">
            <Link href="/">JobHub</Link>
          </div>
          <div className="hidden md:flex space-x-4">
          <Link href="/admin/jobs" className="text-white">
              Go to Admin
            </Link>
          <Link href="/create-resume" className="text-white">
              Create Resume
            </Link>
            <Link href="/jobs" className="text-white">
              Jobs
            </Link>
            <Link href="/ats" className="text-white">
              ATS Score
            </Link>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden space-y-2">
            <Link href="/jobs" className="text-white">
              Jobs
            </Link>
            <Link href="/ats" className="text-white">
              ATS Score
            </Link>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
