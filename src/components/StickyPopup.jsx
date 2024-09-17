// StickyPopup.jsx
import React, { useState } from "react";
import Form from "./Form"; // Ensure to import the Form component

const StickyPopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const closePopup = () => {
    setIsVisible(false);
  };

  const openFormModal = () => {
    setIsFormVisible(true);
  };

  const closeFormModal = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      {/* Sticky Popup */}
      {isVisible && (
        <div className="z-50 fixed bottom-0 left-0 w-full shadow-lg p-4 flex justify-between items-center">
          <a
            href="https://wa.me/9368193681" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white px-4 py-2 rounded ml-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp Icon URL
              alt="WhatsApp"
              className="w-20 h-20 mr-2"
            />
          </a>
        </div>
      )}

      {/* Sticky Button for Mobile */}
      {isVisible && (
        <div className="z-50 fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 border-t border-gray-200 flex justify-between items-center md:hidden">
          {/* Book Appointment Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={openFormModal}
          >
            Book Your Appointment
          </button>

          {/* WhatsApp Contact Button */}
          <a
            href="https://wa.me/9368193681" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 ml-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp Icon URL
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            WhatsApp
          </a>

          {/* Close Button */}
          <button className=" absolute top-0 right-2 text-xl text-gray-500" onClick={closePopup}>
            ✖
          </button>
        </div>
      )}

      {/* Form Modal */}

      {isFormVisible && (
        <div className="fixed lg:hidden h-[100vh] w-full bg-blue-50 z-50 top-[2rem] flex items-center justify-center">
          <button
            className="absolute top-[3rem] right-10 text-white bg-pink-500 py-2 px-4 rounded-lg hover:text-gray-800"
            onClick={closeFormModal}
          >
            ✖
          </button>
          <Form />
        </div>
      )}
    </>
  );
};

export default StickyPopup;
