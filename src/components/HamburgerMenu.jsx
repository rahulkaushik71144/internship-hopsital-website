import React, { useState } from "react";
import DropDownList from "./DropDownList";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-50 absolute right-4 lg:hidden">
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden z-50 flex justify-center items-center bg-pink-500 uppercase font-bold text-white py-2 px-4 rounded-xl transition-transform transform shadow-2xl ${
          isOpen ? "translate-x-[-245px]" : ""
        }`}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-2xl text-black rounded-xl transition-transform transform overflow-scroll ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4">
          <DropDownList />
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
