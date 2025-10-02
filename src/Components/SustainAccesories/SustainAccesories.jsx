import image from "../../assets/Images/SustainAccesories.png";

const SustainAccesories = () => {
  return (
    <div className="bg-custom-accessories-bg">
      <div className="container py-20">
        <div>
          {/* Header Section */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-custom-red tracking-wider uppercase">
              SUSTAINABLE ACCOSORIES
            </h2>
            <p className="mt-4 text-xl text-text-Secondary tracking-wide">
              REUSE | REDUCE | RRCYCLE
            </p>
          </div>
          <div>
            <img src={image} alt="SustainAccesories" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainAccesories;
