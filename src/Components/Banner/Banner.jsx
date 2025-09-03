const Banner = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/31750956/pexels-photo-31750956.jpeg"
          alt="banner"
          className="w-full h-[100vh] object-cover"
        />

        {/* Overlay Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-bannerLayer">
          <div className="container">
            <div className="text-center pt-100">
              <h1 className="text-text-White text-6xl font-bold">
                Trusted Factory Solutions
                <span className="text-background pl-3">Since 1995</span>
              </h1>
              <p className="text-text-White pt-8 px-40">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown.
              </p>
              <button className="py-3 px-8 text-text-White bg-background rounded-full font-medium mt-8">
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
