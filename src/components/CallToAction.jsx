import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshake, FaUsers } from "react-icons/fa";
import { IoHandLeft } from "react-icons/io5";

const CallToAction = () => {
  return (
    <div className="h-full md:w-5/6 m-auto mt-10 bg-[#087167]">
      <h1 className="text-white text-center text-4xl font-bold pt-4">
        Get Involved
      </h1>
      <div className="flex justify-around flex-wrap gap-4 pb-10 pt-10">
        <div className="bg-[#FAF5E0]/60 rounded-md flex flex-col justify-center items-center gap-4 lg:w-1/5 md:w-1/4 sm:w-1/3 w-3/5 pt-10 pb-10">
          <BiSolidDonateHeart className="text-[#11212D] text-[40px]" />
          <p className="text-xl font-semibold text-center uppercase">Donate</p>
        </div>
        <div className="bg-[#FAF5E0]/60 rounded-md flex flex-col justify-center items-center gap-4 lg:w-1/5 md:w-1/4 sm:w-1/3 w-3/5 pt-10 pb-10">
          <FaHandshake className="text-[#FAF5E0] text-[40px]" />
          <p className="text-xl font-semibold text-center text-[#087167] uppercase">
            Partner <span className="text-[#06141B]">With</span> Us
          </p>
        </div>
        <div className="bg-[#FAF5E0]/60 rounded-md flex flex-col justify-center items-center gap-4 lg:w-1/5 md:w-1/4 sm:w-1/3 w-3/5 pt-10 pb-10">
          <FaUsers className="text-[#E68B67] text-[40px]" />
          <p className="text-xl font-semibold text-center text-[#087167] uppercase">
            Join <span className="text-[#06141B]">Our</span> Forums
          </p>
        </div>
        <div className="bg-[#FAF5E0]/60 rounded-md flex flex-col justify-center items-center gap-4 lg:w-1/5 md:w-1/4 sm:w-1/3 w-3/5 pt-10 pb-10">
          <IoHandLeft className="text-[#11212D] text-[40px]" />
          <p className="text-xl font-semibold text-center uppercase">
            Volunteer
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
