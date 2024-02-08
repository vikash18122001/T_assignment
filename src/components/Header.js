import logo from "../assests/logo.png"
import vector from "../assests/Vector.png"
const NavbarHeader = () => {
    return (
      <section className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-full mq750:gap-[40px]">
        <header className="self-stretch flex flex-col items-center justify-start max-w-full shrink-0 text-left text-xs text-white font-metropolis">
          <div className="w-[900px] flex flex-row items-center justify-between py-4 px-5 box-border gap-[20px] max-w-full mq750:flex-wrap">
            <div className="h-[50px] w-[120px] flex flex-col items-center justify-center">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src={logo}
              />
            </div>
            <div className="h-8 w-[418px] rounded-lg bg-whitesmoke-200 box-border flex flex-row items-center justify-start py-0 px-4 gap-[8px] max-w-full border-[1px] border-solid border-gainsboro-300">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                alt=""
                src={vector}
              />
              <input
  className="w-52 border-none outline-none font-metropolis text-xs bg-transparent h-3 relative text-gray-200 text-left flex items-center whitespace-nowrap"
  
  type="text"
  placeholder="Search For brand, category, coupon"
   readOnly={false}
/>

            </div>
            <button className="cursor-pointer border-none py-3 px-3.5 bg-[#F01C21] rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-crimson-100 text-white">
  <div className="relative text-sm uppercase font-semibold font-metropolis text-left">
    Login / Sign Up
  </div>
</button>
          </div>
          <div className="self-stretch bg-gray-500 flex flex-col items-center justify-center max-w-full">
            <div className="w-[463px] flex flex-row flex-wrap items-center justify-start py-0 px-5 box-border [row-gap:20px] max-w-full">
              <button className="cursor-pointer [border:none] p-4 bg-[transparent] flex flex-row items-center justify-center border-b-[2px] border-solid border-red hover:bg-crimson-200">
                <div className="relative text-xs font-semibold font-metropolis text-red text-left whitespace-nowrap">
                <a href="/">Home</a>
                </div>
              </button>
              <div className="flex flex-row items-center justify-center p-4 gap-[4px]">
                <div className="relative font-semibold whitespace-nowrap">
                <a href="/">Deals</a>
                </div>
                
              </div>
              <div className="flex-1 flex flex-row items-center justify-center p-4 box-border gap-[4px] min-w-[62px]">
                <div className="relative font-semibold whitespace-nowrap">
                <a href="/">Coupon</a>
                </div>
                
              </div>
              <div className="flex-1 flex flex-row items-center justify-center p-4 box-border gap-[4px] min-w-[50px] z-[1]">
                <div className="relative font-semibold whitespace-nowrap">
                <a href="/">Stores</a>
                </div>
                
              </div>
              <div className="flex-1 flex flex-row items-center justify-center py-4 px-[15px] box-border min-w-[62px]">
                <div className="relative font-semibold whitespace-nowrap">
                  <a href="/">ContactUs</a>
                </div>
              </div>
            </div>
          </div>
        </header>
        
      </section>
    );
  };
export default NavbarHeader  