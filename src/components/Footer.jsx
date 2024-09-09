import React from "react";
import Socials from "../constants/Socials";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Hospital Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Ujala Cygnus Hospitals</h2>
          <p className="text-sm">
            Ujala Cygnus Hospitals offers an unparalleled spectrum of preventive
            and diagnostic treatment options across specialties such as Kidney
            Transplant, Liver Transplant, Oncology, Neuro Sciences, Urology,
            Gastroenterology, Cardiac Sciences, Orthopaedics, Nephrology,
            Pulmonology, Aesthetic & Reconstructive Surgery, Endocrinology, and
            Diabetes and has catered to more than 1 million patients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="text-sm text-blue-500 space-y-2">
            <li>
              <a href="#" className="hover:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Our Hospitals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Our Specialties
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Our Doctors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Key Procedures
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Media News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Appointment Booking
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">
            <strong>Phone:</strong> 011- 41750891
          </p>
          <p className="text-sm mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@ujalacygnus.com" className="hover:underline">
              info@ujalacygnus.com
            </a>
          </p>
          <p className="text-sm">
            <strong>Address:</strong> A-9A, Ground Floor, Green Park Main, New
            Delhi-110016
          </p>
          <ul className="flex gap-5 lg:gap-8 flex-wrap mt-8">
            {Socials.map((item) => (
              <>
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="group relative flex items-center justify-center w-10 h-10
                lg:hover:translate-y-3 lg:transition-all lg:duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`${item.id == 0 ? "bg-white rounded-full" : ""}`}
                    height={42}
                    width={42}
                  />
                  <span class="absolute z-1 opacity-0 lg:group-hover:opacity-100 lg:group-hover:text-black lg:group-hover:text-sm lg:group-hover:font-bold lg:group-hover:-translate-y-10 lg:duration-700">
                    {item.title}
                  </span>
                </a>
              </>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ujala Cygnus Hospitals. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
