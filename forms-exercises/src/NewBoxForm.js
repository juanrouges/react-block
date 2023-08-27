import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ submit }) => {
  const initialFormData = {
    color: "",
    height: "",
    width: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    submit(formData);
    setFormData(initialFormData);
  }

  function handleChange(e) {
    setFormData((formData) => {
      return { ...formData, [e.target.name]: e.target.value, id: uuid() };
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new box</h3>
      <div>
        <label htmlFor="color"></label>
        <input
          id="color"
          name="color"
          type="text"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="width"></label>
        <input
          id="width"
          name="width"
          type="text"
          placeholder="Width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height"></label>
        <input
          id="height"
          name="height"
          type="text"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;
