import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaSearch,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-[#087167] text-[#FAF5E0]">
      <div className="mt-10 pt-10 sm:flex md:justify-evenly sm:flex-wrap md:ms-0  gap-8 space-y-2 grid place-content-start ms-10">
        <div className="flex items-center sm:text-2xl text-xl font-thin whitespace-nowrap">
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

        <div className="flex flex-col gap-2">
          <h1 className="sm:text-2xl text-xl font-bold">Our Impacts</h1>
          <ul className="flex flex-col gap-3 mt-2 text-[14px]">
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Our Blog</Link>
            </li>
            <li>
              <Link>Empowering the Youth</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="sm:text-2xl text-xl font-bold">Quick Links</h1>
          <ul className="flex flex-col gap-3 mt-2 text-[14px]">
            <li>
              <Link>Our Programs</Link>
            </li>
            <li>
              <Link to="/partner-with-us">Partner With Us</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li>
              <Link to="/story">Share Your Story</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="sm:text-2xl text-xl font-bold">About Us</h1>
          <ul className="flex flex-col gap-3 mt-2 text-[14px]">
            <li>
              <Link to="/history">Our History</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link>Core Values</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h1 className="sm:text-2xl text-xl font-bold">Contacts</h1>
          <div className="flex justify-start gap-3">
            <a href="" className="">
              <FaFacebook />
            </a>
            <a href="" className="">
              <FaXTwitter />
            </a>
            <a href="" className="">
              <FaInstagram />
            </a>
            <a href="" className="">
              <FaLinkedin />
            </a>
            <a href="" className="">
              <FaYoutube />
            </a>
            <a href="" className="">
              <FaTiktok />
            </a>
          </div>
          <div className="flex justify-start items-center gap-1">
            <span>
              <MdEmail />{" "}
            </span>
            <p className="text-[14px]">findingme@gmail.com</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <span>
              <FaPhoneAlt />{" "}
            </span>
            <p>+2547****</p>
          </div>
        </div>
      </div>
      <div className="border-t flex justify-center items-center p-2 mt-6">
        <p className="text-[14px]">
          Copyright &copy; {date}. Made with ❤️ by{" "}
          <a
            href="https://ogeda.vercel.app"
            className="text-[#86C7D6] underline"
          >
            brayarn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
