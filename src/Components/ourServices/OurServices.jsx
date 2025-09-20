import { FaHammer, FaHeadset, FaMobileAlt, FaUsers, FaTasks, FaDraftingCompass } from "react-icons/fa";
import PageHeader from "../CommonComponents/PageHeader";

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: FaHammer,
      title: "Renovation and restoration",
      description:
        "Transform your space. Whether it's a single room or a full-scale renovation, we'll work with you to create a beautiful and functional space that you'll love.",
    },
    {
      id: 2,
      icon: FaHeadset,
      title: "Continuous Support",
      description:
        "Your satisfaction is our priority. Our dedicated team provides continuous support throughout the entire process, from initial concept to final installation.",
    },
    {
      id: 3,
      icon: FaMobileAlt,
      title: "App Access",
      description:
        "Stay connected to your project. With our exclusive app, you can track progress, communicate with our team, and access all your project details anytime, anywhere.",
    },
    {
      id: 4,
      icon: FaUsers,
      title: "Consulting",
      description:
        "Expert guidance for your vision. Our experienced consultants will help you navigate the complexities of your project, ensuring a smooth and successful outcome.",
    },
    {
      id: 5,
      icon: FaTasks,
      title: "Project Management",
      description:
        "On time and on budget. Our meticulous project managers will oversee every detail of your project, ensuring it's completed to the highest standards, on time and within budget.",
    },
    {
      id: 6,
      icon: FaDraftingCompass,
      title: "Architectural Solutions",
      description:
        "Innovative design for modern living. We create cutting-edge architectural solutions that are both beautiful and sustainable, tailored to your lifestyle and needs.",
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
            desc="From concept to creation, we offer a complete range of services to bring your vision to life. Discover how we can help you create the space of your dreams."
            titlecss="text-text-White"
            desccss="text-text-White"
          />
        </div>
        <div className="flex flex-wrap gap-10 justify-center">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className=" rounded-12px py-10 w-full sm:w-full md:w-[30%] group transition-colors duration-300 hover:bg-background bg-text-White"
            >
              <div className="p-5 flex flex-col items-center justify-center transition-colors duration-300 group-hover:text-text-White rounded-12px">
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