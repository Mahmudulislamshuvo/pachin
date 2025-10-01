import image from "../../assets/Images/OurStrength.jpg";

const OurStrength = () => {
  return (
    <div className="bg-[#231F20] py-20">
      <div className="container">
        <div>
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wider uppercase">
              Manufacturing Experience
            </h2>
            <p className="mt-4 text-xl text-gray-600 tracking-wide">
              WHAT WE PRODUCE FOR WHOM
            </p>
          </div>
          <div>
            <img src={image} alt="OurStrength" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
