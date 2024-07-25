import Btn from "./Btn";
import Logo from "../assets/logo.svg";
import footer from "../assets/Footer/Vector 22.svg";

import {
  FaPinterest,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className=" mt-32 px-20">
      <div className=" flex  justify-between  flex-wrap">
        <div className=" flex items-center gap-20">
          <img src={Logo} alt=""  className=" w-36 h-36"/>
          <img src={footer} alt="" className=" h-36" />
        </div>
        <div className=" flex items-center gap-20">
          <ul className=" flex flex-col gap-4">
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
          <img src={footer} alt="" className=" h-36" />
        </div>
        <div className=" flex gap-20">
          <ul className=" flex flex-col gap-4">
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
          <img src={footer} alt="" className=" h-36" />
        </div>
        <div className=" flex flex-col gap-7">
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
      </div>

       <hr className=" mt-16 border-hr"/>
      <div className=" mt-8">
        <h3 className=" text-center font-Montserrat font-bold text-xs text-gray-300">2023 © HYDRA LANDING PAGE - BY Bashar Oudeb - ALL RIGHTS RESERVED </h3>
      </div>
    </section>
  );
};

export default Footer;
