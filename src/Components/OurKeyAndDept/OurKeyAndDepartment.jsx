import React from "react";

const OurKeyAndDepartment = () => {
  // Array of department names for cleaner code
  const departments = [
    "R&D, DESIGN, VIRTUAL STUDIO",
    "SAMPLE, PATTERN, CAD,",
    "CUTTING",
    "SEWING",
    "QUALITY CONTROL",
    "FINISHING",
    "QUALITY ASSURANCE",
  ];

  return (
    <div className="bg-white text-gray-800 p-8 md:p-12 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Images */}
        <div className="flex flex-col space-y-6 lg:space-y-8">
          <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="/path/to/your/image1.jpg" // Replace with your first image path
              alt="Worker operating a sewing machine"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <img
              src="/path/to/your/image2.jpg" // Replace with your second image path
              alt="Worker operating another sewing machine"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Title and Departments List */}
        {/* Added a vertical border for large screens */}
        <div className="lg:pl-12 lg:border-l-2 lg:border-background">
          {/* Removed red color from the title */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 leading-tight text-black">
            OUR KEY <br />
            DEPARTMENTS
          </h2>

          <ul className="space-y-3 mt-8">
            {departments.map((dept, index) => (
              <li key={index} className="text-xl md:text-2xl font-semibold">
                {/* Simplified numbering */}
                <span className="text-black font-bold mr-2">{index + 1}.</span>
                {dept} <span className="text-gray-500">DEPARTMENT</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurKeyAndDepartment;
