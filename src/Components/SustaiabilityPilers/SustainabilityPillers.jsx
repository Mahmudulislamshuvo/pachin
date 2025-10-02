import image from "../../assets/Images/sustainablityPillers.png";

const SustainabilityPillers = () => {
  return (
    <div className="bg-custom-sustainable-piller-bg">
      <div className="container py-10">
        <div>
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-custom-red tracking-wider uppercase">
              SUSTAINABILITY PILLERS
            </h2>
            <p className="mt-4 text-xl text-text-Secondary tracking-wide">
              WHERE WE STAND
            </p>
          </div>
          {/* Vontents */}
          <div>
            <img src={image} alt="Certifications" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPillers;
