import React from "react";

// --- Mock Data ---
// An array of objects to hold the data for each column.
// This makes it easy to manage the content and add new columns if needed.
const valueAdditionData = [
  {
    title: "PLACEMENT PRINT",
    items: [
      "Digital",
      "Pigment",
      "Plastisol",
      "High density",
      "Puff",
      "Foil",
      "Flock",
      "Glitter",
      "Metallic",
      "Cracked",
      "Sublimation",
      "Transfer",
      "Spray",
      "Discharge",
      "Burn-out",
      "Sublimation",
      "Aroma",
      "Sunlight",
    ],
    isRed: true, // A flag to determine the background color
  },
  {
    title: "EMBROIDERY",
    items: [
      "Flat stitch - 2D",
      "3D - Chenille - Sequins",
      "Patchwork - Cotton thread",
      "Emb with print",
      "Cut hole - Felt - Cording",
    ],
    isRed: false,
  },
  {
    title: "ALLOVER PRINT",
    items: [
      "Pigment",
      "Rubber",
      "Reactive",
      "Digital",
      "Discharge",
      "Puff",
      "Burn-out",
      "Glitter",
      "Metallic",
    ],
    isRed: true,
  },
  {
    title: "HAND WORKS",
    items: [
      "Hand embroidery",
      "Hand stich",
      "Sequins",
      "Beading works",
      "Stone works",
      "Hotfix",
    ],
    isRed: false,
  },
];

// --- Reusable Column Component ---
// Renders a single column with its title and list of items.
// The background color is determined by the `isRed` prop.
const ValueColumn = ({ title, items, isRed }) => {
  const bgColor = isRed ? "bg-custom-red" : "bg-custom-dark-slate";
  const headerHeight = isRed ? "h-40" : "h-24"; // Adjust height for visual balance

  return (
    <div className="flex flex-col text-text-White">
      {/* Header section of the column */}
      <div
        className={`flex items-center justify-center p-6 ${bgColor} ${headerHeight}`}
      >
        <h3 className="text-2xl font-bold text-center">{title}</h3>
      </div>

      {/* List of items */}
      <ul className="mt-6 space-y-2 px-2">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <span className="mr-2 text-custom-red">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Main Value Addition Component ---
// This is the main component that you will import into your app.
const ValueAddition = () => {
  return (
    <section className="bg-text-black text-text-White font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              <span className="text-custom-red">VALUE ADDITION</span> ON GARMENT
            </h1>
            <p className="mt-4 text-lg text-text-SecondaryTwo tracking-wider">
              ATTRACT YOUR ENDCUSTOMER
            </p>
          </header>

          {/* Grid Container for the Columns */}
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {valueAdditionData.map((column, index) => (
              <ValueColumn
                key={index}
                title={column.title}
                items={column.items}
                isRed={column.isRed}
              />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ValueAddition;
