import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const About = () => {
  return (
    <>
    <Navbar/>
    <div className= "py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-8">About Our Bookstore</h1>
        
        <div className="text-lg text-white leading-relaxed">
          <p className="mb-4">
            Welcome to <span className="font-semibold">Book Haven</span>, your ultimate destination for all things books. 
            Whether you are a casual reader or a passionate bookworm, we have a wide selection of genres and titles for you.
          </p>

          <p className="mb-4">
            Established in 2024, our goal has been to create a community-driven platform where readers can explore, 
            discover, and share their favorite reads. With thousands of titles, ranging from classic literature to the latest bestsellers, 
            we ensure that there's something for everyone.
          </p>

          <p className="mb-4">
            At Book Haven, we believe in the power of stories to inspire, educate, and transform lives. Our team of book lovers 
            curates the best selection of titles so you can find the next great read with ease.
          </p>

          <p className="mb-4">
            Feel free to reach out to us if you need any recommendations or assistance. Happy reading!
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Bookstore"
            className="rounded-lg shadow-lg w-full max-w-lg"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About