import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/jhsereno-light.png";
import BG from "../assets/ServiceBG.png";
import envelope from "../assets/envelope.png";
import flag from "../assets/flag.png";
import map from "../assets/map.png";
import photo from "../assets/photo.png";
import desktop from "../assets/desktop.png";
import flip1 from "../assets/flip1.png";
import flip2 from "../assets/flip2.png";
import flip3 from "../assets/flip3.png";
import flip4 from "../assets/flip4.png";
import selling from "../assets/selling.png";
import buying from "../assets/buying.png";
import NumberAnimation from "./NumberAnimation";
import slide1 from "../assets/Slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sponsor from "../assets/sponsor.png";
import luxury from "../assets/luxury.png";
import luxury2 from "../assets/luxury2.png";
import luxury3 from "../assets/luxury3.png";
import luxury4 from "../assets/luxury4.png";
import luxury5 from "../assets/luxury5.png";
import drone from "../assets/drone.png";
import phone from "../assets/phone.png";
import work from "../assets/work.png";
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null); // State to track flipped card
  const cardRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Slide will change every 3 seconds
    arrows: true,
  };
  const handleMouseEnter = (index) => {
    if (window.innerWidth > 768) {
      cardRefs.current[index].classList.add("flipped");
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth > 768) {
      cardRefs.current[index].classList.remove("flipped");
    }
  };

  const handleCardClick = (index) => {
    setFlippedCard(index === flippedCard ? null : index); // Toggle flip on click
  };
  const images = [flip1, flip2, flip3, flip4];
  const texts = [
    "Decor Guidance",
    `<ul class="list-disc pl-5">
      <h1 class="text-xl font-bold">My Staging Expertise</h1>
       <br>
      <li>Unclutter and organize your home</li>
      <li>Neatly arrange drawers and cabinets</li>
      <li>Keep pets outdoors or off the premises</li>
      <li>Play soft music</li>
    </ul>`,
    "Intentional Layout",
    `<ul class="list-disc pl-5">
    <br>
      <li>Unclutter and organize your home</li>
      <li>Neatly arrange drawers and cabinets</li>
      <li>Keep pets outdoors or off the premises</li>
      <li>Play soft music</li>
    </ul>`,
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("nav-bg");
      } else {
        navbar.classList.remove("nav-bg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
   <nav
  id="navbar"
  className="fixed top-0 w-full z-10 bg-transparent px-10 pt-12"
>
  <div className="flex justify-between items-center text-gray-100 font-sans font-bold text-xs pb-4">
    <div className="flex items-center">
    <img 
  src={Logo} 
  alt="Logo" 
  className="sm:w-22 sm:h-10 md:w-18 md:h-3 lg:w-18 lg:h-3 pr-4"
/>
    </div>
    <div className="hidden md:flex sm:text-xs md:text-xs lg:text-base space-x-8">
      <a
        href="#meet-team"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        MEET TEAM
      </a>
      <a
        href="#search-homes"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        SEARCH FOR HOMES
      </a>
      <a
        href="#our-communities"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        OUR COMMUNITIES
      </a>
      <a
        href="#home-valuation"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        HOME VALUATION
      </a>
      <a
        href="#services"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        SERVICES
      </a>
      <a
        href="#homes-america"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        HOMES ACROSS AMERICA
      </a>
      <a
        href="#testimonials"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        TESTIMONIALS
      </a>
      <a
        href="#contact-us"
        className="hover:text-gray-400 hover-underline-offset transition duration-100"
      >
        CONTACT US
      </a>
    </div>
    <div className="md:hidden flex justify-end items-center w-full">
      <button
        onClick={toggleMenu}
        className="text-2xl focus:outline-none"
      >
        &#9776;
      </button>
    </div>
  </div>
</nav>

{isMenuOpen && (
  <nav className="fixed inset-0 bg-black bg-opacity-75 z-20 md:hidden flex flex-col p-6">
    <div className="flex justify-between items-center mb-8 mt-8">
      <img src={Logo} alt="Logo" className="w-36 h-auto" />
      <button
        onClick={toggleMenu}
        className="text-2xl font-bold text-gray-100 focus:outline-none"
      >
        &times;
      </button>
    </div>
    <div className="flex flex-col text-xl text-gray-100 space-y-6">
      <a
        href="#meet-team"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        MEET TEAM
      </a>
      <a
        href="#search-homes"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        SEARCH FOR HOMES
      </a>
      <a
        href="#our-communities"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        OUR COMMUNITIES
      </a>
      <a
        href="#home-valuation"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        HOME VALUATION
      </a>
      <a
        href="#services"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        SERVICES
      </a>
      <a
        href="#homes-america"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        HOMES ACROSS AMERICA
      </a>
      <a
        href="#testimonials"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        TESTIMONIALS
      </a>
      <a
        href="#contact-us"
        onClick={toggleMenu}
        className="hover:text-gray-400"
      >
        CONTACT US
      </a>
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
          <div className="relative text-center text-white text-7xl font-serif py-10 lg:text-8xl">
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

      <section id="marketing" className="w-full min-h-screen pt-24">
  <div className="text-2xl md:text-5xl font-serif flex justify-center text-center">
    Comprehensive Marketing Plan
  </div>
  <div className="py-20 md:px-20">
    <div className="flex justify-center py-6">
      <img
        src={desktop}
        alt="Desktop view"
        className="w-full md:w-3/4 shadow-lg"
      />
    </div>

    {/* Start of responsive section */}
    <div className="flex flex-wrap justify-center md:justify-between items-center text-center space-y-12 md:space-y-0">
      <div className="w-full md:w-1/4 px-4">
        <img src={envelope} alt="Responsive" className="w-44 h-44 mx-auto" />
        <div className="font-serif text-3xl mt-4">Responsive</div>
        <div className="px-6 mt-2">
          I am always available via phone, text, or email.
        </div>
      </div>

      <div className="w-full md:w-1/4 px-4">
        <img src={flag} alt="Syndication" className="w-44 h-44 mx-auto" />
        <div className="font-serif text-3xl mt-4">Syndication</div>
        <div className="px-6 mt-2">
          I market your property locally, nationally, and internationally.
        </div>
      </div>

      <div className="w-full md:w-1/4 px-4">
        <img src={map} alt="Virtual Tour" className="w-44 h-44 mx-auto" />
        <div className="font-serif text-3xl mt-4">Virtual Tour</div>
        <div className="px-6 mt-2">
          Let's make your home stand out with a high-quality virtual tour.
        </div>
      </div>

      <div className="w-full md:w-1/4 px-4">
        <img src={photo} alt="Photography" className="w-44 h-44 mx-auto" />
        <div className="font-serif text-3xl mt-4">Photography</div>
        <div className="px-6 mt-2">
          Beautiful, high-end photography is a central part of our marketing plan for your property.
        </div>
      </div>
    </div>
    {/* End of responsive section */}
  </div>
</section>


      <section
        id="flip"
        className="w-full min-h-screen pt-8 flex justify-center items-center bg-gray-200"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flip-card relative md:w-64 md:h-64 cursor-pointer perspective ${
                flippedCard === index ? "flipped" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleCardClick(index)}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div
                  className={`flip-card-front absolute inset-0 w-full h-full backface-hidden rounded-lg ${
                    index % 2 === 0
                      ? "flex flex-col items-center justify-center bg-gray-800"
                      : ""
                  }`}
                >
                  {index % 2 === 0 ? (
                    <div className="text-center px-4 py-2">
                      <p className="text-sm md:text-lg lg:text-2xl text-white font-serif">
                        {texts[index]}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={image}
                      alt={`Flip Card Front ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>

                {/* Back Side */}
                <div
                  className={`flip-card-back absolute inset-0 w-full h-full backface-hidden rounded-lg ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-800"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <img
                      src={image}
                      alt={`Flip Card Back ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  ) : (
                    <div className="px-4 py-4">
                      <p
                        className="text-sm md:text-sm font-semibold text-white"
                        dangerouslySetInnerHTML={{ __html: texts[index] }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="selling"
        className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat px-4 md:px-10 relative rounded-3xl mt-10"
        style={{
          backgroundImage: `url(${selling})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        <div className="relative flex flex-col items-center text-white text-2xl md:text-5xl font-serif my-10 md:pt-0">
          <h2 className="text-center">The Selling Process</h2>
        </div>
        <div className="relative flex flex-col md:flex-row items-center text-center w-full px-4 md:px-10 mt-10 md:mt-18">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row text-white md:space-x-10 space-y-6 md:space-y-0">
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={1} />
                <div className="md:leading-tight">
                  INITIAL CONSULTATION &<br /> PLANNING
                </div>
              </div>
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={2} />
                <div className="md:leading-tight">
                  DEVISE & EXECUTE <br /> MARKETING PLAN
                </div>
              </div>
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={3} />
                <div className="md:leading-tight">
                  REVIEW OFFERS & REACH <br /> AGREEMENT WITH BUYER
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full h-[1.5px] bg-white relative my-8"></div>

            <div className="flex flex-col md:flex-row text-white md:space-x-10 space-y-6 md:space-y-0">
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={4} />
                <div className="md:leading-tight">
                  COMPLETE TRANSACTION PROCESS
                </div>
              </div>
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={5} />
                <div className="md:leading-tight">AFTER - SALE SERVICE</div>
              </div>
              <div className="md:px-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="buying"
        className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat px-4 md:px-10 relative rounded-3xl mt-10"
        style={{
          backgroundImage: `url(${buying})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
        <div className="relative flex flex-col items-center text-white text-2xl md:text-5xl font-serif my-10 md:pt-0">
          <h2 className="text-center">The Buying Process</h2>
        </div>
        <div className="relative flex flex-col md:flex-row items-center text-center w-full px-4 md:px-10 mt-10 md:mt-18">
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row text-white md:space-x-10 space-y-6 md:space-y-0">
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={1} />
                <div className="md:leading-tight">
                  INITIAL CONSULTATION &<br /> PLANNING
                </div>
              </div>
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={2} />
                <div className="md:leading-tight">
                  SEARCH FOR A HOME & <br></br> GET PRE-APPROVED
                </div>
              </div>
            </div>

            <div className="hidden md:block w-full h-[1.5px] bg-white relative my-8"></div>

            <div className="flex flex-col md:flex-row text-white md:space-x-10 space-y-6 md:space-y-0">
              <div className="md:px-32"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={3} />
                <div className="md:leading-tight">SUBMIT AN OFFER</div>
              </div>
              <div className="md:px-10"></div>
              <div className="flex flex-col items-center text-xl flex-shrink-0 mb-4 md:mb-0">
                <NumberAnimation number={4} />
                <div className="md:leading-tight">
                  COMPLETE SETTLEMENT PROCESS
                </div>
              </div>
              <div className="md:px-10"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-4 md:px-10 flex justify-center items-center">
  <Slider {...settings} className="w-full max-w-6xl mx-auto">
    {/* Slide 1 */}
    <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        <div className="flex flex-col text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2 px-4 md:px-8">
          <div className="text-xl md:text-3xl font-bold">
            Over 33 Years of Real Estate Success
          </div>
          <div className="text-sm md:text-lg leading-relaxed">
            We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. In real estate, almost everything can be negotiated. When you choose Hansen Partners, it is experience is 100% nonnegotiable. And it’s an experience like no other.
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-8 flex justify-center ">
          <img
            src={slide1}
            alt="slide"
            className="w-full md:w-3/4 h-auto shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2 px-4 md:px-8 flex justify-center">
          <img
            src={slide2}
            alt="slide"
            className="w-full md:w-3/4 h-auto shadow-2xl rounded-lg"
          />
        </div>
        <div className="flex flex-col text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2 px-4 md:px-8">
          <div className="text-xl md:text-3xl font-bold">
            We Want To Create An Unforgettable Experience For You...
          </div>
          <div className="text-sm md:text-lg leading-relaxed">
            We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.
          </div>
        </div>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0">
        <div className="flex flex-col text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2 px-4 md:px-8">
          <div className="text-xl md:text-3xl font-bold">
            The Hansen Partners Communications Tablet
          </div>
          <div className="text-sm md:text-lg leading-relaxed">
            We have created this as a wonderful tool so that we can communicate with you daily, provide you with updates on what is happening with your home. We are available with a click of your tablet.
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 flex justify-center">
          <img
            src={slide3}
            alt="slide"
            className="w-full md:w-3/4 h-auto shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Slide 4 */}
    <div className="flex flex-col items-center justify-center mt-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0">
        <div className="flex flex-col text-center md:text-left space-y-4 md:space-y-6 w-full md:w-1/2 px-4 md:px-8">
          <div className="text-xl md:text-3xl font-bold">
            Benefits:
          </div>
          <ul className="text-sm md:text-lg leading-relaxed list-disc list-inside space-y-2">
            <li>Review all documents and sign in the comfort of your home or anywhere.</li>
            <li>Stay up to date on all marketing activities, review materials, photos, etc. in real-time.</li>
            <li>Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.</li>
            <li>You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us for fast communication using our BombBomb video messaging system.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-8 flex justify-center">
          <div className="text-sm md:text-lg leading-relaxed">
            We believe that transparency and guiding you and your family through the process is key to having the best experience. During these uncertain times, it is reassuring to know you have someone with a proven track record you can count on. We will be here to handle your needs during the Real Estate process. We think of it before a need even arises. Because that is just what we do. Who you work with does matter!
          </div>
        </div>
      </div>
    </div>
  </Slider>
</section>

<section className="min-h-screen px-4 md:px-10 py-10 flex justify-center items-center bg-gray-100 mt-8">
  <div className="flex flex-col w-full max-w-7xl space-y-8">
    <div className="text-3xl md:text-4xl font-serif text-gray-800 text-center">
      We Market Your Home to The World
    </div>
    <div className="text-xl md:text-2xl font-semibold text-gray-700 text-center">
      Our Online Marketing Strategy
    </div>
    <div className="text-base md:text-lg leading-relaxed text-gray-600 text-center ">
      The Bay Area remains one of the world's most sought-after regions to live in, and when looking to sell, it is vital that your home be marketed online to audiences locally, nationally, and internationally.
    </div>
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold text-gray-800 mb-2">
          Local Exposure
        </div>
        <div className="text-base text-gray-600 leading-relaxed">
          Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all Bay Area neighborhoods, we make sure your home receives targeted local exposure. When you list your home with Hansen Partners it will automatically appear on Nextdoor in your neighborhood.
        </div>
      </div>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold text-gray-800 mb-2">
          National Exposure
        </div>
        <div className="text-base text-gray-600 leading-relaxed">
          We secure strategic positioning and enhancement on Realtor.com, Trulia, and Zillow, driving more consumers to your home and increasing exposure. We will receive every inquiry about your property directly.
        </div>
      </div>
      <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold text-gray-800 mb-2">
          International Exposure
        </div>
        <div className="text-base text-gray-600 leading-relaxed">
          To expose your luxury listing to millions of potential homebuyers worldwide, we promote on prominent international real estate portals, including Wall Street Journal, LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com, UniqueHomes.com, China.apr.com, Caimeiju, Juwai, and Country Life UK.
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center mt-10">
      <img src={sponsor} alt="sponsor" className="w-1/2 md:w-1/6" />
    </div>
  </div>
</section>

<section className="min-h-screen px-4 md:mx-20 flex justify-center items-center">
  <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 w-full">
    <div className="flex flex-col md:w-1/2 space-y-6">
      <div className="flex flex-row space-x-4 justify-center">
        <img src={luxury} alt="luxury1" className="w-1/4 md:w-[10%]" />
        <img src={luxury2} alt="luxury2" className="w-1/4 md:w-1/6" />
        <img src={luxury3} alt="luxury3" className="w-1/4 md:w-1/5" />
      </div>
      <div className="text-lg font-bold text-center md:text-left">
        Leading Real Estate Companies of The World® & Luxury Portfolio International
      </div>
      <div className="text-justify text-sm md:text-base leading-relaxed">
        JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. With more than 500 member firms around the world, our luxury listings are exposed to a vast global audience and reach potential buyers and investors in over 50 countries.
      </div>
      <div className="text-lg font-bold text-center md:text-left">
        Who's Who in Luxury Real Estate
      </div>
      <div className="text-justify text-sm md:text-base leading-relaxed">
        Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center md:justify-end">
      <img src={luxury4} alt="luxury4" className="w-full md:w-[90%] rounded-lg shadow-lg" />
    </div>
  </div>
</section>

<section className="min-h-screen px-4 py-10 flex justify-center items-center mt-8 bg-gray-100">
  <div className="flex flex-col space-y-8 md:mx-20">
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 w-full">
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src={luxury5} alt="luxury5" className="w-full md:w-[90%] rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col md:w-1/2 space-y-6">
        <div className="text-justify text-sm md:text-base leading-relaxed">
          Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
        </div>
        <div className="flex justify-center space-x-4">
          <img src={luxury} alt="luxury1" className="w-1/4 md:w-1/5" />
          <img src={luxury2} alt="luxury2" className="w-1/4 md:w-1/4" />
          <img src={luxury3} alt="luxury3" className="w-1/4 md:w-1/4" />
        </div>
        <div className="text-justify text-sm md:text-base leading-relaxed">
          We also have several well-positioned affiliate offices in China, providing our clients with access to buyers in Hong Kong, Shanghai, and Beijing.
        </div>
        <div className="text-justify text-sm md:text-base leading-relaxed">
      Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real estate sites, reaching over 70 million potential buyers and investors worldwide through our relationships with:
    </div>
      </div>
    </div>
    
  </div>
</section>

<section className="min-h-screen bg-white md:mx-10 px-4 py-10 flex justify-center items-center mt-8">
  <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-8">

    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <img src={envelope} alt="envelope" className="w-44 h-44 mx-auto"/>
        <div className="mt-4 font-serif text-3xl">Responsive</div>
        <p className="mt-2 text-md">I am always available via phone, text, or email to answer your questions in a timely manner.</p>
      </div>
      <div className="text-center">
        <img src={map} alt="map" className="w-44 h-44 mx-auto"/>
        <div className="mt-4 font-serif text-3xl">Virtual Tour</div>
        <p className="mt-2 text-md">Let’s make your home stand out with a high-quality virtual tour.</p>
      </div>
    </div>

   
    <div className="flex justify-center">
      <img src={phone} alt="phone" className="w-60 h-60 md:w-96 md:h-96"/>
    </div>

  
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <img src={flag} alt="flag" className="w-44 h-44 mx-auto"/>
        <div className="mt-4 font-serif text-3xl">Syndication</div>
        <p className="mt-2 text-md ">I market your property locally, nationally, and internationally.</p>
      </div>
      <div className="text-center">
        <img src={drone} alt="drone" className="w-44 h-44 mx-auto"/>
        <div className="mt-4 font-serif text-3xl">Drone Photography</div>
        <p className="mt-2 text-md">Beautiful photography is a central part of our marketing plan for your property.</p>
      </div>
    </div>
  </div>
</section>
<section
  className="w-full min-h-screen flex items-center justify-center h-full bg-no-repeat bg-cover bg-center relative"
  style={{ backgroundImage: `url(${work})` }}
>
  <div className="absolute inset-0 bg-black opacity-60"></div>
  <div className="relative flex flex-col justify-center items-center text-center space-y-6 px-4">
    <h1 className="text-white text-3xl md:text-5xl font-semibold font-serif">Work With Us</h1>
    <div className="hidden md:block w-20 h-[2px] bg-white my-4"></div>
    <div className="text-white text-lg md:text-xl max-w-2xl">
      With decades of experience in luxurious Tri Valley real estate, our team is here to ensure that your dreams become a reality. Let us guide you through your home-buying journey. Contact us today!
    </div>
    <button className="w-48 h-12 bg-black text-white px-6 text-sm md:text-md font-bold  rounded-full hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-700 transition duration-300">
      CONTACT US
    </button>
  </div>
</section>
<section id="footer" className="min-h-screen bg-white px-4 py-10 md:mx-10 mt-8 flex justify-center items-center">
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
 
    <div>
      <h3 className="text-xl font-bold mb-4">Julie Hansen Partnership</h3>
      <p className="text-justify text-gray-700">
        An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
      </p>
    </div>

   
    <div>
      <h3 className="text-xl font-bold mb-4">ADDRESS</h3>
      <p className="text-gray-700">
        4733 Chabot Drive #100<br />
        Pleasanton, CA 94588
      </p>
      <p className="mt-4 text-gray-700">
        Julie Hansen-Orvis | CA DRE# 00934447
      </p>
      <h3 className="text-xl font-bold mt-6 mb-4">CONTACT INFORMATION</h3>
      <p className="text-gray-700">
        (925) 553-6707<br />
        luxuryhomesinwc@icloud.com
      </p>
      <div class="flex space-x-4 mt-4">
  
  <button>
    <img src={fb} alt="Facebook" class="w-12 h-12 mx-auto"/>
  </button>

 
  <button>
    <img src={linkedin} alt="LinkedIn" class="w-10 h-10 mx-auto "/>
  </button>
</div>

    </div>
    

    <div>
      <h3 className="text-xl font-bold mb-4">Newsletter</h3>
      <p className="text-gray-700 mb-4">
        Subscribe to our Newsletter for the latest news and updates. Stay tuned!
      </p>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="simple-checkbox"
          className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
        />
        <label for="simple-checkbox" className="ml-2 text-gray-700">
          Accept terms and conditions
        </label>
      </div>
      <p className="text-xs text-gray-600 mb-4">
        By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices.
      </p>
      <div>
        <button className="w-full py-2 bg-black text-white font-bold rounded hover:bg-gray-700 transition">
          SUBSCRIBE
        </button>
      </div>
      <div className="flex flex-row mt-4 justify-center items-center ">
      <img src={footer1} alt="footer1" className="w-12 h-12 mx-auto"/>
      <img src={footer2} alt="footer2" className="w-12 h-12 mx-auto "/>
      <img src={footer3} alt="footer3" className="w-12 h-4  mx-auto"/>
        
      </div>
    </div>
  </div>
</section>

<footer className="bg-gray-200 text-center ">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:mx-32 md:space-y-0 md:space-x-4">
    <div>
      Website Designed & Developed by <span className="underline">Luxury Presence</span>
    </div>
    <div >
      Copyright 2024 | Privacy Policy
    </div>
  </div>
</footer>






    </div>
  );
};

export default Services;
