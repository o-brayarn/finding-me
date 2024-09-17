const AboutUs = () => {
  return (
    <div className="w-auto overflow-hidden bg-[#F5F5F5]">
      {/* Header */}
      <div className="relative">
        <div className="h-full w-full brightness-[0.30]">
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
      <div className="md:pt-20 pt-10 pb-10">
        <h1 className="sm:hidden md:text-5xl sm:text-3xl text-2xl font-bold mt-10 md:mt-20 mb-8 text-center">
          Our Mission
        </h1>
        <div className="ms-10 me-5 flex sm:justify-center justify-start items-center sm:flex-nowrap flex-wrap gap-12">
          <div className="lg:rounded-full xl:w-1/3 lg:w-1/2 sm:w-3/4 rounded-md">
            <img
              src="/images/volunteer.png"
              alt="Our Mission"
              className="object-cover object-center rounded-md"
            />
          </div>
          <div className="lg:w-1/2 sm:w-2/3">
            <h1 className="hidden sm:block md:text-5xl sm:text-3xl text-2xl font-bold mt-5 mb-5">
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
      <div className="bg-[#087167] pt-5 mb-5 pl-8 md:me-10 md:ms-10 rounded-xl text-[#FAF5E0] pb-10">
        <h1 className="md:text-5xl sm:text-3xl text-2xl  font-bold pt-10 md:pt-20 mb-8 text-center">
          Our Goals
        </h1>
        <div className="md:ms-20 ms-5 me-5">
          <p className="md:text-[20px] sm:text-[18px] pb-2 text-start font-light">
            Finding Me is dedicated to ensuring individuals participating in Our
            Forums:
          </p>
          <ul className="list-disc list-inside sm:text-[18px] font-extralight pb-10 md:pb-20">
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
      <div>
        <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold pt-10 mb-8 text-center">
          Our Guiding Beliefs & Values
        </h1>
        <p className="md:ms-20 sm:10 ms-5 me-5">
          We all deserve a supportive and respectful environment to express our
          emotions and someone to listen to us. Finding Me brings like-minded
          individuals together in shared spaces to support one another and
          normalize discussions about mental health. We accomplish this by
          upholding the following values and beliefs:
        </p>
        <div className="md:grid grid-cols-2 justify-items-center content-center  md:ms-10 ms-5 md:mt-8 mt-5">
          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">Visionary</h1>
            <p className="pt-2 font-extralight">
              We have a clear idea of the future we want. We uphold this ideal
              by encouraging our participants to embrace this belief to build
              the future they want by taking charge of their lives while coping
              with the stresses of life.
            </p>
          </div>

          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">Openness</h1>
            <p className="pt-2 font-extralight">
              Opening individuals to new experiences- uncomfortable and the
              unfamiliar- enabling them to pay attention to their inner
              feelings, and embracing their authentic selves. 
            </p>
          </div>

          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">Integrity</h1>
            <p className="pt-2 font-extralight">
              We firmly adhere to the morals and standards we set.
            </p>
          </div>

          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">
              Confidentiality
            </h1>
            <p className="pt-2 font-extralight">
              Sincerity in how we treat each other every day and acceptance of
              everyone's right to privacy. We do not disclose matters discussed
              in forums/sessions.  
            </p>
          </div>

          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">Empathy</h1>
            <p className="pt-2 font-extralight">
              We recognize, understand and acknowledge each person’s journey to
              self-discovery and healing.
            </p>
          </div>

          <div className="md:w-3/4 gap-4 mt-4 divide-y divide-[#087167]">
            <h1 className="md:text-2xl text-xl font-semibold">Service</h1>
            <p className="pt-2 font-extralight">
              We are keen on providing quality in what we do. We also empower
              individuals to speak up and participate in their care and the care
              of others through service to humanity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
