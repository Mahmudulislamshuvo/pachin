const transparencyData = [
  {
    id: 1,
    number: "1",
    title: "SUSTAINABILITY REPORT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    description:
      "We are committed to publish our sustainability report every year.",
    bgColor: "bg-red-600",
    textColor: "text-white",
    corners: "rounded-tl-3xl rounded-br-3xl",
  },
  {
    id: 2,
    number: "2",
    title: "KNOWLEDGE SHARE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description:
      "With proper arrangement we are open to everybody to visit our facilities and we are delighted to share our knowledge and experience.",
    bgColor: "bg-white",
    textColor: "text-red-600",
    corners: "rounded-tr-3xl rounded-bl-3xl",
  },
  {
    id: 4, // Intentionally out of order to match the grid layout (4 is below 1)
    number: "4",
    title: "COMPLIANCE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
        />
      </svg>
    ),
    description:
      "We are wholehearted to comply national or international code of conduct.",
    bgColor: "bg-white",
    textColor: "text-red-600",
    corners: "rounded-bl-3xl rounded-tr-3xl",
  },
  {
    id: 3,
    number: "3",
    title: "STAKEHOLDER ENGAGEMENT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    description:
      "We are ready to collaborate with any international and national agencies for sectoral and individual improvement.",
    bgColor: "bg-red-600",
    textColor: "text-white",
    corners: "rounded-br-3xl rounded-tl-3xl",
  },
];

const TransparencySection = () => {
  return (
    <div className="bg-gray-800 text-white font-sans py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide">
            TRANSPARENCY IN <span className="text-red-500">OPERATION</span>
          </h2>
          <p className="mt-2 text-lg text-gray-400 tracking-widest">
            WE WANT TO SET BENCHMARK AND MILESTONES
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Descriptions */}
          <div className="w-full lg:w-1/4 space-y-32 text-center lg:text-right">
            <p className="text-gray-300 text-lg leading-relaxed">
              {transparencyData[0].description}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {transparencyData[2].description}
            </p>
          </div>

          {/* Center Cards Grid */}
          <div className="w-full max-w-lg lg:w-1/2 grid grid-cols-2 gap-2">
            {transparencyData.map((item) => (
              <div
                key={item.id}
                className={`${item.bgColor} ${item.textColor} ${item.corners} p-6 h-64 flex flex-col justify-center items-center text-center shadow-lg`}
              >
                <span className="text-4xl font-bold">{item.number}</span>
                <div className="my-2">{item.icon}</div>
                <h3 className="text-lg font-bold uppercase">{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Right Descriptions */}
          <div className="w-full lg:w-1/4 space-y-32 text-center lg:text-left">
            <p className="text-gray-300 text-lg leading-relaxed">
              {transparencyData[1].description}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {transparencyData[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparencySection;
