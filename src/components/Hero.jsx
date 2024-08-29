const Hero = () => {
  return (
    <div className="text-white bg-[url('/images/hero.png')] h-screen w-auto lg:h-[670px] bg-cover bg-center">
      <div className="backdrop-brightness-[0.30] h-full flex justify-center items-center">
        <div className="md:ms-12 ms-5 me-5 flex flex-col gap-8">
          <div className="">
            <p className="md:w-1/2 w-full sm:text-[18px] font-medium text-justify leading-relaxed">
              Finding Me Mental Health Wellness (Finding Me) is a youth-led
              mental health organization founded in 2022; our mission is to
              cultivate a judgment-free community for individuals seeking
              awareness of self by creating a safe space that can nurture/enable
              them to thrive in their daily experiences.  We work with trained
              personnel in various fields and mental health professionals to
              support the youth.
            </p>
          </div>
          <div>
            <button className="bg-[#64B454] py-2 px-4 text-xl font-bold rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
