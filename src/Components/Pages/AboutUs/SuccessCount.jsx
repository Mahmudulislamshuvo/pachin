import { LuNotepadText } from "react-icons/lu";

const SuccessCount = () => {
  const stats = [
    {
      id: 1,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "1540+",
      label: "Completed Projects",
    },
    {
      id: 2,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "980+",
      label: "Happy Clients",
    },
    {
      id: 3,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "25+",
      label: "Awards Won",
    },
    {
      id: 4,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "10+",
      label: "Years of Experience",
    },
  ];

  return (
    <div
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/33660828/pexels-photo-33660828.jpeg')",
      }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-bannerLayer opacity-80"></div>

      {/* Content Layer */}
      <div className="relative container">
        <div className="py-30">
          <div className="md:flex md:justify-between md:items-center md:gap-x-5 mx-5 md:mx-0 space-y-5 md:space-y-0">
            {stats.map((item) => (
              <div
                key={item.id}
                className="py-12 px-10 border border-text-Secondary flex flex-col items-center justify-center gap-5 w-full md:w-1/4 bg-text-White/10 backdrop-blur-sm"
              >
                {item.icon}
                <div className="text-center">
                  <h3 className="text-text-Primary text-5xl font-bold">
                    {item.number}
                  </h3>
                  <p className="text-text-Secondary text-xl">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCount;
