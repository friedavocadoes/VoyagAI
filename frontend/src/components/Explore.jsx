import React from 'react'
import list from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Card';


export default function Freebokk() {
    {/* filter books of free category books from data */ }
    const filterdata=list.filter((data)=>data.category==="free");
    {/*show this filterdata in cards  */}
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };







  return (
    <>
    <div>
        <div className='max-w-screen-2xl-container mx-auto md:px-20 px-4 flex my-2 text-2xl font-semibold'><h2>Explore Nearby Locations</h2>
        </div>
        <div className='max-w-screen-2xl-container mx-auto md:px-20 px-4 text-xl '><p> every journey begins with a dream and ends with unforgettable memories</p>
        </div>
    </div>
    <div className='max-w-screen-2xl-container mx-10 md:px-20 px-9 my-8  '>
    <Slider {...settings}>
       {filterdata.map((item)=>(
        <Card item={item} key={item.id}/>
       ))}
      </Slider>
    </div>

    </>
  )
}
