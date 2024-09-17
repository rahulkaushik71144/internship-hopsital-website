import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import HealthBlogsList from "../constants/HealthBlogsList";

const HealthBlogs = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[2.85rem] ">
      <div className="w-[85%]">
        <div className="w-full font-arial">
          <h1 className="text-4xl font-bold text-pink-800">Health Blogs</h1>
          <p className="text-xl p-2 pl-0">
            Simple steps you can take to improve your health
          </p>
        </div>
        <div className="relative">
          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 25,
              },

              1536: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mt-10"
          >
            {HealthBlogsList.map((blog) => (
              <SwiperSlide key={blog.id}>
                <a href={blog.url} className="rounded-lg">
                  <div className="flex flex-col justify-center items-center bg-white rounded-lg w-[250px] h-[350px] xl:w-[250px] xl:h-[350px] shadow-2xl hover:shadow-inner-glow">
                    <div className="h-[165px] w-[250px] xl:w-[250px] xl:h-[165px] bg-pink-400 rounded-t-lg">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="h-full w-full rounded-t-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h1 className="p-4">{blog.title}</h1>
                      <p className="text-sm p-2 text-gray-600">
                        {blog.content}
                      </p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex w-full">
            <div className="absolute  right-10 -top-8 lg:-left-12 lg:top-[45%]">
              <button className="custom-prev text-pink-500 text-[4rem] hover:textf-pink-600">
              &lt;
              </button>
            </div>
            <div className="absolute right-0 -top-8 lg:-right-10 lg:top-[45%]">
              <button className="custom-next text-pink-500 text-[4rem] hover:text-pink-600">
                &gt;
              </button>
            </div>
          </div>
        </div>

        <div className="h-[0.15rem] w-full bg-pink-500 mt-[3rem]"></div>
      </div>
    </div>
  );
};

export default HealthBlogs;
