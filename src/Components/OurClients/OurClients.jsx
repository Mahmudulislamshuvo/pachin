import Buckle_logo from "../../assets/svg/Buckle_logo.svg";
import Burlington_Stores_logo from "../../assets/svg/Burlington_Stores_logo.svg";
import ddsDiscount from "../../assets/svg/ddsDiscount.png";
import Fashion_Nova_Logo from "../../assets/svg/Fashion_Nova_Logo.svg";
import Hot_Topic_logo from "../../assets/svg/Hot_Topic_logo.svg";
import Ross_Stores_logo from "../../assets/svg/Ross_Stores_logo.svg";
import tillys from "../../assets/svg/tillys-1-logo-svg-vector.svg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OurClients = () => {
  const brandLogos = [
    { id: 1, name: "Buckle", logo: Buckle_logo },
    { id: 2, name: "Burlington Stores", logo: Burlington_Stores_logo },
    { id: 3, name: "ddsDiscount", logo: ddsDiscount },
    { id: 4, name: "Fashion Nova", logo: Fashion_Nova_Logo },
    { id: 5, name: "Hot Topic", logo: Hot_Topic_logo },
    { id: 6, name: "Ross Stores", logo: Ross_Stores_logo },
    { id: 7, name: "Tillys", logo: tillys },
  ];

  return (
    <div className="container">
      <div className="bg-text-White">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-text-Primary md:text-6xl">
            OUR <span className="text-background">CLIENTS</span>
          </h2>

          {/* ✅ Only ONE Swiper */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {brandLogos.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-40 h-25 object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
