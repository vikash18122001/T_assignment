import F2 from "./F2";
import vector1 from "../assests/Vector 1.png"
import vector2 from "../assests/Vector 2.png"
const R = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 relative gap-[20px] text-center text-base text-gray-500 font-metropolis">
      <F2 login="/login.svg" signup="Signup" />
      <F2 login="/coupon.svg" signup="Choose Coupon" />
      <div className="flex-1 rounded-2xl bg-white box-border flex flex-col items-center justify-start py-6 px-[15px] gap-[24px] min-w-[205px] border-[1px] border-solid border-whitesmoke-300">
        <div className="rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.85),_rgba(255,_255,_255,_0.85)),_#f01c21] flex flex-row items-center justify-center p-4">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/card.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[26px] font-semibold">
            Grab Coupon
          </div>
          <div className="self-stretch h-[72px] relative text-sm leading-[24px] font-medium font-manrope text-darkslategray-100 inline-block">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there
          </div>
        </div>
      </div>
      <img
        className="h-[39px] w-[180px] absolute my-0 mx-[!important] top-[52px] left-[196px] z-[1]"
        loading="eager"
        alt=""
        src={vector1}
      />
      <img
        className="h-[39px] w-[180px] absolute my-0 mx-[!important] top-[24px] left-[488px] z-[1]"
        loading="eager"
        alt=""
        src={vector2}
      />
    </div>
  );
};

export default R;