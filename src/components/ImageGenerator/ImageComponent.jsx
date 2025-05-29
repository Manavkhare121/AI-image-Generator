import React from 'react'
import './ImageComponent.css'
import default_image from "../Assests/default_image.svg"
const ImageComponent = () => {
  return (
    <div className='ai-image'>
        <div className="header">
            AI Image <span>Generator</span>
        </div>
        <div className="img-loading">
            <div className="image">
                <img src={default_image}/>
            </div>
        </div>
        <div className="search-box">
          <input type='text' className='search-input' placeholder='Describe What You Want To See'></input>
          <div className="generate-btn">
            Generate
          </div>
        </div>
      
    </div>
  )
}

export default ImageComponent
