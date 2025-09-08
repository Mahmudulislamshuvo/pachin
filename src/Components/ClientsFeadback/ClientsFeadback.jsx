import PageHeader from "../CommonComponents/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import client1 from "../../assets/clientFeadback/clients-thumb-1.jpg";
import { FaStar } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const ClientsFeadback = () => {
  return (
    <div className="container">
      <div className="py-20">
        <div className="px-5 pb-10">
          <PageHeader
            title="Clients Feedback"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
        </div>
        <div>
          <div className="flex justify-between gap-4">
            <div className="w-1/5 flex items-center">
              <img src={client1} alt="client1" className="w-full" />
            </div>

            <div className="w-3/5 h-[110%] shadow-lg">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                // navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full"
              >
                <SwiperSlide>
                  <div className="flex justify-center h-full">
                    <div className="w-[35%]">
                      <img
                        src={client1}
                        alt="client1"
                        className="h-[300px] w-auto"
                      />
                    </div>
                    <div className="w-[65%] px-5 py-8">
                      <h5 className="text-2xl font-bold text-text-Primary pb-2">
                        Farhan Islam
                      </h5>
                      <div className="flex gap-x-2 items-center text-text-Star pb-2">
                        <FaStar className="" />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-lg text-text-Secondary">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more.
                      </p>
                      <div className="flex items-center gap-x-2 pt-5">
                        <div className="bg-text-Secondary w-10 h-0.5"></div>
                        <p className="text-background">CEO, Doridhub</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center h-full">
                    <div className="w-[35%]">
                      <img
                        src={client1}
                        alt="client1"
                        className="h-[300px] w-auto"
                      />
                    </div>
                    <div className="w-[65%] px-5 py-8">
                      <h5 className="text-2xl font-bold text-text-Primary pb-2">
                        Farhan Islam
                      </h5>
                      <div className="flex gap-x-2 items-center text-text-Star pb-2">
                        <FaStar className="" />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-lg text-text-Secondary">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more.
                      </p>
                      <div className="flex items-center gap-x-2 pt-5">
                        <div className="bg-text-Secondary w-10 h-0.5"></div>
                        <p className="text-background">CEO, Doridhub</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center h-full">
                    <div className="w-[35%]">
                      <img
                        src={client1}
                        alt="client1"
                        className="h-[300px] w-auto"
                      />
                    </div>
                    <div className="w-[65%] px-5 py-8">
                      <h5 className="text-2xl font-bold text-text-Primary pb-2">
                        Farhan Islam
                      </h5>
                      <div className="flex gap-x-2 items-center text-text-Star pb-2">
                        <FaStar className="" />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <p className="text-lg text-text-Secondary">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more.
                      </p>
                      <div className="flex items-center gap-x-2 pt-5">
                        <div className="bg-text-Secondary w-10 h-0.5"></div>
                        <p className="text-background">CEO, Doridhub</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                {/* More slides */}
              </Swiper>
            </div>

            <div className="w-1/5 flex items-center">
              <img src={client1} alt="client1" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeadback;
