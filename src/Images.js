import React, { useState } from "react";
import "./App.css";

function Images() {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);
  const [imageList, setimageList] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const getImages = async () => {
    try {
      setIsloading(true);
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: value,
        }),
        headers: {
          // Corrected typo here
          "Content-Type": "application/json", // Corrected header name here
        },
      };
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      console.log(data);

      const existingData = JSON.parse(localStorage.getItem("imageData")) || [];

      setImages(data);

      const imageObject = {
        value: value,
        images: data,
      };

      const newImages = [...existingData, imageObject];
      setimageList(newImages);
      localStorage.setItem("imageData", JSON.stringify(newImages));
      setIsloading(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <header>
        <h2>The Community Showcase</h2>
        <p>
          This is ai generating website were we have called api provided by
          openai dell-e
        </p>
      </header>
      <section className="search-section">
        <div>
          <label for="exampleDataList" className="form-label">
            Enter prompt for generating images
          </label>
          <input
            value={value}
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Eg : images of racing cars"
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-success mt-3"
          onClick={getImages}
        >
          Submit
        </button>
      </section>

      
        {isloading ? (
          <div class="d-flex justify-content-center m-5">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (<section className="img-section">
          {images?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Generated image of ${value}`}
            />
          ))}
          </section>
        )}
        {/* {images?.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Generated image of ${value}`}
          />
        ))} */}
      
    </div>
  );
}

export default Images;
