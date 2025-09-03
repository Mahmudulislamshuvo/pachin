import { HiOutlineLightBulb } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";

const WelcomeToPachin = () => {
  return (
    <div className="container">
      <div>
        <div className="text-center space-y-5">
          <h2 className="text-text-Primary text-5xl font-bold">
            Welcome to Pachin Ltd.
          </h2>
          <p className="text-text-Secondary text-lg px-60">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>

        <div className="mt-8">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Hobby */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg md:-mr-4">
                <div className="bg-text-Primary rounded-lg overflow-hidden py-15">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <LuHandshake className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Reliable Solutions
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      Printer took a galley of type and scrambled it to make a
                      type specimenbook. It has survived not only five.
                    </p>
                  </div>
                </div>
              </div>

              {/* Expert */}
              <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
                <div className="bg-background rounded-lg overflow-hidden py-20">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <HiOutlineLightBulb className="h-20 w-20 text-text-White" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Reliable Solutions
                    </h3>
                    <p className="text-text-White px-10 pt-4">
                      Printer took a galley of type and scrambled it to make a
                      type specimenbook. It has survived not only five.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enterprise */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg md:-mr-4">
                <div className="bg-text-Primary rounded-lg overflow-hidden py-15">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <IoCheckmarkCircleOutline className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Reliable Solutions
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      Printer took a galley of type and scrambled it to make a
                      type specimenbook. It has survived not only five.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToPachin;
