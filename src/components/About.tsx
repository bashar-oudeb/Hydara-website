import arrow from "../assets/About/Component 1.svg";
import shvets from "../assets/About/pexels-shvets-production-7562014 1.png";
import Vector7 from "../assets/About/Vector 7.svg";
import Vector8 from "../assets/About/Vector 8.svg";
import Btn from "./Btn";


const About = () => {
  return (
    <section className=" mt-32 px-20 ">
      <div className=" w-full flex items-center justify-between gap-5">
        <div className=" w-2/4">
          <h1 className=" font-Montserrat font-bold text-xl text-gray-300 ">
            INTRODUCTION
          </h1>
          <div className="  relative">
            <h1 className=" font-Montserrat font-light text-xl text-gray-400">
              TO HYDRA VR
            </h1>
            <div className="">
              <img src={arrow} className=" w-full h-24 absolute -left-1 -bottom-9 " alt="" />
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <p className="font-Montserrat font-normal text-[13px] text-gray-400">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className=" relative w-full mt-20 flex justify-between">
        <div className="w-[450px] h-[460px] radius overflow-hidden -ml-7  relative z-10">
          <img src={shvets} className=" h-full w-full object-cover " alt="" />
        </div>

        <div className=" mt-12">
          <h1 className=" font-Montserrat font-bold text-2xl text-gray-100 ">ABOUT</h1>
          <h1 className="font-Montserrat font-normal text-2xl text-gray-300">HYDRA VR</h1>
          <p className=" w-[542px] text-gray-400 font-Montserrat font-normal text-xs mt-7 mb-7 relative z-10">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <Btn text="LET’S GET IN TOUCH" />
        </div>
        
        <img src={Vector7} alt="" className=" absolute top-4 -left-12 " />
        <img src={Vector8} alt="" className=" absolute  top-60 " />
      </div>
    </section>
  );
};

export default About;