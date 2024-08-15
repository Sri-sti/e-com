import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Maincaroseldata } from './Maincaroseldata'
// /*This is the part after navbar it the crousel after navbar */

const Maincarousel = () => {
    //to fetch image for crousel from maincrouseldata
    const items =Maincaroseldata.map((items)=><img className='cursor-pointer' role='preseentation' src={items.image} alt=''></img>)
  return (
    //in this the crousel will be autoplayed and duration of it will be to change is 1 sec
    <AliceCarousel
             items={items}
             disableButtonsControls
             autoPlay
             autoPlayInterval={1000}
             infinite
     />
  )
}

export default Maincarousel;
