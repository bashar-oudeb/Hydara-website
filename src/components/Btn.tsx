
const Btn = ({ text }) => {
  return (
    <>
        <button className=" px-14 md:px-6 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark hover:bg-gradient-to-b hover:from-customPurpleLight hover:to-customPurpleDark z-20 rounded-full hover:rectangle transition-all ">
              <span className=" font-Montserrat font-bold text-xs text-[#343045] ">{ text }</span>
         </button>
    </>
  )
}

export default Btn