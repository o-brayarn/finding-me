import { FaSearch } from "react-icons/fa";

const Search = () => {
  const filteredItems = () => {};
  return (
    <div className="flex justify-center items-center bg-[#FFFFFF] w-1/3 shadow-md">
      <div className="flex flex-col justify-center">
        <div>
          <input type="text" placeholder="Find anything..." />
          <FaSearch />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Search;
