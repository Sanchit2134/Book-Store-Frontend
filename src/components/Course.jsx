import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  const [book,setBook] = useState([])
  useEffect(()=>{

    const getbook = async()=>{
      try{
        const res = await axios.get('https://book-store-backend-tau-one.vercel.app//book');
        console.log(res.data);
        setBook(res.data);
      }
      catch(error){
        console.log("Error",error);
      }
    }
    getbook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex'>
        <div className='mt-28 items-center justify-cente text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia natus ullam incidunt, hic fugiat officiis magnam, error blanditiis ab reprehenderit tempora. Totam error consectetur soluta repellat ab, impedit hic commodi perferendis. Aspernatur velit autem maiores nobis ex quaerat unde ipsum.</p>
          <Link to="/">
            <button className='mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-200 '>Back</button>
          </Link>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item) => {
            return (
              <Cards key={item.id} item={item} />
            )
          })
        }
      </div>
    </>
  )
}

export default Course