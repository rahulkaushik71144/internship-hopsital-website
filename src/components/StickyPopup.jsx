// StickyPopup.jsx
import React, { useState } from "react";

const StickyPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="z-50 fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 border-t border-gray-200 flex justify-between items-center md:hidden">
        {/* Book Appointment Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => {
            // Handle the book appointment action
            window.location.href = "/book-appointment"; // Redirect to booking page
          }}
        >
          Book Your Appointment
        </button>

        {/* WhatsApp Contact Button */}
        <a
          href="https://wa.me/1234567890" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp Icon URL
            alt="WhatsApp"
            className="w-5 h-5 mr-2"
          />
          WhatsApp
        </a>

        {/* Close Button */}
        <button className="ml-2 text-gray-500" onClick={closePopup}>
          ✖
        </button>
      </div>
    )
  );
};

export default StickyPopup;
