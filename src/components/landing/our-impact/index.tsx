import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function OurImpact() {
  return (
    <div>
      <div>
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">Our Impact</h3>
          <p className="text-xl text-green-600">
            Real Farmers. Real Food. Real Change.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {/* First Card */}
            <div className="min-w-[300px] max-w-sm p-6">
              <div className="relative">
                {/* Image */}
                <Image
                  src="/media/images/frames/Rectangle 34624509.svg"
                  alt="Youtube video placeholder"
                  className="rounded-lg"
                  priority
                  width={541}
                  height={546}
                />

                {/* Play Button Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-md">
                    <Play size={22} />
                  </div>
                </div>

                {/* Caption at Bottom */}
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center text-sm px-4">
                  Watch the 90-sec Story of Sarah & Her Rice Farm
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="min-w-[300px] max-w-sm p-6">
              <div className="relative">
                {/* Image */}
                <Image
                  src="/media/images/frames/Rectangle 34624509.svg"
                  alt="Youtube video placeholder"
                  className="rounded-lg"
                  priority
                  width={541}
                  height={546}
                />

                {/* Caption at Center */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <div className="text-white text-sm space-y-2">
                    <p>
                      "I supported with just ₦15,000 and got two full bags of
                      rice during the harvest. It felt personal, not like some
                      distant donation.”
                    </p>
                    <p className="font-semibold">Amina, Magaji</p>
                    <p className="text-xs">Local Food Seller, Lagos</p>
                  </div>
                </div>

                {/* Play Button Bottom Right */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold shadow-md">
                    <Play size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center gap-6 py-6">
          <p>Be Part of the Next Impact Story</p>
          <Link
            href="/support"
            className="bg-gradient-to-b from-[#04710B] to-[#009726] hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 w-[306px]"
          >
            Support a Farm Cycle Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
