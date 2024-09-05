const AboutUs = () => {
  return (
    <div className="w-auto overflow-hidden bg-[#F5F5F5]">
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
      <div className="md:mt-20 mt-10">
        <h1 className="sm:hidden sm:text-3xl text-2xl font-bold mt-10 md:mt-20 mb-8 text-center">
          Our Mission
        </h1>
        <div className="ms-10 me-5 flex sm:justify-center justify-start sm:flex-nowrap flex-wrap items-start gap-12">
          <div className="lg:rounded-full rounded-3xl">
            <img
              src="/images/vision.png"
              alt="Our Mission"
              className="object-cover object-center lg:rounded-full rounded-3xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h1 className="hidden sm:block lg:text-3xl md:text-2xl text-xl font-bold mt-5 mb-5">
              Our Mission
            </h1>
            <p className="md:text-[20px] sm:text-[18px] text-[16px]">
              To empower young people to take control of their lives by
              providing them with judgment-free spaces to engage in genuine
              conversations about mental health issues to improve their general
              well-being.
            </p>
          </div>
        </div>
      </div>
      {/* OUR GOALS */}
      <div className="bg-[#087167] mt-5 mb-5 pl-8 w-full text-[#FAF5E0] pb-10">
        <h1 className="text-3xl font-bold pt-10 md:pt-20 mb-8 text-center">
          <span className="text-black">Our </span> Goals
        </h1>
        <div className="md:ms-20 ms-5 me-5">
          <p className="md:text-[20px] sm:text-[18px] pb-2 text-start font-light">
            Finding Me is dedicated to ensuring individuals participating in Our
            Forums:
          </p>
          <ul className="list-disc list-inside md:text-[20px] sm:text-[18px] font-sans pb-10 md:pb-20">
            <li className="pb-1.5">Are more self-aware</li>
            <li className="pb-1.5">
              Can confidently deal with life’s challenges and stresses in a
              healthy way
            </li>
            <li className="pb-1.5">
              Meet like-minded individuals with who they can have honest and
              genuine conversations with
            </li>
            <li className="pb-1.5">
              Are empowered to be confident enough to live authentic lives by
              taking charge of their emotions, thoughts and perceptions
            </li>
          </ul>
        </div>
      </div>

      {/* GUIDING BELIEFS AND VALUES */}
    </div>
  );
};

export default AboutUs;
