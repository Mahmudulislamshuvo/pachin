import PageHeader from "../CommonComponents/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import projectImage from "../../assets/topProjects/project-item-5.jpg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoArrowRedoSharp } from "react-icons/io5";

const TopProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Mountain Adventure",
      subtitle: "Explore the heights",
      description: "A breathtaking journey through mountain peaks.",
      imageUrl: projectImage,
    },
    {
      id: 2,
      title: "Urban Exploration",
      subtitle: "Cityscapes at night",
      description: "Capturing the vibrant life of the city after dark.",
      imageUrl:
        "https://images.pexels.com/photos/12840685/pexels-photo-12840685.jpeg",
    },
    {
      id: 3,
      title: "Serene Wilderness",
      subtitle: "Tranquil landscapes",
      description: "Peaceful moments in untouched nature.",
      imageUrl:
        "https://images.pexels.com/photos/31932274/pexels-photo-31932274.jpeg",
    },
    {
      id: 4,
      title: "Coffee & Work",
      subtitle: "Morning ritual",
      description: "Productive mornings fueled by caffeine.",
      imageUrl:
        "https://images.pexels.com/photos/32263469/pexels-photo-32263469.jpeg",
    },
    {
      id: 5,
      title: "Design Studio",
      subtitle: "Creativity unleashed",
      description: "Where ideas come to life in creative layouts.",
      imageUrl:
        "https://images.pexels.com/photos/32946073/pexels-photo-32946073.jpeg",
    },
    {
      id: 6,
      title: "Cozy Workspace",
      subtitle: "Work from home",
      description: "Comfortable, stylish home office setup.",
      imageUrl:
        "https://images.pexels.com/photos/32861266/pexels-photo-32861266.jpeg",
    },
    {
      id: 7,
      title: "Tech Setup",
      subtitle: "Modern tools",
      description: "High-tech environment for developers and creators.",
      imageUrl:
        "https://images.pexels.com/photos/19506331/pexels-photo-19506331.jpeg",
    },
  ];

  return (
    <div>
      <div className="py-40">
        <div className="px-85 pb-10">
          <PageHeader
            title="Welcome to Pachin Ltd."
            desc=" Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard"
          />
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
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
                <div className="relative w-full h-[514px] overflow-hidden rounded-xl group">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-bannerLayer opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {/* Your overlay content */}
                    <div className="space-y-50">
                      {/* Arrow icon */}
                      <div className="flex justify-end p-5">
                        <IoArrowRedoSharp className="h-15 w-15 text-text-White p-2 rounded-full bg-text-Secondary" />
                      </div>
                      {/* Text content */}
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
