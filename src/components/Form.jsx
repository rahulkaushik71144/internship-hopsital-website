// Form.jsx
import React from "react";
import "../CSS/Form.css";
import OurHospitals from "../constants/NavBar/our-hospitals";

const Form = () => {
  return (
    <div
      className="form-container w-[350px] md:w-[410px] relative"
      id="appointment"
    >
      <div className="heading uppercase p-4">
        Book Your<div className="mt-2">Appointment</div>
      </div>
      <form className="form" action="">
        <input
          placeholder="Name"
          id="name"
          name="name"
          type="text"
          className="input"
          required
        />
        <input
          placeholder="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          className="input"
          required
        />
        <select
          id="location"
          name="location"
          className="input cursor-pointer"
          required
        >
          <option value="" disabled selected>
            Preferred Hospital Location
          </option>
          {OurHospitals.map((hospital) =>
            hospital.children
              ? hospital.children.map((items) =>
                  items.children
                    ? items.children.map((subitems) =>
                        subitems.children ? (
                          subitems.children.map((sub_subitems) => (
                            <option
                              key={sub_subitems.id}
                              value={sub_subitems.id}
                            >
                              {sub_subitems.title}
                            </option>
                          ))
                        ) : (
                          <option key={subitems.id} value={subitems.id}>
                            {subitems.title}
                          </option>
                        )
                      )
                    : null
                )
              : null
          )}
        </select>
        <textarea
          placeholder="Describe Your Concern (Optional)"
          id="Describe Your Concern"
          name="Describe Your Concern"
          className="input"
          rows="4"
        ></textarea>

        <input
          value="Submit"
          type="submit"
          className="login-button uppercase cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Form;
