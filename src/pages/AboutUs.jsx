const AboutUs = () => {
  return (
    <div className="w-auto overflow-hidden">
      <div className="relative">
        <div className="h-full sm:h-[] w-full brightness-[0.30]">
          <img
            src="/images/about.png"
            alt="people"
            className="object-cover sm:h-[530px] h-full w-dvw"
          />
        </div>
        <div className="absolute sm:top-[30%] top-[20%] text-[#FAF5E0] md:ms-20 sm:ms-10 ms-5 me-5">
          <h1 className="text-xl font-bold lg:text-4xl md:text-3xl sm:text-2xl">
            About <span className="text-[#087167]">FINDING ME</span>
          </h1>
          <p className="lg:w-2/5 md:w-3/4 sm:w-4/5 sm:text-[20px] text-[16px] mt-5">
            Our vision is to be the go-to platform in Africa for mental health
            wellness for individuals seeking to be understood without judgement
            through inclusivity, shared experiences and support.
          </p>
        </div>
      </div>
      {/* OUR MISSION */}
      <div>
        <h1>Our Mission</h1>
        <div className="ms-10 me-5 flex justify-between gap-8">
          <div className="">
            <img src="/images/vision.png" alt="" className="rounded-tl-3xl" />
          </div>

          <p className="lg:w-1/2">
            To empower young people to take control of their lives by providing
            them with judgment-free spaces to engage in genuine conversations
            about mental health issues to improve their general well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
