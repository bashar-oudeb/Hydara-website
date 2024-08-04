import { useState } from "react";
import Logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const container = useRef();

  useGSAP(
    () => {
        // gsap code 
        gsap.fromTo('.logo', { x: -100 , opacity: 0.5 , }, { x: 0 ,opacity: 1 ,duration:1});
        gsap.fromTo('.logoText ', { y: -100 , opacity: 0.5 , }, { y: 0, x:0 ,opacity: 1 ,duration:1});
        gsap.fromTo('.link ', { x: 100 , opacity: 0 , }, { x: 0 ,opacity: 1 ,duration:2});
        gsap.fromTo('.btn ', { x: 100 , opacity: 0 , }, { x: 0 ,opacity: 1 ,duration:2.2});
    },
    { scope: container }
);
  

  return (
    <section ref={container} className=" flex items-center  justify-between md:justify-around relative mx-4 mb-5 ">
      <div className=" flex items-center gap-3">
        <img
          src={Logo}
          alt="logo"
          className="logo relative z-30 w-14 h-14   lg:h-24 lg:w-24"
        />
        <h1 className="logoText gradient-text hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark font-Edu text-xl">
          HYDRA
        </h1>
      </div>
      <div className=" hidden md:block">
        <ul className="link flex justify-center items-center gap-3 ">
          <li>
            <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
              ABOUT
            </a>{" "}
          </li>
          <li>
            <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
              SERVICES
            </a>{" "}
          </li>
          <li>
            <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
              TECHNOLOGIES
            </a>{" "}
          </li>
          <li>
            <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
              HOW TO
            </a>{" "}
          </li>
        </ul>
      </div>
      <div className="btn hidden  md:flex items-center gap-6 ">
        <button className=" md:hidden lg:block text-xs font-semibold font-Montserrat border rounded-[35px] px-3 py-2 text-white  z-20 hover:bg-slate-800 transition-all cursor-pointer">
          CONTACT US
        </button>
        <button className=" text-xs font-semibold font-Montserrat border rounded-[35px]  px-3 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark  border-[#8176AF] relative  z-40 transition-all cursor-pointer  ">
          JOIN HYDRA
        </button>
      </div>
      <button
        className=" md:hidden z-50  outline-none border-none text-[2.4rem]"
        onClick={()=> setOpen(!open)}
      >
        {!open ? (<CgMenuRightAlt className=" text-customPurpleLight" />) : (< IoClose className=" z-50 text-customPurpleLight mr-4 mt-9"/>) }
        
      </button>
      

      {open && (
        <div className=" absolute w-full flex flex-col gap-6  top-1 z-40 bg-radius py-28  transition-all">
          <ul className=" flex flex-col justify-center items-center gap-6 ">
            <li>
              <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
                ABOUT
              </a>{" "}
            </li>
            <li>
              <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
                SERVICES
              </a>{" "}
            </li>
            <li>
              <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
                TECHNOLOGIES
              </a>{" "}
            </li>
            <li>
              <a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">
                HOW TO
              </a>{" "}
            </li>
          </ul>
          <div className=" flex flex-col gap-4  w-fit m-auto">
            <button className=" text-xs font-semibold font-Montserrat border rounded-[35px] px-3 py-2 text-white  z-20 hover:bg-slate-800 transition-all cursor-pointer">
              CONTACT US
            </button>
            <button className=" text-xs font-semibold font-Montserrat border rounded-[35px]  px-3 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark  border-[#8176AF] relative  z-50 transition-all cursor-pointer  ">
              JOIN HYDRA
            </button>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default Navbar;
