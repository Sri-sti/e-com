import React from 'react'
import Maincarousel from '../../comonents/HomeCarousel/Maincarousel'
import Homesectioncarousel from '../../comonents/HomeSectionCarousel/Homesectioncarousel'
import { mens_kurta } from '../../comonents/Data/mens_kurta'

const Homepage = () => {
  return (
    <div>
      <Maincarousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Homesectioncarousel data={mens_kurta} sectionName={"Men's Kurta"}/> 
        <Homesectioncarousel data={mens_kurta} sectionName={"Men's Shoes"}/> 
        <Homesectioncarousel data={mens_kurta} sectionName={"Men's Shirts"}/> 
        <Homesectioncarousel data={mens_kurta} sectionName={"Women's Sarees"}/> 
        <Homesectioncarousel data={mens_kurta} sectionName={"Women's Dress"}/> 
      </div>
    </div>
  )
}

export default Homepage
