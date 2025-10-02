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
            <div className="text-center py-40 md:py-80 px-5 md:px-0">
              <h1 className="text-text-White text-2xl md:text-6xl font-bold px-6 md:px-0">
                STYLE WITH QUALITY CLOTHING
                <br />
                <span className="text-background pl-3">Since 2013</span>
              </h1>
              <p className="text-text-White pt-4 px-5 md:pt-8 md:px-40">
                For nearly a decade, Style Museum has delivered the highest
                quality products by embracing innovation and new technology. Our
                pursuit of perfection is supported by expanding our R&D efforts
                and introducing 3D design. Alongside this, sustainability
                remains a core pillar, as we constantly work to improve our
                positive impact on the environment.
              </p>
              <a
                href="https://wa.me/+8801672226810"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-3 px-8 text-text-White bg-background rounded-24px font-medium mt-8"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
