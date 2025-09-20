"use client";

import { PlayCircle } from "lucide-react";
import Image from "next/image";

// Data object
const whoWeAreData = {
  heading: "Who We Are",
  subheading:
    "We’re Not an Investment Platform. We’re a Food Support Movement.",
  paragraphs: [
    "At GreenPledge, we believe every farmer deserves to finish what they started and every household deserves access to real food, not inflated prices.",
    "We’re the first digital platform powered by agrocooperatives that connects everyday people directly with real, verified smallholder farmers across Nigeria.",
    "When you support a farming cycle, you’re not chasing returns—you’re helping a farmer harvest, and you receive farm produce in return.",
  ],
  teamImg: "/media/images/frames/GreenpledgeTeam.svg",
  cta: {
    label: "Learn More",
    href: "#learn-more",
  },
};

export default function WhoWeAre() {
  return (
    <section className="relative px-6 md:px-12 lg:px-20 bg-white">
      <div className="mb-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="cursor-pointer bg-[#04710B] border-green-100/60 shadow-xl border-4 text-white px-6 py-3 rounded-full hover:bg-[#04710B]">
            Apply As a Farmer
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <PlayCircle
              size={28}
              className="drop-shadow-2xl drop-shadow-white"
            />
            <span className="font-medium text-text-black">Watch The Demo</span>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="relative inline-block">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-green-600 rounded-lg"></div>
            <Image
              src={whoWeAreData.teamImg}
              alt="GreenPledge Team"
              className="rounded-lg relative z-10"
              priority
              width={541}
              height={546}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="bg-[url(/media/bg/Group.svg)] bg-no-repeat bg-center h-[605px]">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {whoWeAreData.heading}
          </h2>
          <p className="text-gray-700 font-semibold mb-4">
            {whoWeAreData.subheading}
          </p>

          {whoWeAreData.paragraphs.map((text, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4">
              {text}
            </p>
          ))}

          {/* CTA Button */}
          <a
            href={whoWeAreData.cta.href}
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            {whoWeAreData.cta.label}
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
