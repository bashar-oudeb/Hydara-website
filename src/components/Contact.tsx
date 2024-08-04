import contact from '../assets/contact/Vector 16.svg'
import Btn from './Btn';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.text', 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.text', start: 'top 80%' } }
      );
      gsap.fromTo('.line', 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.arrow', start: 'top 80%' } }
      );
      gsap.fromTo('.text2', 
        { x: -100, opacity: 0.3 }, 
        { x: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.description', start: 'top 80%' } }
      );
      gsap.fromTo('.btn', 
        { y: 100, opacity: 0.3 }, 
        { y: 0, opacity: 1, duration: 2, scrollTrigger: { trigger: '.description', start: 'top 80%' } }
      );
      
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" z-50 relative lg:mt-32 mt-20 lg:px-20 w-sm xl:w-[1100px] lg:h-[808px] m-auto rounded-[40px] lg:rounded-[60px] flex flex-col justify-center items-center bg-radius">
    <div className=" mt-8 lg:mt-12">
      <h1 className='text font-Montserrat font-bold text-3xl text-gray-200 text-center mt-12'>JOIN HYDRA</h1>
      <img src={contact} alt="" className='mt-5 text-center line' />
      <h1 className=' text font-Montserrat font-light text-3xl text-gray-300 text-center mt-5'>Let’s Build Your VR Experience</h1>
    </div>
    <form action="" className='mt-10'>
      <div className="flex flex-wrap flex-col lg:flex-row items-center gap-5">
        <input type="text" placeholder="First Name" className="text2 pr-40 pl-6 lg:px-20 placeholder:mr-10 max-w-full lg:w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat" />
        <input type="text" placeholder="Last Name" className="text pr-40 pl-6 lg:px-20 lg:w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat" />
        <input type="text" placeholder="Email" className="text2 pr-40 pl-6 lg:px-20 lg:w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat" />
        <input type="text" placeholder="Phone Number" className="text pr-40 pl-6 lg:px-20 lg:w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat" />
      </div>
      <div className="mt-6 w-full flex items-center justify-center">
        <input type="text" placeholder="Subject" className='line pr-40 pl-6 lg:px-20 lg:w-[920px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat' />
      </div>
      <div className="mt-6 flex justify-center">
        <textarea placeholder="Tell Us Something..." className='btn pr-40 pl-6 py-4 lg:px-24 lg:w-[920px] h-52 rounded-[40px] border border-teal-50 bg-transparent text-white text-sm font-Montserrat'></textarea>
      </div>
      <div className="btn flex justify-center mt-8 mb-9">
        <Btn text="SEND TO HYDRA" />
      </div>
    </form>
  </section>
  
  );
};

export default Contact;
