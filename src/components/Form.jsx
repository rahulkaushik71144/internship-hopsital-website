import React from "react";
import "../CSS/Form.css";

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
          <option className="" value="location1">
            Hospital Location 1
          </option>
          <option className="" value="location2">
            Hospital Location 2
          </option>
          <option className="" value="location3">
            Hospital Location 3
          </option>
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
