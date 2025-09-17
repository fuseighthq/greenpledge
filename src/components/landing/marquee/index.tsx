"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const items = [
  "Transparency",
  "Sustainability",
  "Food Security",
  "Community Empowerment",
  "Mutual Support",
  "Traceable, Tangible Impact",
];

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    // if (marquee) {
    //   marquee.innerHTML += marquee.innerHTML; // duplicate content for infinite loop
    // }
  }, []);

  return (
    <div className="overflow-hidden bg-[#04710B] text-white py-3">
      <div ref={marqueeRef} className="flex whitespace-nowrap infinite-scroll">
        {items.map((item, idx) => (
          <div key={idx} className="mx-8 flex items-center gap-4">
            <span>
              {" "}
              <Image
                src="/media/images/brand-logos/Greenpledgewhite.svg"
                alt="Greenpledge Logo white"
                width={29}
                height={29}
                className=""
              />
            </span>
            <span className="text-lg font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
