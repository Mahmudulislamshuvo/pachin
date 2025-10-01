import image from "../../assets/Images/SustainabilityRoadmap.png";

const SustainabilityRoadmap = () => {
  return (
    <div className="bg-[#231F20]">
      <div className="container py-20">
        {/* The relative container is essential for positioning the text over the image. */}
        <div className="relative">
          <img
            src={image}
            alt="A roadmap illustrating sustainability goals and milestones"
            className="w-full h-auto rounded-8px"
          />

          {/* --- Header Section --- */}
          <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 w-full px-4">
            <div className="text-center">
              <h2
                className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider uppercase"
                style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
              >
                Sustainability Roadmap
              </h2>
              <p className="mt-4 text-xl text-gray-200 tracking-wide">
                CHARTING A COURSE FOR A GREENER TOMORROW
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityRoadmap;
