import { FaSearch } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";

const Search = ({ toggleSearch }) => {
  return (
    <div className="flex justify-center items-start pt-40 bg-[#087167]/[30%] fixed inset-0 bg-opacity-80 backdrop-blur-sm z-40">
      <div className="relative block w-3/4">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="sm:h-5 sm:w-5 h-4 w-4 fill-slate-300">
            <FaSearch className="fill-slate-500" />
          </svg>
        </span>
        <input
          className="placeholder:italic sm:placeholder:text-[14px] placeholder:text-[12px] placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm text-black "
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
      <button onClick={toggleSearch} className="flex items-center ml-5">
        <RiCloseLine size={40} />
      </button>
    </div>
  );
};

export default Search;
