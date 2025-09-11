// src/components/ClientsFeadback.jsx
import React from "react";
import PageHeader from "../CommonComponents/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import client1 from "../../assets/clientFeadback/clients-thumb-1.jpg";
import { FaStar } from "react-icons/fa";

/**
 * ClientsFeadback
 * - sm & md: show only textual slides (no pictures)
 * - lg+: show left image, center slider (with pictures + text), right image
 */
const ClientsFeadback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Farhan Islam",
      role: "CEO, Doridhub",
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image: client1,
    },
    {
      id: 2,
      name: "Sadia Khan",
      role: "CTO, ExampleCorp",
      rating: 5,
      text: "Excellent collaboration and delivery. The results were on time and beyond expectation.",
      image: client1,
    },
    {
      id: 3,
      name: "Md. Rahman",
      role: "Product Manager",
      rating: 5,
      text: "Professional team, great communication, and a quick turnaround. Highly recommended.",
      image: client1,
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

        {/* ====================
            Small & Medium (<= md)
            - No pictures in the slides
           ==================== */}
        <div className="lg:hidden px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h5 className="text-2xl font-bold text-text-Primary mb-2">
                    {t.name}
                  </h5>

                  <div className="flex items-center mb-3 text-text-Star">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                  </div>

                  <p className="text-text-Secondary mb-4">{t.text}</p>

                  <p className="text-sm text-background">{t.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ====================
            Large and up (lg+)
            - Left image, center slider (with images + details), right image
           ==================== */}
        <div className="hidden lg:flex justify-between items-center gap-6">
          {/* Left static image */}
          <div className="w-1/5 flex items-center">
            <img
              src={client1}
              alt="client left"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Center slider */}
          <div className="w-3/5">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Image (left part of slide content) */}
                    <div className="w-[35%] flex items-center justify-center p-6">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-[300px] w-auto object-cover rounded-md"
                      />
                    </div>

                    {/* Text content */}
                    <div className="w-[65%] px-6 py-8">
                      <h5 className="text-2xl font-bold text-gray-900 pb-2">
                        {t.name}
                      </h5>

                      <div className="flex gap-x-2 items-center text-yellow-400 pb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      <p className="text-gray-700 mb-4">{t.text}</p>

                      <div className="flex items-center gap-x-2 pt-3">
                        <div className="bg-gray-300 w-10 h-[2px]" />
                        <p className="text-gray-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right static image */}
          <div className="w-1/5 flex items-center">
            <img
              src={client1}
              alt="client right"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeadback;
