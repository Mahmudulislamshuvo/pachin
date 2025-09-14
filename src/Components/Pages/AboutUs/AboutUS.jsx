import TheBestReliable from "./TheBestReliable";

const AboutUS = ({ setPage }) => {
  return (
    <div>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src="https://images.pexels.com/photos/33660828/pexels-photo-33660828.jpeg"
          alt="AboutMePage"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-bannerLayer bg-opacity-40 py-40 px-5">
          <h1 className="text-7xl font-bold mb-4 text-text-White">About US</h1>
          <div className="space-x-5 text-lg">
            <button
              onClick={() => setPage("home")}
              className="text-text-White cursor-pointer"
            >
              Home
            </button>
            <button className="text-background">About</button>
          </div>
        </div>
      </div>
      <TheBestReliable />
    </div>
  );
};

export default AboutUS;
