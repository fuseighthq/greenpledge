import FarmerSteps from "@/components/landing/farmerSteps";
import HowItWorks from "@/components/landing/supporterSteps";
import Hero from "@/components/landing/hero";
import Marquee from "@/components/landing/marquee";
import SdgFocus from "@/components/landing/sdgfocus";
import WhoWeAre from "@/components/landing/who-we-are";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Marquee />
      <SdgFocus />
      <FarmerSteps />
      <HowItWorks />
      <WhoWeAre />
    </div>
  );
}
