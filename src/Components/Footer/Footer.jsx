import { ImFacebook } from "react-icons/im";
import logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        // todo image link will replace here with imported name
        backgroundImage: `url(${"https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-bannerLayer"></div>

      {/* Content*/}
      <div className="container relative z-10">
        {/*  Note:If don't use relative contents are go down inside the layer z-index not working without relative */}
        <div className="py-20 text-text-White text-center flex flex-col items-center justify-center px-20">
          <img src={logo} alt="logo" className="mb-8" />
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
          <div className="flex items-center justify-between py-10">
            <p className="">Copyright © 2019 | All Right Reserved</p>
            <ul className="flex items-center gap-x-8">
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
