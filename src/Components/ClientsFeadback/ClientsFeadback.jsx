import PageHeader from "../CommonComponents/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const ClientsFeadback = () => {
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

  return (
    <div className="container">
      <div className="py-20">
        <div className="px-5 pb-10">
          <PageHeader
            title="Clients Feedback"
            desc="Real feedback from clients about their experience working with us."
          />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
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
            <SwiperSlide className="p-5" key={t.id}>
              <div className="relative bg-text-White rounded-lg p-8 shadow-card2">
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

                {/* Quote Icon */}
                <div className="absolute top-5 right-5 text-6xl text-text-Secondary opacity-10">
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

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-x-2 mt-8"></div>
      </div>
    </div>
  );
};

export default ClientsFeadback;
