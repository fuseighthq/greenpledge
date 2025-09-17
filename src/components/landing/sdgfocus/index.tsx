import Image from "next/image";

const sdgs = [
  {
    id: 1,
    title: "No Poverty",
    desc: "We encourage grassroots empowerment and economic inclusion.",
    image: "/media/images/icons/file 1.svg",
  },
  {
    id: 2,
    title: "Zero Hunger",
    desc: "We provide households with direct access to quality agricultural produce.",
    image: "/media/images/icons/image 3.svg",
  },
  {
    id: 5,
    title: "Gender Equality",
    desc: "We empower women in agriculture by featuring them in success stories and farm listings.",
    image: "/media/images/icons/image 8-Photoroom 1.svg",
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    desc: "We help smallholder farmers sustain their work and scale responsibly.",
    image: "/media/images/icons/image 4-Photoroom 1.svg",
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    desc: "We enhance local food systems and community resilience against inflation and scarcity.",
    image: "/media/images/icons/image 5-Photoroom 1.svg",
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    desc: "We replace speculative agriculture with transparent, purpose driven support models.",
    image: "/media/images/icons/image 6-Photoroom 1.svg",
  },
];

export default function SdgFocus() {
  return (
    <section className="bg-[#E5F5E9] py-12 px-6 md:px-16">
      <h2 className="text-center heading-h1-regular font-bold mb-12">
        OUR SDG FOCUS
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {sdgs.map((sdg) => (
          <div key={sdg.id} className="flex items-start gap-4">
            <div className="bg-green-600 text-white px-1 py-1 rounded-md text-sm font-bold">
              {sdg.id}
              <Image
                src={sdg.image}
                alt="SDG Icons"
                width={38}
                height={38}
                className=""
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{sdg.title}</h3>
              <p className="text-gray-700 text-sm">{sdg.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
