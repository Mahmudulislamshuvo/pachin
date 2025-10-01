import { FaPaintBrush, FaRegEye, FaRegGem, FaRegStar } from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";
import { TbTargetArrow } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";

const WelcomeToStyleMuseum = () => {
  return (
    <div className="container">
      <div className="py-15 md:py-20">
        <div className="mt-8">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Card 1 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                {/* below py should 20 here */}
                <div className="bg-text-Primary overflow-hidden py-5 md:py-23">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <FaRegEye className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      VISION
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      Becoming a renowned market Leader in modern fashion
                      Industry.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 (middle one) */}
              <div
                className="w-11/12 max-w-sm sm:w-3/5 relative 
                bg-text-Primary md:bg-white md:z-10 
                lg:scale-110 shadow-card"
              >
                <div className="bg-background md:bg-background overflow-hidden py-5 md:py-20">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <TbTargetArrow className="h-20 w-20 text-text-White" />
                    <h3 className="text-text-White text-2xl font-bold">
                      MISSION
                    </h3>
                    <p className="text-text-White px-10 pt-4">
                      Delivering high quality Bench marked products to the local
                      And foreign customer by quality, Fashion style and work
                      ethics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                <div className="bg-text-Primary overflow-hidden py-5 md:py-20">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <AiOutlineLike className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      OUR BELIEF
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      Employee friendly environment, Dedication and following
                      The modern trend were always Been our core strength.
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

export default WelcomeToStyleMuseum;
