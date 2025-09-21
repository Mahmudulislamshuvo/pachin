import { FaPaintBrush, FaRegGem, FaRegStar } from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";

const WelcomeToStyleMuseum = () => {
  return (
    <div className="container">
      <div className="py-15 md:py-20">
        <div>
          <PageHeader
            title="Style Museum: Renown Fashion House in Bangladesh"
            desc="Style Museum Ltd. is a full‐service knit & woven garments manufacturing unit based in Dhaka, Bangladesh. Since commencing operations in 2013, we’ve grown from a small production unit into a modern facility, serving both local and international clients with high‐quality, reliable apparel solutions."
          />
        </div>

        <div className="mt-8">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Card 1 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                {/* below py should 20 here */}
                <div className="bg-text-Primary overflow-hidden py-5 md:py-23">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <FaPaintBrush className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Elegant Design
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      We provide complete product design & development support
                      for global brands.
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
                    <FaRegGem className="h-20 w-20 text-text-White" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Quality & Sustainability
                    </h3>
                    <p className="text-text-White px-10 pt-4">
                      We ensure OEKO-TEX & GOTS certified materials, top-class
                      machines, and strict QC for premium quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                <div className="bg-text-Primary overflow-hidden py-5 md:py-20">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <FaRegStar className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Responsive Service
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      From sampling to delivery, we provide clear communication,
                      on-time delivery, and client-focused solutions.
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
