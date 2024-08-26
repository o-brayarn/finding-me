import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavLinks = ({ isOpen, setIsOpen }) => {
  return (
    <ul
      className={`lg:flex justify-around items-center ${
        isOpen ? "" : "space-x-10 hidden"
      }`}
    >
      <li className="py-4 hover:underline hover:font-bold">
        <Link to="/" onClick={() => isOpen && setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className="py-4 hover:underline hover:font-bold">
        <Link to="/about" onClick={() => isOpen && setIsOpen(false)}>
          About
        </Link>
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
      <li className="py-4 hover:underline hover:font-bold whitespace-nowrap">
        <Link to="/take-action" onClick={() => isOpen && setIsOpen(false)}>
          Take Action
        </Link>
      </li>
      <li className="py-4 hover:underline hover:font-bold whitespace-nowrap">
        <Link to="/story" onClick={() => isOpen && setIsOpen(false)}>
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
  return (
    <nav className="bg-[#2196C0] text-[#FFFFFF] sticky top-0 z-[20] shadow-sm">
      <div className="sm:me-5 sm:ms-5  flex justify-between items-center p-3 flex-wrap">
        <div className="sm:text-2xl text-xl font-thin whitespace-nowrap">
          <h1>
            <Link to="/" className="whitespace-nowrap">
              {" "}
              <span className="border-2 p-1 rounded-md">Finding</span> Me
            </Link>
          </h1>
        </div>

        <NavLinks />

        <div className="flex justify-center items-center gap-8">
          <button
            className={`md:flex border p-1 font-bold sm:text-2xl rounded-xl hidden ${
              !isOpen ? "" : "md:hidden"
            }`}
          >
            Contact
          </button>
          <button className={`${!isOpen ? "" : "hidden"}`}>
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
            <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
