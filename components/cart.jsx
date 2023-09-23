// App.js
import React from 'react';
import './cart.css';
import CarouselItem from './CarouselItem';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const citiesData = [
  {
    imgSrc: 'https://images.pexels.com/photos/77171/pexels-photo-77171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Great Britain',
    city: 'London',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/5282269/pexels-photo-5282269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Indonesia',  
    city: 'Bali',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Spain',
    city: 'Barcelona',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/4046386/pexels-photo-4046386.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'Italy',
    city: 'Florence',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'United Arab Emirates',
    city: 'Dubai',
    popularPlaces: 10,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'France',
    city: 'Paris',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/572689/pexels-photo-572689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    country: 'New Zealand',
    city: 'West Coast',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://cdn.pixabay.com/photo/2018/02/25/21/34/temple-3181803_1280.jpg',
    country: 'India',
    city: 'Rajasthan',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg',
    country: 'Scotland',
    city: 'west',
    popularPlaces: 12,
  },
  {
    imgSrc: 'https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg',
    country: 'Australia',
    city: 'new cirt',
    popularPlaces: 12,  
  },
  {
    imgSrc: 'https://cdn.pixabay.com/photo/2012/11/06/15/40/tree-64310_1280.jpg',
    country: 'South Africa',
    city: 'Gbvkv',
    popularPlaces: 12,  
  },

 
  
];

const Cart = () => {
  return (
    
    <main>
      <div className='Bg'>      
      <div className="header">
      </div>
      <div className="owl-carousel owl-theme">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={100 / 4} // Adjust this value for the number of items you want to display
        selectedItem={0}
        emulateTouch={true} // Enable touch gestures for mobile
      >
        {citiesData.map((cityData, index) => (
          <CarouselItem key={index} cityData={cityData} />
        ))}
      </Carousel>
      </div>
      </div>
    </main>
  );
};


export default Cart;















