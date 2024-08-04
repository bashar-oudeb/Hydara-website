import { useState, useRef, useEffect } from "react";
import shape from "../assets/shape.svg";
import Tech1 from "../assets/Tech/Hydra-Tech1 .png";
import Tech2 from "../assets/Tech/Hydra-Tech2.png";
import Tech3 from "../assets/Tech/Hydra-Tech3.png";
import Tech4 from "../assets/Tech/Hydra-Tech4.png";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Tech = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.div', 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.text', start: 'top 80%' } }
      );
      gsap.fromTo('.arrow', 
        { x: -200, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.arrow', start: 'top 80%' } }
      );
      gsap.fromTo('.text', 
        { x: -200, opacity: 0.3 }, 
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

      const divAnimations = [".div1", ".div2", ".div3", ".div4"].map((div, i) => {
        return gsap.fromTo(
          div,
          { x: -250 + i * 50,  },
          {
            x: 0,
            
            duration: 1.5 + i * 0.2,
            scrollTrigger: {
              trigger: div,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none none"
            }
          }
        );
      });
      return () => {
        divAnimations.forEach(animation => animation.kill());
      };
    }, container);

    return () => ctx.revert();
  }, []);

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const slides = [
    {
      img: Tech1,
    },
    {
      img: Tech2,
    },

    {
      img: Tech3,
    },
    {
      img: Tech4,
    },
  ];
  return (
    <section ref={container} className="  mt-20 relative ">
      <div className=" div flex flex-col gap-1 xl:gap-3 items-center justify-center relative lg:h-56 xl:h-72 bg-[#a39ebcc2] rounded-full w-[95%] h-40  xl:w-[1100px] m-auto z-10 ">
        <div className="img brightness-50 w-full h-full   absolute bg-img rounded-full"></div>

        <h1 className=" text text-sm   text-white  font-Montserrat font-bold lg:text-3xl z-20">
          TECHNOLOGIES & HARDWARE
        </h1>
        <h2 className=" text font-Montserrat font-light text-xl lg:text-3xl text-gray-300 text-center z-20">
          USED BY HYDRA VR.
        </h2>

        <div className="arrow hidden md:block absolute w-14  h-14 rounded-full bg-[#0E0E0E52] z-20 -bottom-7 lg:flex justify-center items-center">
          <div className=" w-12 h-12 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="   w-6" />
          </div>
        </div>
      </div>

      <div className=" hidden lg:flex mt-4  justify-around items-center flex-wrap">
        <img
          src={Tech1}
          alt=""
          className="div1 w-32 h-32 opacity-50 hover:opacity-60 transition-all cursor-pointer"
        />
        <img
          src={Tech2}
          alt=""
          className="div2 w-60 h-60 opacity-50 hover:opacity-60 transition-all cursor-pointer"
        />
        <img
          src={Tech3}
          alt=""
          className="div3 w-56 h-56 opacity-50 hover:opacity-60 transition-all cursor-pointer"
        />
        <img
          src={Tech4}
          alt=""
          className="div4 w-[255px] h-[255px] opacity-50 hover:opacity-60 transition-all cursor-pointer"
        />
      </div>

      <div className="lg:hidden btn  relative flex mt-12  justify-around items-center">
        <img
          src={slides[slideIndex].img}
          alt=""
          className=" w-52 h-52 opacity-50 hover:opacity-60 transition-all cursor-pointer"
        />

        <button
          onClick={nextSlide}
          className="absolute text w-14 mr-3 h-14 rounded-full bg-[#0E0E0E52]  -rotate-90  right-0 lg:hidden  grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
        <button
          onClick={prevSlide}
          className="div absolute w-14 left-0 ml-3  h-14 rounded-full bg-[#0E0E0E52] rotate-90 lg:hidden grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Tech;
