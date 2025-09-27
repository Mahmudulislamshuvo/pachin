import bannerimage from "../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <img
          src={bannerimage}
          alt="banner"
          className="w-full h-[100vh] object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-bannerLayer">
          <div className="container">
            <div className="text-center py-40 md:py-100 px-5 md:px-0">
              <h1 className="text-text-White text-2xl md:text-6xl font-bold px-6 md:px-0">
                STYLE WITH QUALITY CLOUTHING
                <br className="sm:hidden" />
                <span className="text-background pl-3">Since 2013</span>
              </h1>
              <p className="text-text-White pt-4 px-5 md:pt-8 md:px-40">
                Style Museum has spent nearly a decade delivering top-quality
                products by embracing new technologies and innovative practices.
                With a focus on 3D design and expanding R&D, the brand pairs
                quality with innovation. Sustainability is also central, as the
                company continually enhances its eco-friendly efforts to create
                a positive environmental impact.
              </p>
              <button className="py-3 px-8 text-text-White bg-background rounded-24px font-medium mt-8">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
