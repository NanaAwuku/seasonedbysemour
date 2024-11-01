import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-400">Menu</a>
            <a href="#" className="text-gray-400">Event</a>
            <a href="#" className="text-gray-400">About</a>
          </div>
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-gray-400">Blog</a>
            <a href="#" className="text-gray-400">Gallery</a>
            <a href="#" className="text-gray-400">Contact</a>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400">Privacy Policy</a>
          </div>
        </div>
        <div className="text-gray-400 mb-4">©2024 SEASONED BY SEY MOUR CATERING</div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-400"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-gray-400"><i className="fab fa-youtube"></i></a>
          <a href="#" className="text-gray-400"><i className="fab fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
