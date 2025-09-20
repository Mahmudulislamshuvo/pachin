import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import logo from "../../../assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-text-Primary text-text-White pt-30 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Style Museum */}
        <div>
          <img src={logo} alt="Footer2logo" className="mb-4" />
          <p className="text-sm text-text-White/80 mb-6">
            Printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="bg-facebook p-2 rounded-24px">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="bg-twitter p-2 rounded-24px">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="bg-pinterest p-2 rounded-24px">
              <FaPinterest size={20} />
            </a>
            <a href="#" className="bg-insta p-2 rounded-24px">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-xl font-bold mb-4">Our Services</h4>
          <ul className="space-y-2 text-text-White/80">
            <li className="transition-colors duration-300 hover:text-background">
              Oil & Gas Engineering
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Automotive Manufacturing
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Chemical Research
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Agricultural Automation
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Mechanical Engineering
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Civil Engineering
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="text-xl font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-text-White/80">
            <li className="transition-colors duration-300 hover:text-background">
              Home
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              About Us
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Our Services
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Our Blog
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Latest News
            </li>
            <li className="transition-colors duration-300 hover:text-background">
              Our Contact
            </li>
          </ul>
        </div>

        {/* Column 4: Subscribe Us */}
        <div>
          <h4 className="text-xl font-bold mb-4">Subscribe Us</h4>
          <p className="text-sm text-text-White/80 mb-4">
            Printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-3 bg-text-White/10 rounded-md placeholder-text-Secondary text-text-White"
            />
          </div>
          <button className="w-full mt-4 p-3 bg-background rounded-6px font-bold text-text-White uppercase">
            Send Data
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-text-Secondary mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-text-White/80">
        <p>Copyright © 2019 | All Right Reserved</p>
        <ul className="flex space-x-4 py-8">
          <li className="cursor-pointer transition-colors duration-300 hover:text-background">
            Help
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-background">
            Privacy & Policy
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-background">
            Services
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-background">
            Blog
          </li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-background">
            FAQ
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;