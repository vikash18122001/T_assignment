import { useMemo } from "react";

const OfferCard = ({ image, propBorder }) => {
  const offerStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-col items-center justify-start p-5 gap-[24px] min-w-[173px] max-w-[200px] border-[1px] border-solid border-whitesmoke-300"
      style={offerStyle}
    >
      <div className="w-20 flex flex-col items-center justify-start gap-[12px]">
        <img
          className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0 object-cover"
          alt=""
          src={image}
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
  );
};

const R1 = ({ image12, image121, image122, image123, propFlex, propAlignSelf, propBorder, propBorder1, propBorder2, propBorder3 }) => {
  const r1Style = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className="flex-1 flex flex-row flex-wrap items-center justify-center gap-[20px] max-w-full text-center text-xs text-gray-500 font-metropolis" style={r1Style}>
      <OfferCard image={image12} propBorder={propBorder} />
      <OfferCard image={image121} propBorder={propBorder1} />
      <OfferCard image={image122} propBorder={propBorder2} />
      <OfferCard image={image123} propBorder={propBorder3} />
    </div>
  );
};

export default R1;
