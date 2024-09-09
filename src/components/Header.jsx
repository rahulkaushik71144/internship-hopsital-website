import React, { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import OurSpecialities from "../constants/NavBar/our-specialities";
import OurHospitals from "../constants/NavBar/our-hospitals";
import KeyProcedures from "../constants/NavBar/key-procedures";
import BookApppointment from "../constants/NavBar/book-appointment";
import About from "../constants/NavBar/about";

const Header = () => {
  return (
    <div className="h-[4rem] z-50 w-full fixed bg-white flex items-center justify-center">
      <div className="flex absolute items-center h-full px-10 -left-4 md:left-0 z-50">
        <Link to="/" className="xl:h-[80%] md:h-[60%] h-[50%]">
          <img
            src="https://ujalacygnus.com/wp-content/uploads/2024/05/US_Logo-01-1.jpg"
            className="xl:h-[100%] md:h-[100%] h-[100%]"
            alt=""
          />
        </Link>
      </div>
      <nav className="hidden z-40 w-full h-full lg:flex lg:justify-center lg:items-center gap-8 mx-[20rem] xl:mx-0">
        <div className="group">
          {OurSpecialities.map((speciality) => (
            <>
              <div className="cursor-pointer hover:text-pink-400 relative z-40">
                <a href={speciality.url}>{speciality.title}</a>
              </div>
              <div className="min-w-[100vw] hidden left-0 top-0 group-hover:flex absolute opacity-0 group-hover:opacity-100 bg-white p-8 rounded-b-xl shadow-xl z-30">
                <ul className="columns-4 mt-[4rem]">
                  {speciality.children.map((item) => (
                    <li key={item.id} className="p-2 ">
                      <a
                        className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500 text-md"
                        href={item.url}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
        <div className="group">
          {OurHospitals.map((hospital) => (
            <>
              <div className="cursor-pointer hover:text-pink-400 relative z-40">
                <a href={hospital.url}>{hospital.title}</a>
              </div>
              <div className="min-w-[100vw] left-0 top-0 hidden group-hover:block absolute opacity-0 group-hover:opacity-100 bg-white p-8 rounded-b-xl shadow-xl z-30">
                <div className="flex justify-center mt-[4rem] gap-[8rem]">
                  {hospital.children.map((item) => (
                    <div className="">
                      <div key={item.id} className="text-xl relative ">
                        {item.title}

                        {item.children && (
                          <div className="relative">
                            <ul className="columns-1">
                              {item.children.map((subitem) => (
                                <li
                                  key={subitem.id}
                                  className="py-2 text-black "
                                >
                                  <a
                                    className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500 text-sm"
                                    href={subitem.url}
                                  >
                                    {subitem.title}
                                  </a>

                                  {subitem.children && (
                                    <div className="mx-4 relative">
                                      <ul className="columns-1">
                                        {subitem.children.map((sub_subitem) => (
                                          <li
                                            key={sub_subitem.id}
                                            className="pt-2 cursor-pointer text-black list-disc"
                                          >
                                            <a
                                              className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500 text-sm"
                                              href={sub_subitem.url}
                                            >
                                              {sub_subitem.title}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="group relative z-40">
          {KeyProcedures.map((keyProcedure) => (
            <div className="cursor-pointer hover:text-pink-400">
              <a className="" href={keyProcedure.url}>
                {keyProcedure.title}
              </a>
            </div>
          ))}
        </div>
        <div className="group relative z-40">
          {BookApppointment.map((appointment) => (
            <div className="cursor-pointer hover:text-pink-400">
              <a className="" href={appointment.url}>
                {appointment.title}
              </a>
            </div>
          ))}
        </div>
        <div className="group">
          {About.map((about) => (
            <>
              <div className="cursor-pointer hover:text-pink-400 relative z-40">
                <a href={about.url}>{about.title}</a>
              </div>
              <div className="min-w-[100vw] left-0 top-0 hidden group-hover:block absolute opacity-0 group-hover:opacity-100 bg-white p-8 rounded-b-xl shadow-xl z-30">
                <div className="flex justify-center mt-[4rem] lg:gap-[4rem] xl:gap-[6rem]">
                  {about.children.map((item) => (
                    <div className="">
                      <div
                        key={item.id}
                        className="lg:text-lg xl:text-xl relative "
                      >
                        <a
                          href={item.url}
                          className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500"
                        >
                          {item.title}
                        </a>

                        {item.children && (
                          <div className="relative">
                            <ul className="columns-1">
                              {item.children.map((subitem) => (
                                <li
                                  key={subitem.id}
                                  className="py-2 text-black "
                                >
                                  <a
                                    className="hover:text-pink-500 hover:border-b-2 hover:border-pink-500 text-sm"
                                    href={subitem.url}
                                  >
                                    {subitem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </nav>
      <HamburgerMenu />
    </div>
  );
};

export default Header;
