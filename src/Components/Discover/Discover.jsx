import { FaMale, FaFemale, FaChild } from "react-icons/fa";
import mensClothingImage from "../../assets/Images/menufec_first.png";
import ladiesClothingImage from "../../assets/Images/menufec_second.png";
import kidsClothingImage from "../../assets/Images/menufec_third.png";

const ManufacturingExperience = () => {
  return (
    <section className="bg-text-White font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-custom-red tracking-wider uppercase">
            Manufacturing Experience
          </h2>
          <p className="mt-4 text-xl text-text-Secondary tracking-wide">
            WHAT WE PRODUCE FOR WHOM
          </p>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 text-center">
          {/* Men's Category */}
          <div className="flex flex-col items-center">
            <FaMale className="text-[200px] text-text-Primary" aria-hidden="true" />
            <h3 className="mt-6 text-3xl font-semibold text-text-Primary">Men's</h3>
            <div className="mt-8">
              <img
                src={mensClothingImage}
                alt="A collection of men's apparel"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Ladie's Category */}
          <div className="flex flex-col items-center">
            <FaFemale
              className="text-[200px] text-custom-red"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-3xl font-semibold text-text-Primary">
              Ladie's
            </h3>
            <div className="mt-8">
              <img
                src={ladiesClothingImage}
                alt="A collection of ladies' apparel"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Kid's Category */}
          <div className="flex flex-col items-center">
            <FaChild
              className="text-[200px] text-text-Primary"
              aria-hidden="true"
            />
            <h3 className="mt-6 text-3xl font-semibold text-text-Primary">Kid's</h3>
            <div className="mt-8">
              <img
                src={kidsClothingImage}
                alt="A collection of kid's apparel"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingExperience;
