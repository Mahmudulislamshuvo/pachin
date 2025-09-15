import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Farhan Islam",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    role: "CEO, Doridhub",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Aisha Khan",
    rating: 5,
    text: "The readable content of a page when looking at its layout is a long established fact that a reader will be distracted by.",
    role: "Lead Designer, Creativa",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    rating: 5,
    text: "Looking at its layout, it is a long established fact that a reader will be distracted by the readable content of a page.",
    role: "CTO, Tech Solutions",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    id: 4,
    name: "Emily White",
    rating: 5,
    text: "A reader will be distracted by the readable content of a page. It is a long established fact when looking at its layout.",
    role: "Marketing Head, Innovate Inc.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-bg-blog py-20">
      <div className="container px-5 md:px-0 mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase text-sm tracking-wide text-text-Secondary">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-Primary pt-3">
            Clients Feedback
          </h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // Correctly targets our custom container
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-8px p-8 shadow-box-shadow h-full">
                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-bold text-text-Primary">
                      {t.name}
                    </h5>
                    <div className="flex text-text-Star">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} className="mr-1" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Feedback Text */}
                <p className="text-text-Secondary mb-6">{t.text}</p>
                {/* Role */}
                <p className="text-sm text-background font-semibold">
                  {t.role}
                </p>
                {/* Quote Icon - Using a proper quote icon for better semantics */}
                <div className="absolute top-5 right-5 text-6xl text-text-Secondary -z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10 11H7v3H5v-3H2V9h3V6h2v3h3zm10 0h-3v3h-2v-3h-3V9h3V6h2v3h3z"
                    ></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination Dots Container */}
        <div className="custom-pagination flex justify-center gap-x-2 mt-8"></div>
      </div>
    </div>
  );
};

export default Testimonial;
