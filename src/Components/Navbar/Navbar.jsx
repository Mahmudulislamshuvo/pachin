import { useState } from "react";
import logo from "../../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[linear-gradient(65deg,theme(colors.text.White)_30%,theme(colors.background)_30%)] max-sm:bg-[linear-gradient(65deg,theme(colors.text.White)_70%,theme(colors.background)_30%)] max-md:bg-[linear-gradient(65deg,theme(colors.text.White)_70%,theme(colors.background)_30%)] py-2 md:py-4 max-sm:px-5">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-5">
            <ul className="flex gap-8 text-[16px] text-text-White font-medium uppercase">
              <li className="hover:text-background transition-colors">Home</li>
              <li className="hover:text-background transition-colors">
                About Us
              </li>
              <li className="hover:text-background transition-colors">
                Services
              </li>
              <li className="hover:text-background transition-colors">
                Project
              </li>
              <li className="hover:text-background transition-colors">Blog</li>
              <li className="hover:text-background transition-colors">Pages</li>
              <li className="hover:text-background transition-colors">
                Contact
              </li>
            </ul>
            <button className="bg-text-White text-background py-3 px-6 rounded-full font-medium hover:shadow-md transition">
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <HiX className="text-3xl text-text-White" />
              ) : (
                <HiMenu className="text-3xl text-text-White" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-background text-text-White px-6 py-4 space-y-4 transform transition-all duration-500 ease-in-out 
  ${
    isOpen
      ? "max-h-screen opacity-100 scale-y-100"
      : "max-h-0 opacity-0 scale-y-0 overflow-hidden"
  }`}
      >
        <ul className="flex flex-col gap-4 uppercase font-medium">
          <li className="hover:text-text-Secondary transition-colors">Home</li>
          <li className="hover:text-text-Secondary transition-colors">
            About Us
          </li>
          <li className="hover:text-text-Secondary transition-colors">
            Services
          </li>
          <li className="hover:text-text-Secondary transition-colors">
            Project
          </li>
          <li className="hover:text-text-Secondary transition-colors">Blog</li>
          <li className="hover:text-text-Secondary transition-colors">Pages</li>
          <li className="hover:text-text-Secondary transition-colors">
            Contact
          </li>
        </ul>
        <button className="w-full bg-text-White text-background py-3 rounded-full font-medium hover:shadow-md transition">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Navbar;
