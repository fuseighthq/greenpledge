"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[url(/media/bg/Stars.svg)] bg-no-repeat  bg-center py-20 px-6 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          Support a Farm Cycle, Receive Farm Produce- <br />
          Secure Your Food Future
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Too many families are paying more and getting less. With GreenPledge,
          your support helps smallholder farmers complete their season and you
          receive quality farm produce in return.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/support"
            className="bg-gradient-to-b from-[#04710B] to-[#009726] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition"
          >
            SUPPORT A FARMER <ArrowRight size={18} />
          </Link>
          <Link
            href="/list-farm"
            className="border border-green-600 hover:bg-green-50 text-green-700 font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition"
          >
            LIST YOUR FARM <ArrowRight size={18} />
          </Link>
        </div>

        {/* Images Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="relative w-full h-[376px] rounded-2xl overflow-hidden">
            <Image
              src="media/images/frames/Farmer1.svg"
              alt="Farmer holding rice"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[376px] rounded-2xl overflow-hidden">
            <Image
              src="media/images/frames/RiceCrop.svg"
              alt="Growing crops"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[376px] rounded-2xl overflow-hidden">
            <Image
              src="media/images/frames/Womanfarmer.svg"
              alt="Woman farmer smiling"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-[376px] rounded-2xl overflow-hidden">
            <Image
              src="media/images/frames/Farmer2.svg"
              alt="Farmer with child"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
