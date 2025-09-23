import image1 from "../../../assets/Images/BestReliableSolution1.jpg";
import image2 from "../../../assets/Images/BestReliableSolution2.jpg";

const TheBestReliable = () => {
  return (
    <div className="container">
      <div className="py-30 flex items-center gap-x-10">
        {/* left */}
        <div className="w-[52%]">
          <div className="">
            <h5 className="text-text-Secondary uppercase">
              Welcome to Style Museum
            </h5>
            <h3 className="text-4xl font-bold uppercase pt-3 pb-5">
              The Best{" "}
              <span className="text-background">Reliable Solution</span> for
              Your Space
            </h3>
            <div className="h-1 w-15 bg-background rounded-24px"></div>
          </div>
          <div className="space-y-5 text-text-Secondary text-lg py-10 ">
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
        <div className="w-[45%]">
          <div className="relative">
            <img
              src={image1}
              alt="BestReliableSolution1"
              className="h-[500px] w-[400px] object-cover"
            />

            <img
              src={image2}
              alt="BestReliableSolution2"
              className="h-[500px] w-[400px] object-cover absolute top-20 left-20 p-2 bg-text-White rounded-6px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBestReliable;
