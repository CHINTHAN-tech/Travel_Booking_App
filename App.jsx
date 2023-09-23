import React from 'react'
import Cart from './components/cart'
import {BrowserRouter as Router,Routes,Route, Form } from 'react-router-dom'
import Navbar from './components/navbar'
import './App.css'
import Footer from './components/footer'
import { TravelBookingForm } from './components/form'

const App = () => {
  return (
   
      <div  className='App'>
      <Router>
        <Navbar/>
        <div>
      <div className="running-text" id="run-animation" style={{ fontFamily: 'Caprasimo, sans-serif'}}>
        Welcome To Travel World 
      </div>
      </div>

        <Routes>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/form' element={<TravelBookingForm/>}/>
        </Routes>
       
      </Router>
      <Footer/>

      </div>

     

    
  )
}

export default App