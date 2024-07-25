import arrow from "../assets/About/Component 1.svg";
import mali from "../assets/Services/pexels-mali-maeder-756439 1.png";
import Vector from "../assets/Services/Vector 14.svg";

const Services = () => {
  return (
    <section className=" relative mt-32 px-20  ">
      <div className=" w-full flex items-center justify-between gap-5">
        <div className=" md:w-2/4 w-full">
          <h1 className=" font-Montserrat font-bold text-xl text-gray-300  text-center">
            WHY BUILD
          </h1>
          <div className="  relative">
            <h1 className=" font-Montserrat font-light text-xl text-gray-400 text-center ">
              WITH HYDRA?
            </h1>
            <div className="">
              <img
                src={arrow}
                className=" hidden md:block w-full h-24 absolute -left-1 -bottom-9 "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <p className=" hidden md:block font-Montserrat font-normal text-[13px] text-gray-400">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>

      <div className=" mt-24 flex items-center justify-center gap-3 z-20 relative">
        <div className=" w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src={mali}
                alt=""
                className=" h-full w-full object-cover rounded-full"
              />
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
          <button className=" block m-auto text-xs font-semibold font-Montserrat border rounded-[35px] px-6 py-2 mt-6 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-20 hover:bg-primary transition-all cursor-pointer ">
            TRY IT NOW
          </button>
        </div>

        <div className=" w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src={mali}
                alt=""
                className=" h-full w-full object-cover rounded-full"
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

        <div className=" w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src={mali}
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

        <div className=" w-72 h-[450px] rounded-3xl bg-radius ">
          <div className=" w-44 h-44 rounded-full bg-[#0E0E0E52] m-auto  flex items-center justify-center mt-6 ">
            <div className=" w-[155px] h-[155px] rounded-full ">
              <img
                src={mali}
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
      <img src={Vector} alt="" className=" absolute -bottom-80 -left-1 z-10" />
    </section>
  );
};

export default Services;
