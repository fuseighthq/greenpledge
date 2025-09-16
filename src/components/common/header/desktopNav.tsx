"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Icon } from '@iconify/react';

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="">
          <div className="" />
          <Image
            src="/media/images/brand-logos/greenpledge-logo.svg"
            alt="Greenpledge Logo"
            width={190}
            height={100}
            className=""
          />
        </div>
        <nav className="hidden md:flex items-center gap-6 bg-[#012F38] px-6 py-2 rounded-full text-white">
          <Link
            href="/"
            className="px-3 py-1 rounded-full bg-[#CBEAB0] text-[#052C3B] font-medium"
          >
            Home
          </Link>
          <div className="relative">
            <button
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About Us <ChevronDown size={16} />
            </button>
            {aboutOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md rounded-md w-40 text-[#052C3B]">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Our Story
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Team
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setMarketOpen(!marketOpen)}
            >
              Market Place <ChevronDown size={16} />
            </button>
            {marketOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-md rounded-md w-40 text-[#052C3B]">
                <Link
                  href="/market/crops"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Crops
                </Link>
                <Link
                  href="/market/tools"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tools
                </Link>
              </div>
            )}
          </div>

          <Link href="/community" className="hover:underline">
            Community
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="border border-[#012F38] px-4 py-1 rounded-full flex items-center gap-1 text-sm"
          >
            <span>
              {/* <Image
                src="/media/images/icons/lets-icons_user-light.svg"
                alt="a user icon"
                width={30}
                height={30}
                className=""
              /> */}
              <Icon icon="tabler:user"/>
            </span>{" "}
            Login
          </Link>
          <Link
            href="/support"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-md"
          >
            SUPPORT A FARMER →
          </Link>
        </div>
      </div>
    </header>
  );
}
