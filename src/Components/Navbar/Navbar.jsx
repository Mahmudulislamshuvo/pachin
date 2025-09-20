import { useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Logo from "../CommonComponents/Logo";

const Navbar = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="bg-[linear-gradient(65deg,theme(colors.text.White)_30%,theme(colors.background)_30%)] max-sm:bg-[linear-gradient(65deg,theme(colors.text.White)_70%,theme(colors.background)_30%)] max-md:bg-[linear-gradient(65deg,theme(colors.text.White)_70%,theme(colors.background)_30%)] py-2 md:py-4 max-sm:px-5">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-5">
            <ul className="flex gap-8 text-[16px] text-text-White font-medium uppercase">
              <li
                onClick={() => setPage("aboutus")}
                className="cursor-pointer transition-colors"
              >
                About Us
              </li>

              {/* Services */}
              <li className="cursor-pointer transition-colors relative group flex items-center gap-x-1">
                Services
                {/* <HiChevronDown className="text-lg" />
                <ul className="absolute left-0 top-full mt-2 py-2 w-50 bg-text-White text-text-Primary opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Services 1
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Services 2
                  </li>
                  <li
                    onClick={() => setPage("service")}
                    className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White"
                  >
                    Service Details
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White"></li>
                </ul> */}
              </li>

              {/* Project */}
              <li className="cursor-pointer transition-colors relative group flex items-center gap-x-1">
                Project
                {/* <HiChevronDown className="text-lg" />
                <ul className="absolute left-0 top-full mt-2 py-2 w-50 bg-text-White text-text-Primary opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Project 1
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Project 2
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Project 3
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Project 4
                  </li>
                </ul> */}
              </li>

              {/* Blog */}
              <li className="cursor-pointer transition-colors relative group flex items-center gap-x-1">
                Blog
                {/* <HiChevronDown className="text-lg" />
                <ul className="absolute left-0 top-full mt-2 py-2 w-50 bg-text-White text-text-Primary opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Blog 1
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Blog 2
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Blog 3
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Blog 4
                  </li>
                </ul> */}
              </li>

              {/* Pages */}
              <li className="cursor-pointer transition-colors relative group flex items-center gap-x-1">
                Pages
                {/* <HiChevronDown className="text-lg" />
                <ul className="absolute left-0 top-full mt-2 py-2 w-50 bg-text-White text-text-Primary opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Pages 1
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Pages 2
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Pages 3
                  </li>
                  <li className="px-6 py-2 hover:bg-background cursor-pointer hover:text-text-White">
                    Pages 4
                  </li>
                </ul> */}
              </li>

              <li className="cursor-pointer transition-colors">Contact</li>
            </ul>
            <button className="bg-text-White text-background py-3 px-6 rounded-24px font-medium hover:shadow-card transition">
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
        <ul className="flex flex-col gap-y-2 uppercase font-medium">
          {/* Home */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu("home")}
          >
            Home
            <HiChevronDown
              className={`transition-transform ${
                openMenu === "home" ? "rotate-180" : ""
              }`}
            />
          </li>
          <div
            className={`pl-6 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              openMenu === "home"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li className="hover:text-text-Secondary">Home 1</li>
            <li className="hover:text-text-Secondary">Home 2</li>
            <li className="hover:text-text-Secondary">Home 3</li>
          </div>

          {/* About */}
          <li className="hover:text-text-Secondary transition-colors">
            About Us
          </li>

          {/* Services */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu("services")}
          >
            Services
            <HiChevronDown
              className={`transition-transform ${
                openMenu === "services" ? "rotate-180" : ""
              }`}
            />
          </li>
          <div
            className={`pl-6 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              openMenu === "services"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li className="hover:text-text-Secondary">Services 1</li>
            <li className="hover:text-text-Secondary">Services 2</li>
            <li className="hover:text-text-Secondary">Services 3</li>
          </div>

          {/* Project */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu("project")}
          >
            Project
            <HiChevronDown
              className={`transition-transform ${
                openMenu === "project" ? "rotate-180" : ""
              }`}
            />
          </li>
          <div
            className={`pl-6 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              openMenu === "project"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li className="hover:text-text-Secondary">Project 1</li>
            <li className="hover:text-text-Secondary">Project 2</li>
            <li className="hover:text-text-Secondary">Project 3</li>
          </div>

          {/* Blog */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu("blog")}
          >
            Blog
            <HiChevronDown
              className={`transition-transform ${
                openMenu === "blog" ? "rotate-180" : ""
              }`}
            />
          </li>
          <div
            className={`pl-6 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              openMenu === "blog"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li className="hover:text-text-Secondary">Blog 1</li>
            <li className="hover:text-text-Secondary">Blog 2</li>
            <li className="hover:text-text-Secondary">Blog 3</li>
          </div>

          {/* Pages */}
          <li
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleMenu("pages")}
          >
            Pages
            <HiChevronDown
              className={`transition-transform ${
                openMenu === "pages" ? "rotate-180" : ""
              }`}
            />
          </li>
          <div
            className={`pl-6 space-y-2 text-sm transition-all duration-300 ease-in-out overflow-hidden ${
              openMenu === "pages"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <li className="hover:text-text-Secondary">Pages 1</li>
            <li className="hover:text-text-Secondary">Pages 2</li>
            <li className="hover:text-text-Secondary">Pages 3</li>
          </div>

          <li className="hover:text-text-Secondary transition-colors">
            Contact
          </li>
        </ul>

        <button className="w-full bg-text-White text-background py-3 rounded-24px font-medium hover:shadow-box-shadow transition">
          GET A QUOTE
        </button>
      </div>
    </div>
  );
};

export default Navbar;
