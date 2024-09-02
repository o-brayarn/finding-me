import { useState } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="text-[#FAF5E0] bg-[url('/images/hero.png')] h-screen w-auto lg:h-[680px] bg-cover bg-center">
      <div className="backdrop-brightness-[0.30] h-full flex justify-center items-center">
        <div className="lg:ms-40 sm:ms-20 sm:me-20 ms-5 me-5 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-7xl lg:w-3/4 text-5xl font-bold">
              Transform your thoughts,{" "}
              <span className="text-[#087167] ">transform your world.</span>
            </h1>
            {/* <h1 className="lg:text-7xl lg:w-1/3 text-5xl font-bold">
              You are in{" "}
              <span className="text-[#087167] ">safe hands.</span>
            </h1> */}
            <p className="lg:w-3/5 w-full sm:text-[18px] font-medium leading-relaxed">
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
              onClick={() => navigate("/about-us")}
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
