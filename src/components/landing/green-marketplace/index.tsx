import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MarketPlace() {
  return (
    <section className="bg-white mt-16 md:grid md:grid-cols-2">
      {/* Left: Images */}
      <div className="grid grid-rows-1 ">
        <Image
          src="/media/images/frames/Greenpledgesellers.svg"
          alt="Green Marketplace sellers"
          width={778}
          height={557}
          className="w-full  "
        />
        <Image
          src="/media/images/frames/bariga-lagos-nigeria-july-17-600w-2179230797 2.svg"
          alt="Green Marketplace shop"
          width={634}
          height={420}
          className="w-full  "
        />
      </div>

      {/* Right: Text */}
      <div className="bg-[#003C32] text-white flex flex-col justify-center px-8 md:px-16 py-12 space-y-8">
        {/* Heading */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">Green MarketPlace</h3>
          <p className="text-green-200 mt-2">
            Turn Support Into Real Food. Earn Groceries with GreenPoints.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold flex items-start gap-2">
              <span className="text-2xl font-bold text-green-400">1</span>
              Earn GreenPoints Easily
            </h4>
            <ul className="ml-8 text-sm text-green-100 list-disc">
              <li>Support a farm cycle and Earn 3 GreenPoints</li>
              <li>Refer a friend who contributes and Earn 2 GreenPoints</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-start gap-2">
              <span className="text-2xl font-bold text-green-400">2</span>
              Claim and Receive
            </h4>
            <p className="ml-8 text-sm text-green-100">
              Once you hit the required points, choose your items, confirm your
              delivery location, and we’ll send it to you as appreciation.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold flex items-start gap-2">
              <span className="text-2xl font-bold text-green-400">3</span>
              Redeem for Everyday Essentials
            </h4>
            <p className="ml-8 text-sm text-green-100">
              Your points unlock useful household groceries from palm oil and
              salt to seasoning cubes and garri.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/marketplace"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2"
          >
            Go To MarketPlace <ArrowRight size={18} />
          </Link>

          <Link
            href="/signup"
            className="text-green-300 hover:text-green-100 underline flex items-center gap-2"
          >
            Join & Start Earning GreenPoints <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
