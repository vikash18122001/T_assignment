import { useMemo } from "react";

const AboutUsLink = ({
  image12,
  image121,
  propBorderRight,
  propBorderRight1,
}) => {
  const offer14Style = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const offer15Style = useMemo(() => {
    return {
      borderRight: propBorderRight1,
    };
  }, [propBorderRight1]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start min-w-[130px] text-center text-xs text-gray-500 font-metropolis">
      <div
        className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start p-5 gap-[24px] border-r-[1px] border-solid border-whitesmoke-300 border-b-[1px]"
        style={offer14Style}
      >
        <div className="w-20 flex flex-col items-center justify-start gap-[12px]">
          <img
            className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src={image12}
          />
          <div className="relative leading-[14px] font-medium">Amazon</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[5px] gap-[8px] text-green">
          <div className="relative font-semibold">Flat 30% Off</div>
          <button className="cursor-pointer [border:none] py-3 px-4 bg-[#F01C21] self-stretch rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-crimson-100">
            <div className="relative text-xs uppercase font-semibold font-metropolis text-white text-left">
              Grab Now
            </div>
          </button>
        </div>
      </div>
      <div
        className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start p-5 gap-[24px] border-r-[1px] border-solid border-whitesmoke-300"
        style={offer15Style}
      >
        <div className="w-20 flex flex-col items-center justify-start gap-[12px]">
          <img
            className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src={image121}
          />
          <div className="relative leading-[14px] font-medium">Amazon</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[5px] gap-[8px] text-green">
          <div className="relative font-semibold">Flat 30% Off</div>
          <button className="cursor-pointer [border:none] py-3 px-4 bg-[#F01C21] self-stretch rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-crimson-100">
            <div className="relative text-xs uppercase font-semibold font-metropolis text-white text-left">
              Grab Now
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLink;