import React, { useRef, useState } from 'react';
import './ImageComponent.css';
import default_image from "../Assests/default_image.svg";

const ImageComponent = () => {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const ImageGenerator = async () => {
    const prompt = inputRef.current.value.trim();

    if (!prompt) {
      alert("Please enter a description.");
      return;
    }

    setLoading(true); // Move this here inside the function

    try {
      const response = await fetch("https://api.deepai.org/api/text2img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": "b38d745b-60f3-4177-a216-f3e5608118b5",
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "512x512",
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.output_url) {
        setImage_url(data.output_url);
      } else {
        alert("Image generation failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }

    setLoading(false); // Stop loading after fetch completes
  };

  return (
    <div className="ai-image">
      <div className="header">
        AI Image <span>Generator</span>
      </div>

      <div className="img-loading">
        <div className="image">
          <img
            src={image_url === "/" ? default_image : image_url}
            alt="Generated"
          />
        </div>

        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>Loading...</div>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe what you want to see"
        />
        <div onClick={ImageGenerator} className="generate-btn">
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
