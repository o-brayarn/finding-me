const Join = () => {
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
          <h1 className="text-2xl font-semibold">JOIN OUR FORUMS</h1>
          <h2 className="bg-[#087167] text-center text-xl font-bold uppercase">
            JOIN US
          </h2>
        </div>
      </div>

      <div className="flex justify-start sm:gap-20 gap-8 flex-wrap mt-10 sm:ms-10 ms-5 sm:me-0 me-5">
        <div className="md:w-1/4 sm:w-1/3 sm:block hidden border-2 border-[#06141B] p-2">
          <img src="/images/about.png" className="object-cover h-full w-full" />
        </div>
        <div className="sm:w-1/2 flex justify-center items-center gap-2 sm:gap-8 text-[#06141B]">
          <p>
            The fact is, a mental illness is a disorder of the brain – your
            body’s most important organ – and one in four adults experience
            mental illness in a given year, including depression, bipolar
            disorder, schizophrenia, and PTSD. Like most diseases of the body,
            mental illness has many causes – from genetics to other biological,
            environmental and social / cultural factors.
          </p>
        </div>
      </div>
      <div className="ms-5 me-5 md:ms-10 mt-10">
        <h1 className="text-center text-2xl font-bold">JOIN US</h1>
        <p>
          If you are struggling with any of the above conditions fill in the
          below form to book a slot in our upcoming 12 week awareness programme.
          The information provided will also help us in planning virtual forums
          that we regularly conduct.
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

export default Join;
