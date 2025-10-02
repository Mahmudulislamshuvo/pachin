import Buckle_logo from "../../assets/svg/Buckle_logo.svg";
import Burlington_Stores_logo from "../../assets/svg/Burlington_Stores_logo.svg";
import ddsDiscount from "../../assets/svg/ddsDiscount.png";
import Fashion_Nova_Logo from "../../assets/svg/Fashion_Nova_Logo.svg";
import Hot_Topic_logo from "../../assets/svg/Hot_Topic_logo.svg";
import Ross_Stores_logo from "../../assets/svg/Ross_Stores_logo.svg";
import tillys from "../../assets/svg/tillys-1-logo-svg-vector.svg";

// Country logos (PNG safer for Vercel)
import usa from "../../assets/Images/united_states_of_america.png";
import uae from "../../assets/Images/united_arab_emirates.png";
import russia from "../../assets/Images/russia.png";
import poland from "../../assets/Images/poland.png";
import singapore from "../../assets/Images/singapore.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

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

  const countryLogos = [
    { id: 1, name: "USA", logo: usa },
    { id: 2, name: "UAE", logo: uae },
    { id: 3, name: "Russia", logo: russia },
    { id: 4, name: "Poland", logo: poland },
    { id: 5, name: "Singapore", logo: singapore },
  ];

  return (
    <div className="container">
      {/* Clients */}
      <div className="bg-text-White">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-text-Primary md:text-6xl">
            OUR <span className="text-background">CLIENTS</span>
          </h2>

          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={"auto"}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false, // autoplay keeps running after drag
              reverseDirection: true, // scrolls right-to-left
            }}
            freeMode={true} // ✅ allows smooth manual sliding
            allowTouchMove={true} // ✅ enable drag/swipe
            grabCursor={true} // nice cursor when dragging
          >
            {brandLogos.map((item) => (
              <SwiperSlide key={item.id} style={{ width: "auto" }}>
                <div className="flex justify-center items-center px-4">
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

      {/* Based */}
      <div className="bg-text-White">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-text-Primary md:text-6xl">
            <span className="text-background">BASED</span>
          </h2>

          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={150}
            slidesPerView={"auto"}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            allowTouchMove={true}
            grabCursor={true}
          >
            {countryLogos.map((item) => (
              <SwiperSlide key={item.id} style={{ width: "auto" }}>
                <div className="flex flex-col justify-center items-center px-4">
                  <h5 className="font-semibold mb-2">{item.name}</h5>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-32 h-20 object-contain"
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
