import React from "react";

function ProductForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });
  return (
    <form className="post-form">
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => setFormData({...formData, name: event.target.value})}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => setFormData({...formData, image: event.target.value})}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => setFormData({...formData, price: event.target.value})}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => setFormData({...formData, description: event.target.value})}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          alert([formData.name, formData.image, formData.price, formData.description].join("\n"));
        }}>
          Create
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
