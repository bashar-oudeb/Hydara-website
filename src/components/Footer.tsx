import Btn from "./Btn";
import Logo from "../assets/logo.svg";
import footer from "../assets/Footer/Vector 22.svg";
import footerV1 from "../assets/Footer/Vector 18.svg";
import footerV2 from "../assets/Footer/Vector 19.svg";

import {
  FaPinterest,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.logo', 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.text', start: 'top 80%' } }
      );
      gsap.fromTo('.line', 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.arrow', start: 'top 80%' } }
      );
     
      gsap.fromTo('.link', 
        { x: 100, opacity: 0.5 }, 
        { x: 0, opacity: 1, duration: 2.5, scrollTrigger: { trigger: '.img', start: 'top 80%' } }
      );
      gsap.fromTo('.btn', 
        { y: 100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, scrollTrigger: { trigger: '.btn', start: 'top 80%' } }
      );
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" mt-32 px-12 lg:px-10 xl:px-20 relative">
      <div className=" flex justify-center md:justify-around lg:justify-between gap-5 flex-wrap lg:flex-nowrap  relative">
        <div className=" flex items-center justify-center gap-20">
          <img src={Logo} alt="" className="logo w-36 h-36 z-50" />
          <img src={footer} alt="" className="line h-36 hidden lg:block" />
        </div>
        <div className="  items-center gap-20 hidden lg:flex">
          <ul className="link flex flex-col gap-4">
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              ABOUT
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              SERVICES
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              TECHNOLOGIES
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              HOW TO
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              JOIN HYDRA
            </li>
          </ul>
          <img src={footer} alt="" className="line h-36 hidden lg:block" />
        </div>
        <div className="  gap-20 hidden lg:flex">
          <ul className="link flex flex-col gap-4">
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              F.A.Q
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              SITEMAP
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              CONDITIONS
            </li>
            <li className=" font-Montserrat font-bold text-sm text-gray-200">
              LICENSES
            </li>
          </ul>
          <img src={footer} alt="" className="line h-36 hidden lg:block" />
        </div>
        <div className="link flex flex-col items-center mt-10 lg:mt-0 gap-7">
          <h1 className="font-Montserrat font-bold text-sm text-gray-200">
            SOCIALIZE WITH HYDRA
          </h1>
          <div className=" flex items-center justify-center gap-2">
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaFacebook />{" "}
              </a>
            </div>
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaLinkedin />
              </a>
            </div>
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaYoutube />
              </a>
            </div>
            <div className=" w-7 h-7 rounded-full bg-customPurpleLight flex items-center justify-center">
              <a href="">
                <FaPinterest />
              </a>
            </div>
          </div>
          <Btn text="BUILD YOUR WORLD" />
        </div>

        <img src={footerV1} alt="" className="logo absolute   lg:bottom-3"/>
        <img src={footerV2} alt="" className="btn absolute      lg:bottom-36"/>
      </div>

      <hr className="line  mt-6 lg:mt-16 border-hr" />
      <div className="btn mt-8">
        <h3 className=" text-center font-Montserrat font-bold text-xs text-gray-300">
          2023 © HYDRA LANDING PAGE - BY Bashar Oudeb - ALL RIGHTS RESERVED{" "}
        </h3>
      </div>
    </section>
  );
};

export default Footer;
