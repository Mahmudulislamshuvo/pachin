import factoryImage from "../../../assets/Images/safeWork.jpg";

// Data for the text content to keep the JSX clean and easy to update.
const contentData = [
  {
    title: "HARASSMENT AND ABUSE",
    description:
      "Style Museum ensures no harassment or abuse happens inside the factory premises. CCTV cameras and human supervision are placed in all the departments to monitor the activities of the workers.",
  },
  {
    title: "CHILD LABOR AND FORCED LABOR",
    description:
      "Child Labor and Forced Labors are strictly forbidden in the factory of Style-museum.com Ltd. All the workers need to show their Birth Certificate, Doctor's Age determination documents and other legal documents to prove that they are not below 18.",
  },
  {
    title: "HEALTH & SAFETY",
    description:
      "Style Museum has taken all the measures in the factory to provide maximum health and safety benefits to all the workers and the employees.",
  },
];

const SafeWorkEnvironment = () => {
  return (
    <div className="bg-custom-dark-slate font-sans">
      <div className="container py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side: Image */}
          <div className="relative h-64 lg:h-auto">
            <img
              src={factoryImage}
              alt="A worker in a safe factory environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col justify-center p-8 md:p-16 text-text-White">
            <div className="max-w-md mx-auto lg:mx-0">
              {/* Main Title */}
              <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide mb-12">
                SAFE WORK <br />
                <span className="text-custom-red">ENVIRONMENT</span>
              </h2>

              {/* Content Sections */}
              <div className="space-y-10">
                {contentData.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-SecondaryTwo text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeWorkEnvironment;
