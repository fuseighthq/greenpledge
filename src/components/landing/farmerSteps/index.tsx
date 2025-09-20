"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    id: 2,
    title: "List Your Farm Cycle",
    description:
      "You share your crop type, location, what’s needed (like fertilizer or tools), and when the harvest is due.",
    image: "media/images/farmsteps/IMG 1.svg",
  },
  {
    id: 3,
    title: "Get Support from the Community",
    description:
      "Once listed, contributors can fund your farm cycle in slots. You’ll receive essential resources – not cash.",
    image: "media/images/farmsteps/Group 1171275606 1.svg",
  },
  {
    id: 4,
    title: "Stay Connected",
    description:
      "We provide regular updates with photos or videos of your progress, and even enable verified farm visits.",
    image: "media/images/farmsteps/step3.svg",
  },
];

export default function FarmerSteps() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === steps.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-[#04710B] text-white py-12 px-6 md:px-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          How GreenPledge Works: For Farmers
        </h2>
        <p className="text-green-200">
          Need Support to Complete Your Farming Cycle? We’ve Got You
        </p>
      </div>

      {/* Step Cards */}
      <div className="flex items-center justify-center gap-6 overflow-hidden">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className={`min-w-[300px] max-w-sm rounded-2xl p-6 shadow-lg transition-all duration-500
            ${
              idx === current
                ? "bg-[#012F38] scale-105 opacity-60"
                : "bg-[#012F38] scale-95 opacity-60"
            }
          `}
          >
            <Image
              src={step.image}
              alt="Farmer Steps"
              width={281}
              height={169}
              className=""
            />
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {step.id.toString().padStart(2, "0")}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
            </div>
            <p className="text-sm text-green-100">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-40 mt-12">
        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 *:cursor-pointer">
          <button
            title="Previous"
            type="button"
            onClick={prev}
            className="p-3 rounded-full bg-green-700 hover:bg-green-600 "
          >
            <ChevronLeft size={20} />
          </button>
          <button
            title="Next"
            type="button"
            onClick={next}
            className="p-3 rounded-full bg-green-700 hover:bg-green-600"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-[#D9A61B] text-white px-6 py-3 rounded-full hover:bg-[#D9A61B]">
            Apply As a Farmer
          </button>
          <button className="flex items-center gap-2">
            <PlayCircle
              size={28}
              className="drop-shadow-2xl drop-shadow-white"
            />
            <span className="font-medium text-[#D9A61A]">Watch The Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
}
