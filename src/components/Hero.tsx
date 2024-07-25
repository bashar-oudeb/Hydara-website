import Navbar from "./Navbar";
import arrow from "../assets/Hero/arrow.svg";
import michelangelo from "../assets/Hero/pexels-michelangelo-buonarroti-8728382 1.png";
import Vector4 from "../assets/Hero/Vector 4.svg";
import Vector1 from "../assets/Hero/Vector 1.svg";
import Vector2 from "../assets/Hero/Vector 2.svg";
import Vector3 from "../assets/Hero/Vector 3.svg";
import Vector5 from "../assets/Hero/Vector 5.svg";
import Location from "../assets/Hero/location.svg";
import phone from "../assets/Hero/phone-call.svg";
import mail from "../assets/Hero/mail.svg";
import Btn from "./Btn";

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <Navbar />

      <div className="flex gap-8 items-center justify-around flex-wrap-reverse  ">
        <div className=" md:mt-7 relative">
          <h1 className=" font-Montserrat font-bold text-2xl  md:text-4xl text-white mt-4 relative z-50">
            <span className="gradient-text text-4xl mr-1">Dive</span> Into The
            Depths <br />
            Of <span className="gradient-text text-4xl">Virtual Reality</span>
          </h1>
          <p className="hidden md:block w-[450px] font-Montserrat font-normal text-base text-gray-400 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <div className=" flex justify-center items-center gap-4 mt-4  ">
            <Btn text="BUILD YOUR WORLD" />
            <img
              src={arrow}
              alt="arrow"
              className=" hidden md:block w-10 h-16"
            />
          </div>

          <img
            src={Vector4}
            className=" hidden md:block absolute -left-24 -top-3 h-[551px] w-[230px]]"
            alt=""
          />
        </div>

        <div className=" mt-12  relative z-10">
          <div className=" w-[338px] h-[287px] md:w-[450px] md:h-[396px] border-radius overflow-hidden  ">
            <img
              src={michelangelo}
              className="h-full w-full object-cover "
              alt="Virtual Reality"
            />
          </div>
          <img
            src={Vector1}
            alt=""
            className=" absolute w-[347px] h-[560px] md:h-[609px] md:w-[400px]  left-[102px] -bottom-40 md:-right-20 -z-10"
          />
          <img
            src={Vector2}
            alt=""
            className=" absolute w-[316px] h-[709px] md:h-[805px] md:w-[307px] -left-1 -top-32  md:-bottom-52 md:right-1 -z-20"
          />
          <img
            src={Vector3}
            alt=""
            className=" absolute w-[617px] h-[352px]  md:h-[419px] md:w-[814px] top-24 right-20 -z-20"
          />
          <img
            src={Vector3}
            alt=""
            className=" absolute  md:h-[419px] md:w-[314px] top-12  -right-20 -z-20"
          />
        </div>
      </div>

      <div className=" flex items-center justify-around relative w-[337px] h-28 rounded-full rectangle mt-20 md:mt-24 md:w-[1100px] m-auto z-10 overflow-hidden">
        <div className=" flex items-center gap-3">
          <img src={Location} alt="" className=" w-9 h-14" />
          <div className="">
            <h2 className=" font-Montserrat font-bold text-base text-gray-300">
              Pay Us a Visit
            </h2>
            <p className=" font-Montserrat font-normal text-xs text-gray-400 w-fit">
              Union St, Seattle, WA 98101, United States
            </p>
          </div>
        </div>

        <div className=" flex items-center gap-3 mr-12">
          <img src={phone} alt="" className=" w-11 h-14" />
          <div className="">
            <h2 className=" font-Montserrat font-bold text-base text-gray-300">
              Give Us a Call
            </h2>
            <p className="font-Montserrat font-normal text-xs text-gray-400">
              (110) 1111-1010
            </p>
          </div>
        </div>

        <div className=" flex items-center gap-3">
          <img src={mail} alt="" className=" w-11 h-14" />
          <div className="">
            <h2 className=" font-Montserrat font-bold text-base text-gray-300">
              Send Us a Message
            </h2>
            <p className="font-Montserrat font-normal text-xs text-gray-400">
              Contact@HydraVTech.com
            </p>
          </div>
        </div>
        <img src={Vector5} alt="" className=" hidden md:block absolute h-20 left-[420px]" />
        <img src={Vector5} alt="" className=" hidden md:block absolute h-20  right-[365px]" />
      </div>
    </section>
  );
};

export default Hero;
