// Import assets and components
import arrow from "../assets/About/Component 1.svg";
import shvets from "../assets/About/pexels-shvets-production-7562014 1.png";
import Vector7 from "../assets/About/Vector 7.svg";
import Vector8 from "../assets/About/Vector 8.svg";
import Btn from "./Btn";

// Import React hooks and GSAP for animations
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
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

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="mt-14 lg:mt-32 px-7 lg:px-10 xl:px-20">
      <div className="w-full flex items-center lg:items-start justify-between gap-5">
        <div className="lg:w-2/4 w-full lg:mt-3">
          <h1 className="text font-Montserrat font-bold text-xl text-gray-300 lg:text-start text-center">
            INTRODUCTION
          </h1>
          <div className="relative">
            <h1 className="text font-Montserrat font-light text-xl text-gray-400 lg:text-start text-center">
              TO HYDRA VR
            </h1>
            <div>
              <img src={arrow} className="arrow hidden lg:block w-48 xl:w-full h-24 absolute xl:-left-1 -bottom-9" alt="Arrow" />
            </div>
          </div>
        </div>
        <div className="w-2/4 hidden lg:block">
          <p className="description font-Montserrat font-normal text-[13px] text-gray-400">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className="relative w-full mt-9 lg:mt-20 flex justify-between flex-col items-center lg:flex-row">
        <div className="lg:hidden w-[330px] h-[350px] radius-sm overflow-hidden md:-ml-7 relative z-10">
          <img src={shvets} className="img h-full w-full object-cover" alt="About Image" />
        </div>
        <div className="hidden lg:block w-[400px] h-[410px] xl:w-[450px] xl:h-[460px] radius-lg xl:radius overflow-hidden md:-ml-7 relative z-10">
          <img src={shvets} className="img h-full w-full object-cover" alt="About Image" />
        </div>

        <div className="mt-6 md:text-center lg:text-start md:mt-9 lg:mb-20 xl:mb-28 lg:w-2/4">
          <h1 className="text hidden md:block font-Montserrat font-bold text-2xl text-gray-100 md:mr-7">ABOUT</h1>
          <h1 className="text hidden md:block font-Montserrat font-normal text-2xl text-gray-300 md:mr-7">HYDRA VR</h1>
          <p className="description w-fit xl:w-[542px] text-gray-400 font-Montserrat font-normal text-xs mt-7 mb-7 relative z-10">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
          </p>
          <div className="btn flex justify-center lg:justify-start">
            <Btn text="LET’S GET IN TOUCH" />
          </div>
        </div>

        <img src={Vector7} alt="Vector 7" className="hidden md:block absolute top-4 -left-12" />
        <img src={Vector8} alt="Vector 8" className="hidden md:block absolute top-60" />
      </div>
    </section>
  );
};

export default About;
