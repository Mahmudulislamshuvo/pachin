import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import Logo from "../CommonComponents/Logo";
import footer from "../../assets/Images/Footer.jpg";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        // todo image link will replace here with imported name
        backgroundImage: `url(${footer})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-bannerLayer"></div>

      {/* Content*/}
      <div className="container relative z-10">
        {/*  Note:If don't use relative contents are go down inside the layer z-index not working without relative */}
        <div className="py-20 text-text-White text-center flex flex-col items-center justify-center px-5 md:px-20">
          <Logo css="text-White" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </p>
          <div className="flex gap-x-10 text-text-White pt-15">
            <FaFacebookF className="h-5 w-5 hover:text-background transition-all duration-300 ease-in-out" />
            <FaTwitter className="h-5 w-5 hover:text-background transition-all duration-300 ease-in-out" />
            <FaPinterestP className="h-5 w-5 hover:text-background transition-all duration-300 ease-in-out" />
            <FaInstagram className="h-5 w-5 hover:text-background transition-all duration-300 ease-in-out" />
          </div>
        </div>
        <div className="border-t border-text-Secondary text-text-White">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-5 md:py-10 px-5 md:px-0 text-center md:text-left">
            <p className="mb-2 md:mb-0">
              Copyright © 2019 | All Right Reserved
            </p>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 md:gap-x-8">
              <li className="hover:text-background transition-all duration-300 ease-in-out">
                Help
              </li>
              <li className="hover:text-background transition-all duration-300 ease-in-out">
                Privacy & Policy
              </li>
              <li className="hover:text-background transition-all duration-300 ease-in-out">
                Services
              </li>
              <li className="hover:text-background transition-all duration-300 ease-in-out">
                Blog
              </li>
              <li className="hover:text-background transition-all duration-300 ease-in-out">
                FAQ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
