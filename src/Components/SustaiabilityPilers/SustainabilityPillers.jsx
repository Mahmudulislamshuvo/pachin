import image from "../../assets/Images/certifications.png";

const Certifications = () => {
  return (
    <div className="bg-[#231F20]">
      <div className="container py-10">
        <div>
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 tracking-wider uppercase">
              CERTIFICATION AND TRACEABILITY
            </h2>
            <p className="mt-4 text-xl text-gray-600 tracking-wide">
              CONFIDENCEANDTRUSTONYOUR PRODUCT
            </p>
          </div>
          {/* Vontents */}
          <div>
            <img src={image} alt="Certifications" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
