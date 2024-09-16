import { HiChevronDown } from "react-icons/hi";

const Events = () => {
  return (
    <div className="h-full w-full text-[#06141B]">
      <div className="relative">
        <div className="h-full w-full brightness-[0.2]">
          <img
            src="/images/volunteer.png"
            alt=""
            className="object-cover sm:h-[470px] h-full w-dvw"
          />
        </div>
        <div className="w-full absolute sm:top-[50%] top-[30%] text-[#FAF5E0] md:ms-10 flex justify-start items-center">
          <h1 className="md:text-3xl text-2xl font-semibold lg:w-1/5 sm:w-1/3 me-5 ms-5">
            Free Your Mind To{" "}
            <span className="text-[#087167] font-bold">Find</span> Your Zen
          </h1>
        </div>
      </div>

      <div className="bg-[#087167]/[30%] pb-10">
        <h1 className="md:text-3xl text-2xl font-bold text-center pt-8 sm:ms-0 ms ms-5">
          UPCOMING EVENTS
        </h1>
        <div className="mt-5 flex sm:flex-row flex-col-reverse justify-between items-center gap-4 flex-wrap md:ms-14 sm:ms-10 ms-5 me-5 lg:me-10">
          <div className="lg:w-1/2 md:w-2/5">
            <h1 className="font-bold sm:text-xl text-[18px] mb-5 text-[#087167]">
              EVENT NAME
            </h1>
            <p className="mb-5 text-[#06141B]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio
              asperiores magni iste sit, voluptate eligendi aliquam distinctio
              nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad odio asperiores magni iste sit, voluptate eligendi
              aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad odio asperiores magni iste sit,
              voluptate eligendi aliquam distinctio nam excepturi.
            </p>
            <div className="flex justify-start flex-wrap sm:gap-14 gap-8 font-semibold mb-5">
              <h2>DATE:</h2>
              <h2>LOCATION:</h2>
              <h2>TICKETS:</h2>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2">
            <img src="/images/about.png" alt="" className="p-4" />
          </div>
        </div>

        <button className="md:ms-14 sm:ms-10 font-semibold">
          More upcoming events...
        </button>
      </div>

      <div>
        <h1 className="md:text-3xl text-2xl font-bold text-center pt-8 sm:ms-0 ms ms-5">
          PAST EVENTS
        </h1>
        <div className="md:ms-14 sm:ms-10 flex items-center mt-5 cursor-pointer">
          <p>
            Sort by:{" "}
            <span className="text-[#06141B]/[60%]"> Default order</span>
          </p>{" "}
          <HiChevronDown size={25} />
        </div>
        <div className="flex sm:flex-row flex-col-reverse justify-between items-center gap-4 flex-wrap md:ms-14 sm:ms-10 ms-5 me-5 lg:me-10">
          <div className="lg:w-1/2 md:w-2/5">
            <h1 className="font-bold sm:text-xl text-[18px] mb-5 text-[#087167]">
              EVENT NAME
            </h1>
            <p className="mb-5 text-[#06141B]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio
              asperiores magni iste sit, voluptate eligendi aliquam distinctio
              nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Ad odio asperiores magni iste sit, voluptate eligendi
              aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Ad odio asperiores magni iste sit,
              voluptate eligendi aliquam distinctio nam excepturi.
            </p>
            <div className="flex justify-start flex-wrap sm:gap-14 gap-8 font-semibold mb-5">
              <h2>DATE:</h2>
              <h2>LOCATION:</h2>
              <h2>TICKETS:</h2>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2">
            <img src="/images/about.png" alt="" className="p-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
