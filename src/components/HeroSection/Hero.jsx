import React from 'react';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className="relative">
      <Navbar />
      {/* Add your hero section content here */}
      <div className="text-center mt-16">
        <h1 className="text-yellow-500 text-4xl font-bold">Seasoned by Seymour</h1>
        <p className="text-white">Clean Eating Can Still Be Good!!</p>
        <button className="mt-6 bg-yellow-500 text-white py-2 px-4 rounded">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
