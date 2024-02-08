import R1 from "./R1";
import img12 from "../assests/image 12.png"
import beautyCare from "../assests/beauty care.png"
import fashion from "../assests/fashion.png"
import food from "../assests/Food.png"
import gaming from "../assests/gaming.png"
import hosting from "../assests/hosting.png"
import mobile from "../assests/mobile.png"
import movies from "../assests/movies.png"
import toys from "../assests/toys.png"
import travel from "../assests/travel.png"

const CouponByCategories = () => {
  return (
    <div className="self-stretch [background:linear-gradient(180deg,_rgba(218,_218,_218,_0.25),_#dadada)] flex flex-col items-center justify-start p-10 box-border gap-[40px] max-w-full z-[1] text-left text-5xl text-gray-500 font-metropolis mq750:gap-[40px] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
      <div className="h-9 flex flex-col items-center justify-start gap-[9px]">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit flex items-center mq450:text-lgi">
          Coupon By Categories
        </h1>
        <div className="w-[76px] h-[3px] relative bg-red" />
      </div>
      <div className="w-[860px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[4px]">
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none box-border flex flex-col items-center justify-start gap-[10px] min-w-[90px] max-w-[92px] border-b-[2px] border-solid border-red hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={fashion}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Fashion
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={food}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Food
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={beautyCare}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Beauty
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={toys}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Toys
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={hosting}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Cloud
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={gaming}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Gaming
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={mobile}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Phones
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={travel}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Travel
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-4 bg-white flex-1 rounded-t-lg rounded-b-none flex flex-col items-center justify-start box-border gap-[10px] min-w-[90px] max-w-[92px] hover:bg-gainsboro-200">
            <img
              className="w-9 h-9 relative object-cover"
              alt=""
              src={movies}
            />
            <div className="self-stretch relative text-xs font-semibold font-metropolis text-gray-500 text-center">
              Movies
            </div>
          </button>
        </div>
        <div className="self-stretch rounded-t-none rounded-b-2xl bg-white flex flex-col items-center justify-start pt-4 px-0 pb-6 gap-[16px] border-t-[1px] border-solid border-whitesmoke-200">
          <R1
            image12={img12}
            image121={img12}
            image122={img12}
            image123={img12}
            propFlex="unset"
            propAlignSelf="stretch"
            propBorder="unset"
            propBorder1="unset"
            propBorder2="unset"
            propBorder3="unset"
          />
          <div className="w-[100px] flex flex-row items-center justify-end relative gap-[6px]">
            <div className="h-full w-12 absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[0px] rounded bg-gray-500" />
            <div className="h-2 w-[46px] relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-gainsboro-500 w-5 h-2" />
              <div className="absolute top-[0px] left-[26px] rounded bg-gainsboro-500 w-5 h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponByCategories;