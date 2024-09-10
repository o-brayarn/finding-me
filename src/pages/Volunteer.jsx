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
    </div>
  );
};

export default Volunteer;
