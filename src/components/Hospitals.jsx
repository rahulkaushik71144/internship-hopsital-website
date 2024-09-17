import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import OurHospitals from "../constants/NavBar/our-hospitals";

const Hospitals = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[2.85rem] ">
      <div className="w-[85%]">
        <div className="w-full font-arial">
          <h1 className="text-4xl font-bold text-pink-800">Our Hospitals</h1>
          <p className="text-xl p-2 pl-0">
            We are a chain of 20 hospitals in India offering secondary and
            tertiary care to our patients.
          </p>
        </div>
        <div className="relative">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation]}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 5,
                spaceBetween: 25,
              },

              1536: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".custom-next-hosp",
              prevEl: ".custom-prev-hosp",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mt-10"
          >
            {OurHospitals.map((hospital) => (
              <>
                {hospital.children &&
                  hospital.children.map((items) => (
                    <>
                      {items.children &&
                        items.children.map((subitems) => (
                          <SwiperSlide key={subitems.id}>
                            <a href={subitems.url} className="rounded-lg">
                              <div
                                key={subitems.id}
                                className="flex flex-col  bg-white rounded-lg w-[200px] h-[200px] lg:w-[150px] lg:h-[150px]  xl:w-[200px] xl:h-[200px] shadow-2xl hover:shadow-inner-glow"
                              >
                                <img
                                  src={subitems.imgsource}
                                  className="object-cover"
                                />
                                <div className="text-center flex h-full justify-center items-center">
                                  <h1>{subitems.title}</h1>
                                </div>
                              </div>
                            </a>
                          </SwiperSlide>
                        ))}
                    </>
                  ))}
              </>
            ))}
          </Swiper>
          <div className="flex w-full">
            <div className="absolute  right-10 -top-8 lg:-left-12 lg:top-[45%]">
              <button className="custom-prev-hosp text-pink-500 text-[4rem] hover:text-pink-600 ">
                &lt;
              </button>
            </div>
            <div className="absolute right-0 -top-8 lg:-right-10 lg:top-[45%]">
              <button className="custom-next-hosp text-pink-500 text-[4rem] hover:text-pink-600">
                &gt;
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://ujalacygnus.com/hospitals/" className="rounded-xl">
            <button className="p-3 bg-pink-500 rounded-xl hover:bg-pink-600 text-white">
              Check out All Hospitals
            </button>
          </a>
        </div>
        <div className="h-[0.15rem] w-full bg-pink-500 mt-[3rem]"></div>
      </div>
    </div>
  );
};

export default Hospitals;
