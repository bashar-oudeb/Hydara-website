import contact from '../assets/contact/Vector 16.svg'
import Btn from './Btn';


const Contact = () => {
  return (
    <section className=" mt-32 px-20 w-[1100px] h-[808px] m-auto rounded-[60px] flex flex-col  justify-center items-center bg-radius">
      <div className=" mt-12">
        <h1 className=' font-Montserrat font-bold text-3xl text-gray-200 text-center mt-12'>JOIN HYDRA</h1>
        <img src={contact} alt="" className=' mt-5 text-center' />
        <h1 className=' font-Montserrat font-light text-3xl text-gray-300 text-center mt-5'>Let’s Build Your VR Experience</h1>
      </div>
      <form action="" className=' mt-10 '>
        <div className=" flex flex-wrap items-center  gap-5"> 
          <input type="text" name="" id="" placeholder="First Name" className=" w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white  px-3 py-5  text-sm font-Montserrat "/>
          <input type="text" name="" id="" placeholder="Last Name" className=" w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent  text-white px-3 py-5  text-sm font-Montserrat " />
          <input type="text" name="" id="" placeholder="Email"  className=" w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent  text-white px-3 py-5  text-sm font-Montserrat "/>
          <input type="text" name="" id="" placeholder="Phone Number" className=" w-[450px] h-14 rounded-[40px] border border-teal-50 bg-transparent  text-white  px-3 py-5  text-sm font-Montserrat"/>
        </div>
        <div className=" mt-6">
          <input type="text" name="" id="" placeholder="Subject"  className='w-[920px] h-14 rounded-[40px] border border-teal-50 bg-transparent text-white px-3 py-5  text-sm font-Montserrat'/>
        </div>
        <div className=" mt-6">
          <textarea name="" id="" placeholder="Tell Us Something..." className='w-[920px] h-52 rounded-[40px] border border-teal-50 bg-transparent   text-white px-3 py-5 text-sm font-Montserrat'></textarea>
        </div>
        <div className=" flex justify-center mt-6">
          <Btn text="SEND TO HYDRA"  />
        </div>
        
      </form>
    </section>
  );
};

export default Contact;
