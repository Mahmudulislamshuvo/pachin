import { FaPaintBrush, FaRegGem, FaRegStar } from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";

const WelcomeToStyleMuseum = () => {
  return (
    <div className="container">
      <div className="py-15 md:py-20">
        <div>
          <PageHeader
            title="Style Museum: Renown Fashion House in Bangladesh"
            desc="We are a passionate team of designers and architects dedicated to creating beautiful and functional spaces. We offer a comprehensive suite of professional services to a diverse clientele, including homeowners and commercial developers."
          />
        </div>

        <div className="mt-8">
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="relative flex flex-col md:flex-row items-center">
              {/* Card 1 */}
              <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-5 md:my-8 relative">
                <div className="bg-text-Primary overflow-hidden py-5 md:py-20">
                  <div className="text-center flex flex-col items-center justify-center p-6">
                    <FaPaintBrush className="h-20 w-20 text-background" />
                    <h3 className="text-text-White text-2xl font-bold">
                      Bespoke Designs
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      We create custom designs that are tailored to your unique style and needs. Our team will work with you to bring your vision to life.
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
                      Quality Craftsmanship
                    </h3>
                    <p className="text-text-White px-10 pt-4">
                      We use only the highest quality materials and work with the best craftsmen to ensure that your project is built to last.
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
                      Exceptional Service
                    </h3>
                    <p className="text-text-Secondary px-10 pt-4">
                      We are committed to providing our clients with an exceptional experience from start to finish. Your satisfaction is our top priority.
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
