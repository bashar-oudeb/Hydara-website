import arrow from "../assets/About/Component 1.svg";
import arrow2 from '../assets/Hero/arrow.svg'
import victor from '../assets/Process/Vector 15.svg'


const Process = () => {
  return (
    <section className=" mt-14 ">
      
      <div className=" px-20 w-full flex items-center justify-between gap-5">
        <div className=" w-2/4">
          <h1 className=" font-Montserrat font-bold text-xl text-gray-300 ">
          HOW WE BUILD
          </h1>
          <div className="  relative mt-2">
            <h1 className=" font-Montserrat font-light text-xl text-gray-400">
            WITH HYDRA VR?
            </h1>
            <div className="">
              <img src={arrow} className=" w-full h-20 absolute left-3 -bottom-7 " alt="" />
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

      <div className=" px-10 mt-36 flex flex-wrap items-center justify-around relative">

        <div className=" flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">01</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className=" flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">02</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className=" flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">03</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>

        <div className=" flex flex-col gap-5 justify-center items-center z-10">
          <div className=" w-44 h-44 rounded-full bg-[#0D0D0D52] flex justify-center items-center ">
            <div className="w-36 h-36 rounded-full  gradient-text1  flex justify-center items-center  ">
              <h1 className=" font-Montserrat font-bold  text-[50px]  text-[#343045]">04</h1>
            </div>
          </div>
          <div className=" flex  gap-3 justify-center ">
            <img src={arrow2} alt=""  className=" w-6 h-8 "/>
            <h3 className=" font-Montserrat font-bold text-sm text-gray-200 mt-1">3D Conception<br /> & Design</h3>
          </div>
        </div>
        <div className=" absolute  top-1 z-0 ">
                  <img src={victor} alt=""  className=" "/>

        </div>
      </div>
    </section>
  )
}

export default Process