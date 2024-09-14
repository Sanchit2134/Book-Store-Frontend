import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const FreeBooks = () => {

    const [book,setBook] = useState([])
    useEffect(()=>{
  
      const getbook = async()=>{
        try{
          const res = await axios.get('http://localhost:4001/book');
          console.log(res.data);
          const data = res.data.filter((data) => data.category === 'Free')
          setBook(data);
          console.log(data);
          
        }
        catch(error){
          console.log("Error",error);
        }
      }
      getbook();
    },[])
    const FilterBook = book.filter((data) => data.category === 'Free')


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
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Free Offered Courese</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt assumenda tempora fugiat pariatur autem.</p>
                </div>
            
                <div>
                    <Slider {...settings}>
                        {FilterBook.map((item) => {
                            return <Cards item={item} key={item.id} />
                        })}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBooks