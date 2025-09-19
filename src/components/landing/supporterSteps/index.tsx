"use client";

const steps = [
  {
    number: "01",
    title: "Choose a Farm Cycle",
    description:
      "Browse real farmer profiles, see what they’re planting, their timeline, and what support they need.",
  },
  {
    number: "02",
    title: "Fund a Farming Slot",
    description:
      "Support with as little as ₦10,000 or more. Each slot covers specific resources like fertilizer or harvesting equipment.",
  },
  {
    number: "03",
    title: "Get Farm Updates",
    description:
      "Watch your impact grow with regular reports, images, and updates. Some farms even allow verified visits.",
  },
  {
    number: "04",
    title: "Receive Produce as Appreciation",
    description:
      "At harvest, you get your fair share rice bags, maize, beans, and more based on your support level.",
  },
  {
    number: "05",
    title: "Use It or Resell It",
    description:
      "You can stock your pantry, share with loved ones, or start a small food resale side hustle.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-[url(/media/bg/Grass.svg)] py-12 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          How GreenPledge Works: For Supporters
        </h2>
        <p className="text-green-600 mt-2 font-medium">
          Support a Farm. Share in the Harvest.
        </p>
      </div>

      {/* Steps Row 1 */}
      <div className="grid md:grid-cols-3 gap-8 relative">
        {steps.slice(0, 3).map((step, idx) => (
          <div
            key={idx}
            className="p-6 hover:shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {step.number}
            </h3>
            <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Steps Row 2 */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {steps.slice(3).map((step, idx) => (
          <div
            key={idx}
            className=" p-6 hover:shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              {step.number}
            </h3>
            <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
