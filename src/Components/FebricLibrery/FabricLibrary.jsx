import React from "react";

const fabricData = [
  {
    title: "SYNTHETIC",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-custom-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    items: [
      "Jersey",
      "Rib",
      "Interlock",
      "Pique",
      "Pattern",
      "Stripe",
      "Jacquard",
      "Polar fleece",
    ],
    bgColor: "bg-custom-dark-slate",
    textColor: "text-text-White",
  },
  {
    title: "SUSTAINABLE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    items: [
      "GOTS certified",
      "OCS certified",
      "GRS certified",
      "BCI certified",
      "ECOVERA certified",
      "Woolmark certified",
    ],
    bgColor: "bg-text-White",
    textColor: "text-text-black",
  },
  {
    title: "PIQUE",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-White"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    items: [
      "Pique from 40 gsm to 350 gsm",
      "Single Lacoste",
      "Double Lacoste",
      "Drop needle",
      "Jacquard",
    ],
    bgColor: "bg-custom-red",
    textColor: "text-text-White",
  },
  {
    title: "12 GG",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    ),
    items: ["Plain Jersey", "Pattern Jersey", "Cuff&Sew", "Sweater"],
    bgColor: "bg-text-White",
    textColor: "text-text-black",
  },
  {
    title: "INTERLOCK",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    items: [
      "Interlock from 130 gsm to 300 gsm",
      "Drop needle interlock",
      "Jacquard",
    ],
    bgColor: "bg-text-White",
    textColor: "text-text-black",
  },
  {
    title: "TERRY",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-White"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v1h-2V5H7v10h2v-2h2v2h2v-2h2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V4z" />
      </svg>
    ),
    items: [
      "French terry from 140 gsm to 500 gsm",
      "Fleece from180 gsm to 500 gsm",
      "Velour",
      "Both side brush fleece",
      "Jacquard",
    ],
    bgColor: "bg-custom-red",
    textColor: "text-text-White",
  },
  {
    title: "RIB",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h16M4 16h16"
        />
      </svg>
    ),
    items: [
      "1x1 Rib",
      "2x1 Rib",
      "2x2 Rib",
      "Drop need Rib",
      "Flat back",
      "PontiDiRib",
      "Double face",
      "Waffle",
      "Feeder stripe",
      "Auto stripe",
      "Jacquard",
    ],
    bgColor: "bg-text-White",
    textColor: "text-text-black",
  },
  {
    title: "JERSEY",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-White"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 4v8l-4-4 4-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 4v8l4-4-4-4z"
        />
      </svg>
    ),
    items: [
      "Single Jersey from 90 gsm to 400 gsm",
      "Bubble jersey",
      "Pattern jersey",
      "Mesh jersey",
      "Crepe jersey",
      "Twill jersey",
      "Feeder stripe",
      "Auto stripe",
      "Jacquard",
    ],
    bgColor: "bg-custom-red",
    textColor: "text-text-White",
  },
  {
    title: "VALUE ADDITION",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    items: [
      "Spandex",
      "Enzyme washed",
      "Silicon washed",
      "Pre-shrunk",
      "Peach/Sueded",
      "Vintage",
      "Space dyed",
      "Anti-bacterial",
      "UV protected",
      "Water repellent",
      "Insect repellent",
      "Soil repellent",
      "Dischargeable",
      "Hydro-flex",
      "Allover printed",
      "Digital AOP",
      "Allover embroidery",
    ],
    bgColor: "bg-text-White",
    textColor: "text-text-black",
  },
];

const FabricCard = ({ title, icon, items, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} ${textColor} rounded-2xl p-6 flex flex-col`}>
      <div className="flex items-center mb-4">
        <div className="mr-4">{icon}</div>
        <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
      </div>
      <ul className="space-y-2 text-sm max-h-64 overflow-y-auto pr-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Fabric Library Component ---
const FabricLibrary = () => {
  return (
    <div className="bg-text-black text-text-White min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            INNOVATION OF <span className="text-custom-red">FABRICS</span>
          </h1>
          <p className="mt-4 text-lg text-text-SecondaryTwo">
            MORE THAN 500+ TYPES OF FABRICS IN OUR LIBRARY
          </p>
        </header>

        {/* Grid of Cards */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fabricData.map((fabric, index) => (
            <FabricCard
              key={index}
              title={fabric.title}
              icon={fabric.icon}
              items={fabric.items}
              bgColor={fabric.bgColor}
              textColor={fabric.textColor}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default FabricLibrary;
