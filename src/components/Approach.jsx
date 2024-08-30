const Approach = () => {
  return (
    <div className="h-full bg-gradient-to-t from-[#087167] to-[#FAF5E0]">
      <div className="mb-5 flex flex-col justify-center items-center">
        <h1 className="mt-10 text-[#087167] text-[14px] font-semibold">
          Why Choose Us?
        </h1>
        <h1 className="sm:text-3xl text-2xl font-medium ">Our Approach</h1>
      </div>
      <div className="sm:w-3/4 flex justify-around flex-wrap">
        <div className="sm:w-1/3">
          <h1 className="font-bold text-xl">Virtual Forums</h1>
          <ul>
            <li>
              Knowledge acquisition from professionals in different fields.
            </li>
            <li>
              Creating Social-Connectedness & Belonging through Peer-sharing
              Support.
            </li>
          </ul>
        </div>
        <div className="sm:w-1/3">
          <h1 className="font-bold text-xl">
            12-Week Self-Awareness Programme
          </h1>

          <p>
            Personal journey, incorporating peer support with the guidance of a
            trained professional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
