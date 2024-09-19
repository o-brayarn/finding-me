import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const NavLinks = ({
  isOpen,
  setIsOpen,
  clickDropdown,
  setClickDropdown,
  isDropdown,
  setIsDropdown,
}) => {
  return (
    <ul
      className={`lg:flex justify-around items-center ${
        isOpen ? "" : "xl:space-x-10 space-x-5 hidden"
      }`}
    >
      <li className="py-4 hover:underline hover:font-bold">
        <Link to="/" onClick={() => isOpen && setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li
        className="relative py-4 hover:underline hover:font-bold"
        onClick={() => setClickDropdown(!clickDropdown)}
      >
        <Link>
          <div className="flex items-center gap-1">
            <span>About</span>
            <IoChevronDown />
          </div>
        </Link>
        {clickDropdown && (
          <ul
            className={`absolute top-full left-0 bg-[#087167] rounded-lg w-max p-2 mt-2 z-10 ${
              clickDropdown ? "block" : "hidden"
            } ${!isOpen ? "shadow-md" : ""}`}
          >
            <li className="font-normal pb-2 hover:underline">
              <Link to="/about-us" onClick={() => isOpen && setIsOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="font-normal py-2 hover:underline">
              <Link to="/team" onClick={() => isOpen && setIsOpen(false)}>
                Our Team
              </Link>
            </li>
            <li className="font-normal py-2 hover:underline">
              <Link to="/history" onClick={() => isOpen && setIsOpen(false)}>
                Our History
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className="py-4 hover:underline hover:font-bold">
        <Link to="/blog" onClick={() => isOpen && setIsOpen(false)}>
          Blog
        </Link>
      </li>
      <li className="py-4 hover:underline hover:font-bold">
        <Link to="/events" onClick={() => isOpen && setIsOpen(false)}>
          Events
        </Link>
      </li>
      <li
        className="relative py-4 hover:underline hover:font-bold whitespace-nowrap"
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <Link>
          <div className="flex items-center gap-1">
            <span>Take Action</span>
            <IoChevronDown />
          </div>
        </Link>
        {isDropdown && (
          <ul
            className={`absolute top-full left-0 bg-[#087167] rounded-lg w-max p-2 mt-2 z-10 ${
              isDropdown ? "block" : "hidden"
            } ${!isOpen ? "shadow-md" : ""}`}
          >
            <li className="font-normal pb-2 hover:underline">
              <Link to="/join" onClick={() => isOpen && setIsOpen(false)}>
                Join Us
              </Link>
            </li>
            <li className="font-normal py-2 hover:underline">
              <Link to="/volunteer" onClick={() => isOpen && setIsOpen(false)}>
                Volunteer
              </Link>
            </li>
            <li className="font-normal py-2 hover:underline">
              <Link
                to="/partner-with-us"
                onClick={() => isOpen && setIsOpen(false)}
              >
                Partner With Us
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li className="py-4 hover:underline hover:font-bold whitespace-nowrap">
        <Link to="/share-your-story" onClick={() => isOpen && setIsOpen(false)}>
          Share Your Story
        </Link>
      </li>
      <li className="lg:hidden py-4">
        <Link to="/contact" onClick={() => isOpen && setIsOpen(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickDropdown, setClickDropdown] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const DisableScroll = ({ open }) => {
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [open]);

    return null;
  };

  return (
    <nav className="bg-[#087167] text-[#FAF5E0] sticky top-0 z-[20] shadow-sm">
      <div className="sm:me-5 sm:ms-5  flex justify-between items-center p-3 flex-wrap">
        <div className="sm:text-2xl text-xl font-medium whitespace-nowrap">
          <Link to="/" className="whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex items-center p-1 rounded-md whitespace-nowrap text-[#087167] bg-[#FAF5E0]">
                <span className="font-bold">FINDIN</span>
                <FaSearch size={18} />
              </div>
              <span className="ms-2">ME</span>
            </div>
          </Link>
        </div>

        <NavLinks
          clickDropdown={clickDropdown}
          setClickDropdown={setClickDropdown}
          isDropdown={isDropdown}
          setIsDropdown={setIsDropdown}
        />

        <div className="flex justify-center items-center sm:gap-8 gap-2">
          <button
            onClick={() => navigate("/contact")}
            className={`md:flex border py-1 px-2 font-bold lg:text-xl rounded-xl hidden ${
              !isOpen ? "" : "md:hidden"
            }`}
          >
            Contact
          </button>
          <button
            className={`${!isOpen ? "" : "hidden"}`}
            onClick={toggleSearch}
          >
            <FaSearch size={20} />
          </button>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? <RiMenu3Fill size={25} /> : <RiCloseLine size={25} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="basis-full flex flex-col items-center justify-center">
            <NavLinks
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              clickDropdown={clickDropdown}
              setClickDropdown={setClickDropdown}
              isDropdown={isDropdown}
              setIsDropdown={setIsDropdown}
            />
          </div>
        )}

        {setIsSearchOpen && <DisableScroll open={isSearchOpen} />}

        {isSearchOpen && (
          <div className="fixed">
            <Search toggleSearch={toggleSearch} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
