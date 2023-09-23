import React from 'react'

export const Product = () => {
  return (
    <div>
        <img src={imgSrc} alt='image' />
        <div>
            <p><b>{country}</b></p>
            <p><b>{city}</b></p>
            <p><b>{popularPlaces}</b></p>
        </div>

    </div>
  )
}

