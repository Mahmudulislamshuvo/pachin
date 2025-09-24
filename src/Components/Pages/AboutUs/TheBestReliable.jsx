import image1 from "../../../assets/Images/BestReliableSolution1.jpg";
import image2 from "../../../assets/Images/BestReliableSolution2.jpg";

const TheBestReliable = () => {
  return (
    <div className="container">
      <div className="py-20 flex flex-col lg:flex-row items-center gap-10 px-5 md:px-0">
        {/* left */}
        <div className="w-full lg:w-1/2">
          <div>
            <h5 className="text-text-Secondary uppercase">
              Welcome to Style Museum
            </h5>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase pt-3 pb-5">
              The Best{" "}
              <span className="text-background">Reliable Solution</span> for
              Your Space
            </h3>
            <div className="h-1 w-16 bg-background rounded-2xl"></div>
          </div>
          <div className="space-y-5 text-text-Secondary text-base md:text-lg py-6">
            <p>
              Style Museum is a renown fashion house in Bangladesh with a
              passion for creating spaces.
            </p>
            <p>
              We offer a comprehensive suite of professional services to a
              diverse clientele, including homeowners and commercial developers.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={image1}
              alt="BestReliableSolution1"
              className="h-64 w-48 sm:h-80 sm:w-64 md:h-[400px] md:w-[320px] lg:h-[500px] lg:w-[400px] object-cover"
            />

            <img
              src={image2}
              alt="BestReliableSolution2"
              className="h-64 w-48 sm:h-80 sm:w-64 md:h-[400px] md:w-[320px] lg:h-[500px] lg:w-[400px] object-cover absolute top-10 left-10 sm:top-12 sm:left-12 md:top-16 md:left-16 p-2 bg-text-White rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBestReliable;
