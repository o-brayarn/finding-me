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
      <div className="ms-5 me-5 md:ms-10 mt-10">
        <h1 className="text-center text-2xl font-bold">VOLUNTEER WITH US</h1>
        <p>
          Volunteers bring fresh perspectives and help us extend our impact to
          hundreds more living with mental health issues in Kenya. From serving
          as mentors to helping couch our youths on how they can become mentally
          aware of what they are going through, volunteers are key to what we
          do, and we are always in search of individuals who are interested in
          bringing their unique skills to volunteer with Finding Me.{" "}
        </p>
        <form className="mx-auto mt-5 border-2 border-[#087167] md:w-3/4 flex flex-col gap-4 p-8">
          <div className="flex justify-start items-center flex-wrap gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
          </div>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
          </div>
          <div className="flex justify-start items-center flex-wrap gap-4">
            <input
              type="text"
              placeholder="City/State"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-2/5 w-full ps-2 bg-inherit"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Purpose/How can you contribute to Finding Me?"
              className="border border-[#06141B] rounded pt-2 pb-2 sm:w-4/5 w-full mb-8 ps-2 bg-inherit"
            />
            <input
              type="button"
              value="SEND"
              className="block bg-[#087167] text-center text-[#FAF5E0] px-4 py-1.5 font-bold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
