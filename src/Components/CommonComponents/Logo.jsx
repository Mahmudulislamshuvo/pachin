import logo from "../../assets/Images/logo.png";

const Logo = ({ css = "" }) => {
  return (
    <div className="flex items-center gap-x-1">
      <img src={logo} alt="logo" className="w-15 h-15" />
      <h4 className={`${css} text-2xl font-bold`}>Style Museum</h4>
    </div>
  );
};

export default Logo;
