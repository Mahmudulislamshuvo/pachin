import { IoCall } from "react-icons/io5";

const TheBestReliable = () => {
  return (
    <div className="container">
      <div className="py-30 flex items-center gap-x-10">
        {/* left */}
        <div className="w-[52%]">
          <div className="">
            <h5 className="text-text-Secondary uppercase">
              Welcome to the Pachin
            </h5>
            <h3 className="text-4xl font-bold uppercase pt-3 pb-5">
              The Best{" "}
              <span className="text-background">Reliable Solution</span> for
              Industrial Works
            </h3>
            <div className="h-1 w-15 bg-background rounded-24px"></div>
          </div>
          <div className="space-y-5 text-text-Secondary text-lg py-10 ">
            <p>
              Rorem Ipsum is simply dummy text of the printin and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
            <p>
              Printer took a galley of type and scrambled it to make a type
              speci menu book. It has survived not only five centuries, but also
              the leap intoelectronic typesetting, remaining essentially
              unchanget was popularised.
            </p>
          </div>
          <div className="flex gap-x-10">
            <div className="px-1 py-5 border rounded-6px w-full relative">
              {/* Icon */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondaryBackground rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-text-White">
                  <IoCall className="h-5 w-5" />
                </div>
              </div>

              {/* Text Content */}
              <div className="ml-8 text-text-Secondary">
                <p className="text-lg font-medium">Phone:</p>
                <p className="text-lg font-semibold text-text-Primary">
                  +123 4567 8910
                </p>
              </div>
            </div>

            <div className="px-1 py-5 border rounded-6px w-full relative">
              {/* Icon */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-secondaryBackground rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-text-White">
                  <IoCall className="h-5 w-5" />
                </div>
              </div>

              {/* Text Content */}
              <div className="ml-8 text-text-Secondary">
                <p className="text-lg font-medium">Phone:</p>
                <p className="text-lg font-semibold text-text-Primary">
                  +123 4567 8910
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[45%]">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/29498845/pexels-photo-29498845.jpeg"
              alt="https://images.pexels.com/photos/29498845/pexels-photo-29498845.jpeg"
              className="h-[500px] w-[400px] object-cover"
            />

            <img
              src="https://images.pexels.com/photos/19505711/pexels-photo-19505711.jpeg"
              alt="https://images.pexels.com/photos/33629824/pexels-photo-33629824.jpeg"
              className="h-[500px] w-[400px] object-cover absolute top-20 left-20 p-2 bg-text-White rounded-6px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBestReliable;
