import FarmerSteps from "@/components/landing/farmerSteps";
import HowItWorks from "@/components/landing/supporterSteps";
import Hero from "@/components/landing/hero";
import Marquee from "@/components/landing/marquee";
import SdgFocus from "@/components/landing/sdgfocus";
import WhoWeAre from "@/components/landing/who-we-are";
import { OurImpact } from "@/components/landing/our-impact";
import { MarketPlace } from "@/components/landing/green-marketplace";
import { OurBlog } from "@/components/landing/our-blog";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Marquee />
      <SdgFocus />
      <FarmerSteps />
      <HowItWorks />
      <WhoWeAre />
      <OurImpact />
      <MarketPlace />
      <OurBlog />
    </div>
  );
}
