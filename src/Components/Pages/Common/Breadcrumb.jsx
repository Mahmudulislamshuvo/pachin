const Breadcrumb = ({ image, title }) => {
  return (
    <>
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src={image}
          alt={`${title}Page`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-bannerLayer bg-opacity-40 py-40 px-5">
          <h1 className="text-7xl font-bold mb-4 text-text-White">{title}</h1>
          <div className="space-x-5 text-lg">
            {/* <button
              onClick={() => setPage("home")}
              className="text-text-White cursor-pointer"
            >
              Home
            </button> */}
            {/* <button className="text-background">{title}</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
