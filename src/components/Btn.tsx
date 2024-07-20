
const Btn = ({ text }) => {
  return (
    <>
        <button className=" px-6 py-2 bg-gradient-to-l from-customPurpleLight to-customPurpleDark rounded-full hover:rectangle transition-all ">
              <span className=" font-Montserrat font-bold text-xs text-[#343045] ">{ text }</span>
         </button>
    </>
  )
}

export default Btn