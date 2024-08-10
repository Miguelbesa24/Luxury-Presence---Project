import React, { useState, useEffect } from 'react';
import Logo from "../assets/jhsereno-light.png";
import BG from "../assets/ServiceBG.png";
import envelope from"../assets/envelope.png";
import flag from"../assets/flag.png";
import map from"../assets/map.png";
import photo from"../assets/photo.png";
import desktop from"../assets/desktop.png";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('nav-bg');
      } else {
        navbar.classList.remove('nav-bg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav id="navbar" className="fixed top-0 w-full z-10 bg-transparent px-10 pt-12">
        <div className="flex justify-between items-center text-gray-100 font-sans font-bold text-xs pb-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-18 h-3 pr-4" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#meet-team" className="hover:text-gray-400 hover-underline-offset transition duration-100">MEET TEAM</a>
            <a href="#search-homes" className="hover:text-gray-400 hover-underline-offset transition duration-100">SEARCH FOR HOMES</a>
            <a href="#our-communities" className="hover:text-gray-400 hover-underline-offset transition duration-100">OUR COMMUNITIES</a>
            <a href="#home-valuation" className="hover:text-gray-400 hover-underline-offset transition duration-100">HOME VALUATION</a>
            <a href="#services" className="hover:text-gray-400 hover-underline-offset transition duration-100">SERVICES</a>
            <a href="#homes-america" className="hover:text-gray-400 hover-underline-offset transition duration-100">HOMES ACROSS AMERICA</a>
            <a href="#testimonials" className="hover:text-gray-400 hover-underline-offset transition duration-100">TESTIMONIALS</a>
            <a href="#contact-us" className="hover:text-gray-400 hover-underline-offset transition duration-100">CONTACT US</a>
          </div>
          <div className="md:hidden flex justify-end items-center w-full">
          
            <button onClick={toggleMenu} className="text-2xl focus:outline-none">
              &#9776;
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
  <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-20 md:hidden">
    <div className="flex flex-col p-6 text-xl text-gray-100">
      <div className="flex justify-end">
        <button onClick={toggleMenu} className="text-2xl font-bold text-gray-100 focus:outline-none">
          &times;
        </button>
      </div>
      <a href="#meet-team" onClick={toggleMenu} className="hover:text-gray-400 mt-4">MEET TEAM</a>
      <a href="#search-homes" onClick={toggleMenu} className="hover:text-gray-400 mt-2">SEARCH FOR HOMES</a>
      <a href="#our-communities" onClick={toggleMenu} className="hover:text-gray-400 mt-2">OUR COMMUNITIES</a>
      <a href="#home-valuation" onClick={toggleMenu} className="hover:text-gray-400 mt-2">HOME VALUATION</a>
      <a href="#services" onClick={toggleMenu} className="hover:text-gray-400 mt-2">SERVICES</a>
      <a href="#homes-america" onClick={toggleMenu} className="hover:text-gray-400 mt-2">HOMES ACROSS AMERICA</a>
      <a href="#testimonials" onClick={toggleMenu} className="hover:text-gray-400 mt-2">TESTIMONIALS</a>
      <a href="#contact-us" onClick={toggleMenu} className="hover:text-gray-400 mt-2">CONTACT US</a>
    </div>
  </nav>
)}




      <section
        id="services-page"
        className="w-full min-h-screen flex items-center justify-center h-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div>
          <div className="relative text-center text-white text-7xl font-serif py-10">
            Services
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                className="block w-full h-10 rounded-md border border-gray-300 py-3 pl-4 pr-20 placeholder:text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                placeholder="Search by Address or Area"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-5 bg-black font-bold text-white text-sm rounded-r-md hover:bg-gray-500 focus:outline-none focus:ring-2">
                Search
              </button>
            </div>
            <div className="relative">
              <button className="w-44 h-10 bg-black text-white px-4 text-xs font-bold rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen pt-24">
        <div className='text-2xl md:text-5xl font-serif flex justify-center'>
          Comprehensive Marketing Plan
        </div>
        <div className='py-20 md:px-20'>
          <div className='flex justify-center py-6'>
            <img src={desktop} alt="Desktop view" className="w-full md:w-3/4 "  />
          </div>
  
          <div className='flex flex-col md:flex-row justify-between items-center text-center ml-10 pr-10'>
            <div>
              <img src={envelope} alt="Responsive" className='w-44 h-44 mx-auto'/>
              <div className='font-serif text-3xl mt-4'>Responsive</div>
              <div className='px-6 mt-2'>I am always available via phone, text, or email.</div>
            </div>
    
            <div>
              <img src={flag} alt="Syndication" className='w-44 h-44 mx-auto'/>
              <div className='font-serif text-3xl mt-4'>Syndication</div>
              <div className='px-6 mt-2'>I market your property locally, nationally, and internationally.</div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row justify-between items-center text-center ml-10 pr-10 mt-12'>
            <div>
              <img src={map} alt="Virtual Tour" className='w-44 h-44 mx-auto'/>
              <div className='font-serif text-3xl mt-4'>Virtual Tour</div>
              <div className='px-6 mt-2'>Let's make your home stand out with a high-quality virtual tour.</div>
            </div>
    
            <div>
              <img src={photo} alt="Photography" className='w-44 h-44 mx-auto'/>
              <div className='font-serif text-3xl mt-4'>Photography</div>
              <div className='px-6 mt-2'>Beautiful, high-end photography is a central part of our marketing plan for your property.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
