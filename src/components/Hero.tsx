import { useState, useRef } from "react"; // Import React hooks
import gsap from 'gsap'; // Import GSAP for animations
import { useGSAP } from '@gsap/react'; // Import GSAP React plugin
import Navbar from "./Navbar"; // Import Navbar component
import Btn from "./Btn"; // Import Btn component

// Import assets
import arrow from "../assets/Hero/arrow.svg";
import Vector4 from "../assets/Hero/Vector 4.svg";
import Vector1 from "../assets/Hero/Vector 1.svg";
import Vector2 from "../assets/Hero/Vector 2.svg";
import Vector3 from "../assets/Hero/Vector 3.svg";
import Vector5 from "../assets/Hero/Vector 5.svg";
import Location from "../assets/Hero/location.svg";
import phone from "../assets/Hero/phone-call.svg";
import mail from "../assets/Hero/mail.svg";
import arrowScroll from "../assets/Hero/shape.svg";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

// Define slides data for contact information
const slides = [
  {
    img: Location,
    title: "Pay Us a Visit",
    text: "Union St, Seattle, WA 98101, United States",
  },
  {
    img: phone,
    title: "Give Us a Call",
    text: "(110) 1111-1010",
  },
  {
    img: mail,
    title: "Send Us a Message",
    text: "Contact@HydraVTech.com",
  },
];

const Hero = () => {
  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element
  const [slideIndex, setSlideIndex] = useState(0); // State to manage the current slide index

  // GSAP animations
  useGSAP(() => {
    gsap.fromTo('.text', { x: -100, opacity: 0.5 }, { x: 0, opacity: 1, duration: 1.5 });
    gsap.fromTo('.description', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });
    gsap.fromTo('.btn', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
    gsap.fromTo('.img', { x: 100, opacity: 0.5 }, { x: 0, opacity: 1, duration: 1.5 });
    gsap.fromTo('.info', { y: 100, opacity: 0.5 }, { y: 0, opacity: 1, duration: 1.5 });
  }, { scope: container });

  // Function to go to the next slide
  const nextSlide = () => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

  // Function to go to the previous slide
  const prevSlide = () => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  return (
    <section ref={container} className="w-full relative overflow-hidden">
      <Navbar /> {/* Navbar component */}

      <div className="flex gap-8 items-center justify-around flex-wrap-reverse">
        <div className="xl:mt-7 lg:mt-4 relative">
          <h1 className="text font-Montserrat font-bold text-2xl xl:text-3xl text-white mt-4 relative z-30">
            <span className="gradient-text text-4xl mr-1">Dive</span> Into The Depths <br />
            Of <span className="gradient-text text-4xl">Virtual Reality</span>
          </h1>
          <p className="description hidden lg:block w-[450px] font-Montserrat font-normal text-base text-gray-400 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae.
          </p>
          <div className="btn relative flex justify-center lg:justify-start items-center z-40 gap-4 mt-4">
            <Btn text="BUILD YOUR WORLD" /> {/* Button component */}
            <img src={arrow} alt="arrow" className="hidden md:block w-10 h-16" /> {/* Decorative arrow image */}
          </div>

          <img src={Vector4} className="hidden lg:block absolute -left-24 -top-3 h-[551px] w-[230px]" alt="" /> {/* Decorative vector image */}
        </div>

        <div className="mt-12 lg:mt-6 relative z-10">
          <div className="w-[338px] h-[287px] lg:w-[400px] lg:h-[346px] xl:w-[450px] xl:h-[396px] border-radius overflow-hidden">
            <img src="https://images.pexels.com/photos/5309570/pexels-photo-5309570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img h-full w-full object-cover" alt="Virtual Reality" /> {/* Hero image */}
          </div>
          {/* Decorative vector images */}
          <img src={Vector1} alt="" className="absolute xl:hidden w-[347px] h-[560px] left-[102px] -bottom-40 -z-10" />
          <img src={Vector1} alt="" className="absolute hidden xl:block h-[609px] w-[400px] -bottom-40 -right-20 -z-10" />
          <img src={Vector2} alt="" className="absolute xl:hidden w-[316px] h-[709px] -bottom-[16rem] left-4 -rotate-6 -z-20" />
          <img src={Vector2} alt="" className="absolute hidden xl:block h-[805px] w-[307px] -bottom-[11rem] right-12 -z-20" />
          <img src={Vector3} alt="" className="absolute xl:hidden w-[617px] h-[352px] top-24 right-20 -z-20" />
          <img src={Vector3} alt="" className="absolute hidden xl:block xl:h-[419px] xl:w-[814px] top-24 right-20 -z-20" />
        </div>
      </div>

      <div className="info relative flex lg:justify-around xl:justify-evenly items-center gap-4 md:justify-center md:w-2/3 lg:w-11/12 h-24 lg:h-28 mx-4 rectangle rounded-full mt-20 md:mt-12 lg:mt-24 md:m-auto z-10">
        <div className="info lg:hidden inline-block m-auto px-9">
          {/* Slide for small screens */}
          <div className="flex items-center md:justify-center gap-3 lg:w-full ml-6">
            <img src={slides[slideIndex].img} alt="" className="w-9 h-14" />
            <div>
              <h2 className="font-Montserrat font-bold text-base text-gray-300">{slides[slideIndex].title}</h2>
              <p className="font-Montserrat font-normal text-sm text-gray-400 w-fit">{slides[slideIndex].text}</p>
            </div>
          </div>
        </div>

        {/* Arrows for sliding (only visible on smaller screens) */}
        <div className="lg:hidden">
          <img src={arrowScroll} alt="" className="absolute right-1 top-9 cursor-pointer" onClick={nextSlide} />
          <img src={arrowScroll} alt="" className="absolute left-1 rotate-180 top-9 cursor-pointer" onClick={prevSlide} />
        </div>

        {/* Vector Images */}
        <img src={Vector5} alt="" className="hidden xl:block absolute h-20 left-[435px] mt-3" />
        <img src={Vector5} alt="" className="hidden xl:block absolute h-20 right-[400px] mt-3" />

        {/* Contact Information for larger screens */}
        <div className="hidden lg:flex m-auto px-9 lg:pl-3 w-2/6">
          <div className="flex items-center md:justify-center gap-3 lg:w-full ml-6">
            <img src={Location} alt="" className="w-9 h-14" />
            <div>
              <h2 className="font-Montserrat font-bold text-lg text-gray-300">Pay Us a Visit</h2>
              <p className="font-Montserrat font-normal text-sm text-gray-400 w-fit">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex m-auto px-9 lg:pl-3 w-2/6 mr-7 lg:mr-0">
          <div className="flex items-center md:justify-center gap-3 lg:w-full ml-6">
            <img src={phone} alt="" className="w-12 h-14" />
            <div>
              <h2 className="font-Montserrat font-bold text-lg text-gray-300">Give Us a Call</h2>
              <p className="font-Montserrat font-normal text-sm text-gray-400 w-fit">(110) 1111-1010</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex m-auto px-9 lg:pl-3 w-2/6 mr-5 lg:mr-0">
          <div className="flex items-center md:justify-center gap-3 lg:w-full ml-6">
            <img src={mail} alt="" className="w-12 h-14" />
            <div>
              <h2 className="font-Montserrat font-bold text-lg text-gray-300">Send Us a Message</h2>
              <p className="font-Montserrat font-normal text-sm text-gray-400 w-fit">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
