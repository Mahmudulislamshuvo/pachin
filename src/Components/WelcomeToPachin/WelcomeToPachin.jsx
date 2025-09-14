import { HiOutlineLightBulb } from "react-icons/hi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuHandshake } from "react-icons/lu";
import PageHeader from "../CommonComponents/PageHeader";

const WelcomeToPachin = () => {
  return (
    <div className="container">
      <div className="py-15 md:py-20">
        <div>
          <PageHeader
            title="Welcome to Pachin Ltd."
            desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard"
          />
        </div>

        <div className="mt-8">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Hobby */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                <div className="bg-text-Primary overflow-hidden py-5 md:py-20">
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

              {/* Expert (middle one) */}
              <div
                className="w-11/12 max-w-sm sm:w-3/5 relative 
                bg-text-Primary md:bg-white md:z-10 
                lg:scale-110"
              >
                <div className="bg-background md:bg-background overflow-hidden py-5 md:py-20">
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
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                <div className="bg-text-Primary overflow-hidden py-5 md:py-20">
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
