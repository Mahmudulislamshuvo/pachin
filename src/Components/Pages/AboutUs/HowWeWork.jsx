import React from "react";

const workSteps = [
  {
    number: "1",
    title: "Planning & Research",
    description:
      "Drinter took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    number: "2",
    title: "Ideas & Design",
    description:
      "Drinter took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    number: "3",
    title: "Prototype Project",
    description:
      "Drinter took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    number: "4",
    title: "Final Outputs",
    description:
      "Drinter took a galley of type and scrambled it to make a type specimen book.",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-text-White font-sans">
      <div className="container px-4 py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-text-Secondary uppercase tracking-widest">
            HOW WE WORK
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-text-Primary">
            HOW DO WE WORK FOR YOU
            <span className="text-background ml-1">|</span>
          </h2>
        </div>

        {/* Main Content Area for Timeline */}
        <div className="">
          {/* Timeline Visual Connector (Line and Circles) */}
          <div className="flex items-center px-25">
            {workSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Circle with Number */}
                <div className="flex flex-col items-center">
                  <div className="z-10 w-10 h-10 flex items-center justify-center border-2 border-background rounded-full font-bold text-background bg-text-White transition-all duration-300">
                    {step.number}
                  </div>
                </div>
                {/* Connector Line */}
                {index < workSteps.length - 1 && (
                  <div className="flex-auto border-t-2 border-background"></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Timeline Text Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-x-10 mt-6">
            {workSteps.map((step) => (
              <div key={step.title} className="text-center flex-1">
                <h3 className="text-xl font-bold text-text-Primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-Secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
