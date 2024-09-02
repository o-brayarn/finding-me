import { useNavigate } from "react-router-dom";

const Approach = () => {
  const navigate = useNavigate();
  return (
    <div className="md:ms-10 md:me-10 md:rounded-xl  h-full bg-[#f0ffee] pb-10">
      <div className="md:flex justify-center items-center gap-36 mt-10 sm:pl-10 pl-5 pr-5">
        <div className="lg:w-1/4 md:w-1/2 flex flex-col">
          <h1 className="mt-10 text-[#087167] text-[18px] font-semibold">
            Our Approach
          </h1>
          <h1 className="sm:text-3xl text-2xl font-bold mt-4">
            Let Us Overcome Your Challenges Together
          </h1>
          <p className="mt-4 text-[#4A5C6A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio
            asperiores magni iste sit, voluptate eligendi aliquam distinctio nam
            excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ad odio asperiores magni iste sit, voluptate eligendi aliquam
            distinctio nam excepturi.
          </p>
          <button
            className="w-fit bg-[#087167] text-[#FAF5E0] py-2 px-4 text-xl font-bold rounded-md flex items-center gap-2 mt-4"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>

        <div className="flex flex-col xl:justify-evenly md:justify-start flex-wrap gap-8  ">
          <div className="rounded-md p-4 backdrop-blur-2xl shadow-2xl mt-6 md:mt-1 lg:w-4/5">
            <h1 className="font-bold sm:text-2xl text-xl">Virtual Forums</h1>
            <ul className="list-disc hover:list-inside pl-4 ">
              <li className="pb-2 pt-2">
                Knowledge acquisition from professionals in different fields.
              </li>
              <li>
                Creating Social-Connectedness & Belonging through Peer-sharing
                Support.
              </li>
            </ul>
          </div>

          <div className="rounded-md p-4 backdrop-blur-2xl shadow-2xl mt-6 md:mt-1 lg:w-4/5">
            <h1 className="font-bold sm:text-2xl text-xl">
              12-Week Self-Awareness Programme
            </h1>

            <p className="pl-4 pt-2 ">
              Personal journey, incorporating peer support with the guidance of
              a trained professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
