import { useEffect, useState, useRef} from "react";
import arrow from "../assets/About/Component 1.svg";
import mali from "../assets/Services/pexels-mali-maeder-756439 1.png";
import Vector from "../assets/Services/Vector 14.svg";
import shape from "../assets/shape.svg";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Services = () => {


  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".text",
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".text",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".arrow",
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".arrow",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );
      gsap.fromTo(
        ".info",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".arrow",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );

      gsap.fromTo(
        ".description",
        { x: 100, opacity: 0.3 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".description",
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
          }
        }
      );

      const divAnimations = [".div1", ".div2", ".div3", ".div4"].map((div, i) => {
        return gsap.fromTo(
          div,
          { x: -250 + i * 50, opacity: 0.5 },
          {
            x: 0,
            opacity: 1,
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
      img: mali,
      title: "SIMULATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      buttonText: "TRY IT NOW",
    },
    {
      img: "https://images.pexels.com/photos/7562249/pexels-photo-7562249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "EDUCATION",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      buttonText: "TRY IT NOW",
    },

    {
      img: "https://images.pexels.com/photos/1261822/pexels-photo-1261822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "SELF-CARE",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      buttonText: "TRY IT NOW",
    },
    {
      img: "https://images.pexels.com/photos/6615031/pexels-photo-6615031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "OUTDOOR",
      description:
        "Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae.",
      buttonText: "TRY IT NOW",
    },
  ];
  return (
    <section ref={container} className=" relative mt-12 px-9 lg:mt-32 lg:px-10 xl:px-20  ">
      <div className=" w-full flex items-center lg:items-start justify-between gap-5">
        <div className=" lg:w-2/4  w-full lg:mt-3">
          <h1 className=" text font-Montserrat font-bold text-xl text-gray-300 lg:text-start  text-center">
          WHY BUILD
          </h1>
          <div className="  relative">
            <h1 className="description font-Montserrat font-light text-xl text-gray-400 lg:text-start text-center">
            WITH HYDRA?
            </h1>
            <div className="">
              <img src={arrow} className=" arrow hidden lg:block w-48 left-40  xl:w-full h-24 absolute xl:-left-1 -bottom-9 " alt="" />
            </div>
          </div>
        </div>
        <div className="w-2/4 hidden lg:block">
          <p className=" font-Montserrat font-normal text-[13px] text-gray-400">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className=" hidden lg:flex mt-9 lg:mt-24  items-center justify-center gap-3 z-20 relative">
        <div className="div1 w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src={mali}
                alt=""
                className=" h-full w-full object-cover rounded-full"
              
              loading="lazy"/>
            </div>
          </div>
          <h1 className=" text-center font-Montserrat font-bold text-base text-gray-200  mt-5">
            SIMULATION
          </h1>
          <hr className=" m-auto w-36 border-primary mt-4" />
          <p className=" font-Montserrat font-normal text-xs text-gray-300 mt-5 text-center px-1">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-40 hover:bg-primary transition-all cursor-pointer ">
            TRY IT NOW
          </button>
        </div>

        <div className="div2 w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src="https://images.pexels.com/photos/7562249/pexels-photo-7562249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" h-full w-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>
          <h1 className=" text-center font-Montserrat font-bold text-base text-gray-200  mt-5">
            EDUCATION
          </h1>
          <hr className=" m-auto w-36 border-primary mt-4" />
          <p className=" font-Montserrat font-normal text-xs text-gray-300 mt-5 text-center px-1">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-20 hover:bg-primary transition-all cursor-pointer ">
            TRY IT NOW
          </button>
        </div>

        <div className="div3 w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src="https://images.pexels.com/photos/1261822/pexels-photo-1261822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
          <h1 className=" text-center font-Montserrat font-bold text-base text-gray-200  mt-5">
            SELF-CARE
          </h1>
          <hr className=" m-auto w-36 border-primary mt-4" />
          <p className=" font-Montserrat font-normal text-xs text-gray-300 mt-5 text-center px-1">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-20 hover:bg-primary transition-all cursor-pointer ">
            TRY IT NOW
          </button>
        </div>

        <div className="div4 w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src="https://images.pexels.com/photos/6615031/pexels-photo-6615031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
          <h1 className=" text-center font-Montserrat font-bold text-base text-gray-200  mt-5">
            OUTDOOR
          </h1>
          <hr className=" m-auto w-36 border-primary mt-4" />
          <p className=" font-Montserrat font-normal text-xs text-gray-300 mt-5 text-center px-1">
            Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
            porttitor rhoncus libero justo laoreet sit amet vitae.
          </p>
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-20 hover:bg-primary transition-all cursor-pointer ">
            TRY IT NOW
          </button>
        </div>
      </div>

      <div className="mt-9 lg:mt-24 flex items-center justify-center gap-3 z-20 relative">
        <div className=" info lg:hidden w-72 h-[450px] rounded-3xl bg-radius">
          <div className="w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto flex items-center justify-center mt-6">
            <div className="w-[155px] h-[155px] rounded-full">
              <img
                src={slides[slideIndex].img}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
          <h1 className="text-center font-Montserrat font-bold text-base text-gray-200 mt-5">
            {slides[slideIndex].title}
          </h1>
          <hr className="m-auto w-36 border-primary mt-4" />
          <p className="description font-Montserrat font-normal text-xs text-gray-300 mt-5 text-center px-1">
            {slides[slideIndex].description}
          </p>
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-50 hover:bg-primary transition-all cursor-pointer">
            {slides[slideIndex].buttonText}
          </button>
        </div>

        <button
          onClick={nextSlide}
          className="absolute w-14  h-14 rounded-full bg-[#0E0E0E52]  -rotate-90  right-0 lg:hidden  grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
        <button
          onClick={prevSlide}
          className="absolute w-14 left-0  h-14 rounded-full bg-[#0E0E0E52] rotate-90 lg:hidden grid place-items-center"
        >
          <div className=" w-10 h-10 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt="" className="  w-4" />
          </div>
        </button>
      </div>

      <img src={Vector} alt="" className=" absolute -bottom-80 -left-1 z-10" />
    </section>
  );
};

export default Services;
