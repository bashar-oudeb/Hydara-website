import shape from "../assets/shape.svg";
import Tech1 from "../assets/Tech/Hydra-Tech1 .png";
import Tech2 from "../assets/Tech/Hydra-Tech2.png";
import Tech3 from "../assets/Tech/Hydra-Tech3.png";
import Tech4 from "../assets/Tech/Hydra-Tech4.png";

const Tech = () => {
  return (
    <section className=" mt-20 relative ">
      <div className="  flex flex-col gap-3 items-center justify-center relative h-72 bg-[#a39ebcc2] rounded-full  w-[1100px] m-auto z-10 ">
        <div className=" brightness-50 w-full h-full  absolute bg-img rounded-full"></div>

        <h1 className="   text-white  font-Montserrat font-bold text-3xl z-20">
          TECHNOLOGIES & HARDWARE
        </h1>
        <h2 className=" font-Montserrat font-light text-3xl text-gray-300 text-center z-20">
          USED BY HYDRA VR.
        </h2>

        <div className=" absolute w-14  h-14 rounded-full bg-[#0E0E0E52] z-20 -bottom-7 flex justify-center items-center">
          <div className=" w-12 h-12 rounded-full  gradient-text1  grid place-items-center">
            <img src={shape} alt=""  className=" w-6"/>
          </div>
        </div>
      </div>

      <div className=" mt-4 flex justify-around items-center flex-wrap">
       
       <img src={Tech1} alt=""  className=" w-32 h-32 opacity-50 hover:opacity-60 transition-all cursor-pointer"/>
       <img src={Tech2} alt=""  className=" w-60 h-60 opacity-50 hover:opacity-60 transition-all cursor-pointer"/>
       <img src={Tech3} alt=""  className=" w-56 h-56 opacity-50 hover:opacity-60 transition-all cursor-pointer"/>
       <img src={Tech4} alt=""  className=" w-[255px] h-[255px] opacity-50 hover:opacity-60 transition-all cursor-pointer"/>

      </div>
    </section>
  );
};

export default Tech;
