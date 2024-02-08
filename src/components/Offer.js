
const Offer = ({image12}) => {
    return (
      <div className="w-[200px] rounded-3xs bg-white box-border overflow-hidden shrink-0 flex flex-col items-center justify-start pt-4 pb-[15px] pr-[22px] pl-[21px] gap-[39px] text-center text-base text-green font-metropolis border-[1px] border-solid border-whitesmoke-300">
        <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
          <div className="relative leading-[20px] font-semibold">
            <p className="m-0">Upto 60% off on</p>
            <p className="m-0">Appliances</p>
          </div>
          <img className="w-20 h-6 relative object-cover" alt="" src={image12} />
          <div className="self-stretch relative text-xs leading-[14px] font-medium text-gray-300">
            Upto 60% off on summer Appliances
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 pr-9 pl-[39px] bg-[#F01C21] rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-crimson-100">
          <div className="relative text-xs uppercase font-semibold font-metropolis text-white text-left">
            Grab now
          </div>
        </button>
      </div>
    );
  };
  
  export default Offer;