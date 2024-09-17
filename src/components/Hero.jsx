import React from "react";
import HeroBg from "../assets/Hero/HeroBg.jpeg";
import Form from "./Form";
import Search from "./search";

const Hero = () => {
  return (
    <div className="bg-blue-50">
      <div className="min-h-[280px] lg:min-h-[400px] w-full">
        <div
          className="h-[280px] lg:h-[400px]"
          style={{
            background: `url(${HeroBg})`,
            backgroundPosition: "center",
          }}
        >
          <div className="h-full flex justify-center items-center">
            <Search />
          </div>
        </div>
      </div>
      <div className="flex-col-reverse lg:flex lg:flex-row justify-center items-center mt-15 lg:ml-[0rem] gap-[8rem]">
        <div className="lg:w-[50%] flex flex-col gap-y-8 justify-center items-center px-[2rem] xl:px-[6rem]">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl text-pink-800 font-extrabold font-arial">
            Affordable, High-Tech Medical Care at Ujala Cygnus Hospital in India
          </h1>
          <p className="text-[0.8rem] lg:text-[1rem] text-gray-500 font-bold">
            Ujala Hospital at offers an unparalleled spectrum of preventive and
            diagnostic treatment options across specialties such as Kidney
            Transplant, Liver Transplant, Oncology, Neuro Sciences, Urology,
            Gastroenterology, Cardiac Sciences, Orthopaedics, Nephrology,
            Pulmonology, Aesthetic & Reconstructive Surgery, Endocrinology, and
            Diabetes and has catered to more than 1mn patients. We have a
            network of 20 hospitals across 16 cities in underserved tier 2/3
            cities of Haryana, Uttar Pradesh, Uttarakhand, Jammu & Kashmir and
            Delhi under the guidance of over 300+ doctors and medical experts,
            our hospitals are committed to delivering the highest standard of
            medical care to each patient who visit us. We ensure to save lives
            ethically with Dignity, Affordability and using new-age advanced
            cutting-edge technology.
          </p>
        </div>
        <div className="lg:mr-[5rem] hidden lg:flex justify-center items-center">
          <Form />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center font-bold text-center">
        <div className="flex flex-col justify-center items-center gap-y-4 text-center border-b-2 lg:border-r-2 lg:border-b-0 border-pink-500 p-[3rem] lg:p-[7rem]">
          <h1 className="text-5xl">1M+</h1>
          <p className="">Patients Treated</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-pink-500 p-[3rem] lg:p-[7rem]">
          <h1 className="text-5xl">22</h1>
          <p>Network of Hospitals</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 text-center border-b-2 lg:border-b-0 lg:border-r-2 border-pink-500 p-[3rem] lg:p-[7rem]">
          <h1 className="text-5xl">300+</h1>
          <p>Doctors</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 text-center border-b-2 lg:border-b-0 border-pink-500 p-[3rem] lg:p-[7rem]">
          <h1 className="text-5xl">30+</h1>
          <p>Specialities</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
