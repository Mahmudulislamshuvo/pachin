import dyed1 from "../../assets/Images/Dyed1.png";
import dyed2 from "../../assets/Images/Dyed2.png";
import dyed3 from "../../assets/Images/Dyed3.png";
import dyed4 from "../../assets/Images/Dyed4.png";
import dyed5 from "../../assets/Images/Dyed5.png";
import dyed6 from "../../assets/Images/dyed6.png";
import dyed7 from "../../assets/Images/dyed7.png";
import dyed8 from "../../assets/Images/dyed8.png";
import dyed9 from "../../assets/Images/dyed9.png";

// Data for the first slider (scrolls right to left)
const projects = [
  { id: 1, title: "Modern Living Room", imageUrl: dyed1 },
  { id: 2, title: "Chic Bedroom Design", imageUrl: dyed2 },
  { id: 3, title: "Minimalist Office Space", imageUrl: dyed3 },
  { id: 4, title: "Cozy Reading Nook", imageUrl: dyed4 },
  { id: 5, title: "Elegant Dining Area", imageUrl: dyed5 },
];

// Data for the second slider (scrolls left to right)
const features = [
  { id: 1, title: "Sustainable Materials", imageUrl: dyed6 },
  { id: 2, title: "Smart Home Integration", imageUrl: dyed7 },
  { id: 3, title: "Custom Craftsmanship", imageUrl: dyed8 },
  { id: 4, title: "Award-Winning Concepts", imageUrl: dyed9 },
];

// --- MAIN COMPONENT ---
const WashingPeceDyed = () => {
  return (
    <>
      {/* Styles for the continuous scroll animation */}
      <style>
        {`
                    @keyframes scroll-left {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-left {
                        animation: scroll-left 40s linear infinite;
                    }
                    @keyframes scroll-right {
                        from { transform: translateX(-100%); }
                        to { transform: translateX(0); }
                    }
                    .animate-right {
                        animation: scroll-right 40s linear infinite;
                    }
                `}
      </style>

      <div className="bg-gray-900 text-white font-sans overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white text-center mb-10">
            WASHING/ PIECE DYED
          </h1>

          {/* Slider 1: Scrolls from right to left using the 'projects' data */}
          <div className="relative w-full overflow-hidden mb-10">
            <div className="flex animate-left">
              {/* We render the list twice for a seamless loop */}
              {projects.map((project) => (
                <div
                  key={`p1-${project.id}`}
                  className="flex flex-col bg-gray-800 rounded-xl overflow-hidden w-72 h-[420px] flex-shrink-0 mx-4 cursor-pointer group"
                >
                  <div className="p-4 text-center h-16 flex items-center justify-center">
                    <h3
                      className="text-white font-semibold text-lg truncate"
                      title={project.title}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex-grow h-full">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              {projects.map((project) => (
                <div
                  key={`p2-${project.id}`}
                  className="flex flex-col bg-gray-800 rounded-xl overflow-hidden w-72 h-[420px] flex-shrink-0 mx-4 cursor-pointer group"
                >
                  <div className="p-4 text-center h-16 flex items-center justify-center">
                    <h3
                      className="text-white font-semibold text-lg truncate"
                      title={project.title}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex-grow h-full">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider 2: Scrolls from left to right using the 'features' data */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-right">
              {/* We render the list twice for a seamless loop */}
              {features.map((feature) => (
                <div
                  key={`f1-${feature.id}`}
                  className="flex flex-col bg-gray-800 rounded-xl overflow-hidden w-72 h-[420px] flex-shrink-0 mx-4 cursor-pointer group"
                >
                  <div className="p-4 text-center h-16 flex items-center justify-center">
                    <h3
                      className="text-white font-semibold text-lg truncate"
                      title={feature.title}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex-grow h-full">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              {features.map((feature) => (
                <div
                  key={`f2-${feature.id}`}
                  className="flex flex-col bg-gray-800 rounded-xl overflow-hidden w-72 h-[420px] flex-shrink-0 mx-4 cursor-pointer group"
                >
                  <div className="p-4 text-center h-16 flex items-center justify-center">
                    <h3
                      className="text-white font-semibold text-lg truncate"
                      title={feature.title}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <div className="flex-grow h-full">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WashingPeceDyed;
