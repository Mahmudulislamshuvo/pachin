import image1 from "../../../assets/Images/WeEnsure1.jpg";
import image2 from "../../../assets/Images/WeEnsure2.jpg";

const WeEnsureQuality = () => {
  return (
    <div className="bg-bg-blog">
      <div className="container">
        <div className="py-10 md:py-30 flex flex-col md:flex-row items-center gap-10">
          {/* left */}
          <div className="w-full md:w-[45%] flex justify-center">
            <div className="relative">
              <img
                src={image1}
                alt="WeEnsure1"
                className="h-[300px] w-[260px] md:h-[500px] md:w-[400px] object-cover"
              />

              <img
                src={image2}
                alt="WeEnsure2"
                className="h-[300px] w-[260px] md:h-[500px] md:w-[400px] object-cover absolute top-10 md:top-20 left-10 md:left-20 p-2 bg-text-White rounded-6px"
              />
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-[52%] md:text-left p-5 md:p-0">
            <div>
              <h5 className="text-text-Secondary uppercase">
                Welcome to Style Museum
              </h5>
              <h3 className="text-2xl md:text-4xl font-bold uppercase pt-3 pb-5">
                <span className="text-background">We Ensure The Quality</span>{" "}
                of Your Dream Construction
              </h3>
              <div className="h-1 w-15 bg-background rounded-24px mx-auto md:mx-0"></div>
            </div>
            <div className="space-y-5 text-text-Secondary text-base md:text-lg py-10">
              <p>
                Rorem Ipsum is simply dummy text of the printin and type setting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
              <p>
                Printer took a galley of type and scrambled it to make a type
                speci menu book. It has survived not only five centuries, but
                also the leap intoelectronic typesetting, remaining essentially
                unchanget was popularised.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
              <div className="flex items-center gap-x-5">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                  alt="project manager"
                  className="h-15 w-15 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-xl md:text-2xl text-text-Primary font-bold">
                    Rastab Lezoka
                  </h5>
                  <p className="text-text-Secondary">Project Managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeEnsureQuality;
