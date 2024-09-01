import { useState } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-[#FAF5E0] bg-[url('/images/hero.png')] h-screen w-auto lg:h-[680px] bg-cover bg-center">
      <div className="backdrop-brightness-[0.30] h-full flex justify-center items-center">
        <div className="md:ms-40 ms-5 me-5 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl md:w-1/5 font-bold">
              You are <span className="text-[#087167] ">in safe hands.</span>
            </h1>
            <p className="md:w-1/2 w-full sm:text-[18px] font-medium leading-relaxed">
              Finding Me Mental Health Wellness (Finding Me) is a youth-led
              mental health organization founded in 2022; our mission is to
              cultivate a judgment-free community for individuals seeking
              awareness of self by creating a safe space that can nurture/enable
              them to thrive in their daily experiences. We work with trained
              personnel in various fields and mental health professionals to
              support the youth.
            </p>
          </div>
          <div>
            <button
              className="bg-[#087167] hover:bg-[#FAF5E0] hover:text-[#087167] py-2 px-4 text-xl font-bold rounded-md flex items-center gap-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Learn More
              <span className="text-2xl">
                {!isHovered ? <GoArrowRight /> : <GoArrowUpRight />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
