import React, { useState } from 'react';
import './form.css'

export const TravelBookingForm = () => {
  const [fullName, setFullName] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`NAME: ${fullName}`)
    console.log(`Destination:${destination}`)
    console.log(`Desparture:${departureDate}`)
    console.log(`ReturnDate:${returnDate}`)

    setFullName("")
    setDestination("")
    setDepartureDate("")
    setReturnDate("")

    setIsSubmitted(true); 
  };

  return (
    <div className='form'>
      <h2>Travel Booking Form</h2>
      {isSubmitted ? (
        <p>Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label>
            Destination:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
          </label>
          <label>
            Departure Date:
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
            />
          </label>
          <label>
            Return Date:
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              required
            />
          </label>
          <button type="submit">Book Now</button>
        </form>
      )}
    </div>
  );
}
