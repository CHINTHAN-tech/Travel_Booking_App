// CarouselItem.js
import React from 'react';
import './Carouselltem.css'

const CarouselItem = ({ cityData }) => {
  return (
    <div className="item">
      <img className='panel1' src={cityData.imgSrc} alt="" />
      <div className="overlay">
        <span>{cityData.country}</span>
        <div>
          <b className='Btn'>{cityData.city}</b>
          <p>{cityData.popularPlaces} Popular places</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;