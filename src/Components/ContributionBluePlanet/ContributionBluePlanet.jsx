import image from "../../assets/Images/Contribution.png";

import icon1 from "../../assets/Images/ContriBluePlanet1.png";
import icon2 from "../../assets/Images/ContriBluePlanet2.png";
import icon3 from "../../assets/Images/ContriBluePlanet3.png";
import icon4 from "../../assets/Images/ContriBluePlanet4.png";
import ContributionCard from "../CommonComponents/ContributionCard";

const contributionData = [
  {
    id: 1,
    icon: icon1,
    title: "Innovation",
    data: [
      "Energy saving LED lights",
      "Energy saving servo motors",
      "Energy monitoring system with separate energy meter",
      "Low-e glass to reduce heat and noise",
    ],
  },
  {
    id: 2,
    icon: icon2,
    title: "Sustainability",
    data: [
      "Low-flow water fixtures",
      "Waste water recycling system to",
      "reuse in toilet flush, gardening etc",
    ],
  },
  {
    id: 3,
    icon: icon3,
    title: "Quality",
    data: [
      "Indoor gardening",
      "Bicycle parking",
      "Carpool preferred parking",
      "Huge amount of fresh air circulation to maintain CO 2",
      "Enough daylight for whole building",
    ],
  },
  {
    id: 4,
    icon: icon4,
    title: "Our Team",
    data: [
      "Segregation of waste materials ",
      "like fabric, paper, plastic etc.",
      "Selling the waste to recycler",
      "No landfill",
    ],
  },
];

const ContributionBluePlanet = () => {
  return (
    <div className="bg-custom-dark-blue/90 py-20">
      <div className="container">
        <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-text-White md:text-6xl">
          CONTRIBUTION <span className="text-background">TO BLUE PLANET</span>
        </h2>

        <div className="flex justify-between items-center">
          {/* Left Side - All Contribution Cards */}
          <div className="w-[58%] flex flex-wrap">
            {contributionData.map((item) => (
              <div key={item.id} className="w-1/2 p-4">
                <ContributionCard
                  icon={item.icon}
                  title={item.title}
                  data={item.data}
                />
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="w-[40%] flex justify-center">
            <img
              src={image}
              alt="Contribution"
              className="shadow-box-LGshadow pb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionBluePlanet;
