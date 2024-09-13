import { HiChevronDown } from "react-icons/hi";

const Share = () => {
  return (
    <div className="w-full h-full md:ps-10 ps-5 pe-5">
      <div className="flex justify-center items-center flex-wrap md:mt-20 sm:gap-12 gap-5 sm:mt-10 mt-5 bg-[#F5F5F5] text-[#06141B] mb-5">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold md:w-1/3">
          WE’VE TOLD YOU ABOUT US. IF WE'VE EARNED YOUR TRUST, YOU CAN TELL US
          YOUR STORY . . .
        </h1>
        <div className="md:w-1/2 flex flex-col gap-4">
          <p>
            Do you have a positive, entertaining, sad, encouraging, or critical
            story to share? A story that can impact someone else?
          </p>
          <p>Share Your Story with the Finding Me Community.</p>
          <p>
            We all have our own preferences and style for sharing pieces of
            ourselves with those around us. At Finding Me, we encourage each
            individual to self-express in their most authentic voice.
          </p>
          <p>
            Submit your original story, poetry, personal stories, photography,
            drawing/illustrations, non-fiction or fiction.
          </p>
        </div>
      </div>
      <div className="">
        <form className="">
          <button className="block font-bold mb-5">
            Choose a category{" "}
            <span className="text-center">
              <HiChevronDown size={25} className="inline" />
            </span>
          </button>
          <textarea
            placeholder="Write or paste your story here"
            className="block h-[320px] w-full border-2 border-[#087167] rounded-md p-2"
          />
          <div className="flex justify-center items-center mt-5">
            <input
              type="button"
              value="Submit"
              className="block text-[#faf5e0] bg-[#087167] md:px-8 px-5 py-1 md:text-xl rounded-full text-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
