import { useState } from "react";
import arrow from "../assets/About/Component 1.svg";
import arrow2 from '../assets/Hero/arrow.svg'
import victor from '../assets/Process/Vector 15.svg'
import shape from "../assets/shape.svg";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Process = () => {


  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.text', 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.text', start: 'top 80%' } }
      );
      gsap.fromTo('.arrow', 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.arrow', start: 'top 80%' } }
      );
      gsap.fromTo('.description', 
        { x: 100, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.description', start: 'top 80%' } }
      );
      gsap.fromTo('.img', 
        { x: -100, opacity: 0.5 }, 
        { x: 0, opacity: 1, duration: 2.5, scrollTrigger: { trigger: '.img', start: 'top 80%' } }
      );
      gsap.fromTo('.btn', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.btn', start: 'top 80%' } }
      );
    }, container);

    return () => ctx.revert();
  }, []);
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const slides = [
    {
      title: "01",
      description: "3D Conception",
      desBr: "& Design",
    },
    {
      title: "02",
      description: "Interaction",
      desBr: "& Design",
    },
    
    {
      title: "03",
      description: "VR World",
      desBr: "User Testing",
    },
    {
      title: "04",
      description: "Hydra VR",
      desBr: "Deploy",
    },
  ];
  return (
    <section ref={container} className=" mt-14 ">
      
      <div className=" lg:px-10 px-20 w-full flex items-center lg:items-start justify-between gap-5">
        <div className=" w-full lg:w-2/4 lg:mt-2">
          <h1 className="text font-Montserrat font-bold text-2xl lg:text-xl text-gray-300  text-center lg:text-start">
          HOW WE BUILD
          </h1>
          <div className="text  relative mt-2">
            <h1 className=" font-Montserrat font-light text-2xl lg:text-xl text-gray-400 text-center lg:text-start">
            WITH HYDRA VR?
            </h1>
            <div className=" hidden lg:block">
              <img src={arrow} className=" arrow xl:w-full  w-40 left-48 xl:h-20 absolute xl:left-3 -bottom-5 xl:-bottom-7 " alt="" />
            </div>
          </div>
        </div>
        <div className="w-2/4 hidden lg:block">
          <p className="description font-Montserrat font-normal text-[13px] text-gray-400">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className=" hidden px-10 mt-36 lg:flex flex-wrap items-center justify-around relative">

        <div className="img flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">01</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className="img flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">02</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className="img flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">03</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className="img flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">04</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>
        <div className="btn hidden lg:block absolute  top-1 z-0 ">
           <img src={victor} alt=""  className=" "/>
        </div>
      </div>


      <div className="btn  lg:hidden px-10 mt-20 flex  items-center justify-around ">

        <div className=" flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">{slides[slideIndex].title}</h1>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h2 className=" font-Montserrat font-bold text-2xl text-gray-200 mt-2">{slides[slideIndex].description} </h2>
            <h2 className=" font-Montserrat font-bold text-2xl text-gray-200 mt-1">{slides[slideIndex].desBr}</h2>
            <button
          onClick={nextSlide}
          className="absolute w-14 mr-3 h-14 rounded-full bg-[#0E0E0E52]  -rotate-90  right-0 lg:hidden  grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
        <button
          onClick={prevSlide}
          className="absolute w-14 left-0 ml-3  h-14 rounded-full bg-[#0E0E0E52] rotate-90 lg:hidden grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
          </div>
        </div>    

      </div>


    </section>
  )
}

export default Process