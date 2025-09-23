import PageHeader from "../CommonComponents/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";
import { useState } from "react";
import image1 from "../../assets/Images/GalleryyMain1.jpg";
import image2 from "../../assets/Images/GalleryyMain2.jpg";
import image3 from "../../assets/Images/GalleryyMain3.jpg";
import image4 from "../../assets/Images/GalleryyMain4.jpg";
import image5 from "../../assets/Images/GalleryyMain5.jpg";
import image6 from "../../assets/Images/GalleryyMain6.jpg";

const TopProjects = () => {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      subtitle: "Chic & Comfortable",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "Chic Bedroom Design",
      subtitle: "Elegant & Serene",
      imageUrl: image2,
    },
    {
      id: 3,
      title: "Minimalist Office Space",
      subtitle: "Clean & Productive",
      imageUrl: image3,
    },
    {
      id: 4,
      title: "Cozy Reading Nook",
      subtitle: "Quiet & Quaint",
      imageUrl: image4,
    },
    {
      id: 5,
      title: "Elegant Dining Area",
      subtitle: "Stylish & Sophisticated",
      imageUrl: image5,
    },
    {
      id: 6,
      title: "Stylish Workspace",
      subtitle: "Modern & Functional",
      imageUrl: image6,
    },
    {
      id: 7,
      title: "Contemporary Kitchen",
      subtitle: "Sleek & Smart",
      imageUrl: image3,
    },
  ];

  return (
    <div>
      <div className="py-20 md:py-40">
        <div className="px-5 md:px-85 pb-10">
          <PageHeader
            title="Our Portfolio"
            desc="Explore a selection of our finest work. Each project is a testament to our commitment to quality, creativity, and client satisfaction."
          />
        </div>
        <div className="px-5 md:px-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="relative w-full h-[514px] overflow-hidden rounded-xl group cursor-pointer"
                  onClick={() => handleToggle(project.id)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full bg-bannerLayer transition-opacity duration-500 ${
                      activeId === project.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="space-y-50">
                      <div className="flex justify-end p-5">
                        <IoArrowRedoSharp className="h-15 w-15 text-text-White p-2 rounded-full bg-text-Secondary" />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg mb-1 text-text-White">
                          {project.title}
                        </h3>
                        <p className="mb-2 text-text-White text-2xl font-bold">
                          {project.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-lg font-medium text-background">
                          <a href="#">View Project</a>
                          <span>
                            <MdOutlineArrowRightAlt />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
