const Volunteer = () => {
  return (
    <div>
      <div className="relative">
        <div className="h-full w-full brightness-[0.3]">
          <img
            src="/images/volunteer.png"
            alt=""
            className="object-cover sm:h-[470px] h-full w-dvw"
          />
        </div>
        <div className="absolute sm:top-[30%] top-[20%] text-[#FAF5E0] right-[50%] sm:space-y-10 space-y-3 ms-5">
          <h1 className="text-2xl font-semibold">WORK WITH US</h1>
          <h2 className="bg-[#087167] text-center text-xl font-bold uppercase">
            Volunteer
          </h2>
        </div>
      </div>

      <div className="flex justify-start sm:gap-20 gap-8 flex-wrap mt-10 sm:ms-10 ms-5 sm:me-0 me-5">
        <div className="md:w-1/4 sm:w-1/3 sm:block hidden border-2 border-[#06141B] p-2">
          <img src="/images/about.png" className="object-cover h-full w-full" />
        </div>
        <div className="sm:w-1/2 flex flex-col gap-2 sm:gap-8 text-[#06141B]">
          <p>
            Are you a psychiatrist, a psychologist, a counselor or a therapist,
            volunteer with us to mentor some of our members that may be going
            through challenging mental health issues.
          </p>
          <p>
            If interested in this opportunity please fill out the interest form
            below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
