import image from "../../Assets/makeThingEasy/easy-thumb.jpg";

const Discover = () => {
  return (
    <>
      <div className="container">
        <div className="py-40 relative">
          <div className="flex gap-x-10">
            <div className="w-[40%]">
              <img src={image} alt="image" />
            </div>
            <div className="w-[58%] pl-5">
              <div className="pr-10 pb-10">
                <h3 className="text-5xl font-bold text-text-Primary pt-5">
                  Discover <span className="text-background">The Best Way</span>{" "}
                  of Grow a Factory
                </h3>
                <p className="text-text-Secondary text-lg pt-5">
                  Simple Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown.
                </p>
              </div>
              <div>
                <div>
                  <h5 className="text-text-Primary text-2xl font-bold">
                    Our Mission
                  </h5>
                  <p className="text-text-Secondary text-lg pt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Rosh has been the industry's standard
                    dummy text
                  </p>
                </div>
                <div className="pt-5 pb-5">
                  <h5 className="text-text-Primary text-2xl font-bold">
                    Our Mission
                  </h5>
                  <p className="text-text-Secondary text-lg pt-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Rosh has been the industry's standard
                    dummy text
                  </p>
                </div>

                <button className="text-text-White bg-background py-3 px-10 rounded-full text-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
