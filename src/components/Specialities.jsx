import React from "react";
import SpecialitiesList from "../constants/SpecialitiesList";

const Specialities = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[6rem]">
      <div className="w-[85%]">
        <div className="w-full font-arial">
          <h1 className="text-4xl font-bold text-pink-800">Our Specialities</h1>
          <p className="text-xl p-2 pl-0">
            We offer a multitude of specialities under one roof
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row gap-x-8 ">
          <div className="flex flex-col lg:flex-row items-center mt-10 gap-8">
            {SpecialitiesList.map((speciality) => (
              <a href={speciality.url} className="rounded-lg">
                <div
                  key={speciality.id}
                  className="flex flex-col  bg-white rounded-lg w-[200px] h-[200px] lg:w-[150px] lg:h-[150px]  xl:w-[200px] xl:h-[200px] shadow-2xl hover:shadow-inner-glow"
                >
                  <img src={speciality.imgurl} className="object-cover" />
                  <div className="text-center flex h-full justify-center items-center"><h1>{speciality.title}</h1></div>
                </div>
              </a>
            ))}
          </div>
          <div className="flex-col justify-center lg:w-[50%] xl:w-[30%] items-center pt-6 lg:pt-10 xl:pt-12 w-full">
            <h1 className="text-xl font-bold">Ujala Cygnus Expertise</h1>
            <p className="text-sm pt-2">
              We have been treating patients with over 30+ specialities across
              Delhi, Haryana, Uttrakhand, Uttar Pradesh and Srinagar.
            </p>
            <a
              href="https://ujalacygnus.com/departments/"
              className="rounded-xl"
            >
              <button className="p-3 mt-4 ml-8 h-[45px] w-[100px] text-center flex justify-center items-center bg-pink-500 rounded-xl hover:bg-pink-600 text-white">
                View All
              </button>
            </a>
          </div>
        </div>
        <div className="h-[0.15rem] w-full bg-pink-500 mt-[3rem]"></div>
      </div>
    </div>
  );
};

export default Specialities;
