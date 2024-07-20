import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <section className=" flex items-center justify-around">
      <div className=" flex items-center gap-3">
        <img src={Logo} alt="logo"  className=" h-24 w-24"/>
        <h1 className=" gradient-text font-Edu text-xl">HYDRA</h1>
      </div>
      <div className="">
        <ul className=" flex justify-center items-center gap-3 ">
          <li ><a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">ABOUT</a> </li>
          <li ><a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">SERVICES</a> </li>
          <li ><a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">TECHNOLOGIES</a> </li>
          <li ><a className=" font-Montserrat text-white cursor-pointer hover:text-gray-300 text-xs transition-all">HOW TO</a> </li>
        </ul>
      </div>
      <div className=" flex items-center gap-6">
        <button className=" text-xs font-semibold font-Montserrat border rounded-[35px] px-3 py-2 text-white  z-20 hover:bg-slate-800 transition-all cursor-pointer">CONTACT US</button>
        <button className=" text-xs font-semibold font-Montserrat border rounded-[35px] px-3 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark border-[#8176AF] z-20 hover:rectangle transition-all cursor-pointer">JOIN HYDRA</button>
      </div>
    </section>
  );
};

export default Navbar;
