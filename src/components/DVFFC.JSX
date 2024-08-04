import { useState } from "react";
import Logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  

console.log(open)
  return (
    <section className=" flex items-center  justify-between md:justify-around relative mb-5 mx-4">
      <div className=" flex items-center gap-3">
        <img
          src={Logo}
          alt="logo"
          className=" relative z-50 w-14 h-14  md:h-24 md:w-24"
        />
        <h1 className=" gradient-text hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark font-Edu text-xl">
          HYDRA
        </h1>
      </div>
      <div className=" hidden md:block">
        <ul className=" flex justify-center items-center gap-3 ">
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
      <div className=" hidden md:flex items-center gap-6 ">
        <button className=" text-xs font-semibold font-Montserrat border rounded-[35px] px-3 py-2 text-white  z-20 hover:bg-slate-800 transition-all cursor-pointer">
          CONTACT US
        </button>
        <button className=" text-xs font-semibold font-Montserrat border rounded-[35px]  px-3 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark  border-[#8176AF] relative  z-50 transition-all cursor-pointer  ">
          JOIN HYDRA
        </button>
      </div>
      <button
        className=" md:hidden  outline-none border-none text-[2.4rem]"
        onClick={()=> setOpen(!open)}
      >
        {!open ? (<CgMenuRightAlt className=" text-customPurpleLight" />) : (< IoClose className=" text-customPurpleLight"/>) }
        
      </button>
      
      
    </section>
  );
};

export default Navbar;
