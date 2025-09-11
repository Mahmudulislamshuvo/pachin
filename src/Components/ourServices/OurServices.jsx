import { GiFactory, GiHook, GiMonoWheelRobot } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { SlChemistry } from "react-icons/sl";
import PageHeader from "../CommonComponents/PageHeader";

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: MdOutlineLocalGasStation,
      title: "Petroleum and Gas",
      description:
        "Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine",
    },
    {
      id: 2,
      icon: GiHook,
      title: "Industrial Solutions",
      description:
        "We provide top-notch industrial services ensuring sustainable development with innovative technologies.",
    },
    {
      id: 3,
      icon: SlChemistry,
      title: "Solar Energy",
      description:
        "Harnessing the power of the sun to create clean and affordable renewable energy solutions.",
    },
    {
      id: 4,
      icon: GiFactory,
      title: "Coal Mining",
      description:
        "Reliable coal mining and supply chain management with eco-friendly practices.",
    },
    {
      id: 5,
      icon: GrUserWorker,
      title: "Oil Refinery",
      description:
        "State-of-the-art oil refining services to deliver high-quality fuel and petroleum products.",
    },
    {
      id: 6,
      icon: GiMonoWheelRobot,
      title: "Wind Energy",
      description:
        "Producing green energy through modern wind turbines ensuring a sustainable future.",
    },
  ];

  return (
    <div className="relative w-full md:h-[130vh] px-5 md:px-0">
      {/* Background image layer */}
      <img
        src="https://images.pexels.com/photos/31750956/pexels-photo-31750956.jpeg"
        alt="services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay layer */}
      <div className="absolute inset-0 bg-bannerLayer bg-opacity-50"></div>

      {/* Content layer */}
      <div className="relative z-10 container h-full py-20 md:py-50">
        <div className="pb-10">
          <PageHeader
            title="Our Services"
            desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard"
            titlecss="text-text-White"
            desccss="text-text-White"
          />
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className=" rounded-xl py-10 w-full sm:w-full md:w-[30%] group transition-colors duration-300 hover:bg-background bg-text-White"
            >
              <div className="p-5 flex flex-col items-center justify-center transition-colors duration-300 group-hover:text-text-White rounded-xl">
                {/* dynamically handled Icons and color */}
                <service.icon className="w-16 h-16 text-background group-hover:text-text-White transition-colors duration-300" />

                <h4 className="text-text-Primary text-2xl font-bold pt-8 group-hover:text-text-White transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-text-Secondary pt-3 group-hover:text-text-White transition-colors duration-300 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
