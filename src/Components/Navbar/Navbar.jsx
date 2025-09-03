import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-[linear-gradient(65deg,theme(colors.text.White)_30%,theme(colors.background)_30%)] py-4 ">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center gap-x-5">
            <div>
              <ul className="flex gap-8 text-[16px] text-text-White font-medium uppercase">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Project</li>
                <li>Blog</li>
                <li>Pages</li>
                <li>Contact</li>
              </ul>
            </div>
            <button className="bg-text-White text-background py-3 px-10 rounded-full font-medium">
              GET A QOUTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
