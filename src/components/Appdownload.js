import phone from '../assests/Phone.png'
import appstore from '../assests/image 64.png'
import playstore from '../assests/image 64 (1).png'
const ApplicationDownload = () => {
    return (
      <div className="self-stretch rounded-3xl [background:linear-gradient(rgba(255,_255,_255,_0.85),_rgba(255,_255,_255,_0.85)),_#f01c21] overflow-hidden flex flex-row items-center justify-start pt-7 pb-0 pr-0 pl-[78px] box-border gap-[5px] max-w-full text-left text-13xl text-red font-metropolis mq750:flex-wrap mq750:pl-5 mq750:pr-5 mq750:pb-5 mq750:box-border mq1050:pl-[39px] mq1050:box-border">
        <div className="h-[400px] w-[860px] relative rounded-3xl [background:linear-gradient(rgba(255,_255,_255,_0.85),_rgba(255,_255,_255,_0.85)),_#f01c21] hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border min-w-[352px] max-w-full mq750:flex-1 mq750:min-w-full">
          <div className="flex flex-col items-start justify-start gap-[20px] z-[1]">
            <div className="w-[269px] flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch h-20 relative leading-[40px] font-semibold inline-block text-[#F01C21]">
  Want to be a part of our team
</h1>
              <div className="self-stretch relative text-base leading-[24px] text-darkslategray-200">
                Be a part of best site of discount coupons
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px] text-3xs text-gray-400 mq450:flex-wrap">
              <div className="rounded-lg bg-white shadow-[6px_6px_60px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-center py-3 px-[17px] gap-[12px] border-[1px] border-solid border-gainsboro-100">
                <img
                  className="h-8 w-8 relative object-cover"
                  loading="eager"
                  alt=""
                  src={appstore}
                />
                <div className="flex flex-col items-start justify-center gap-[4px]">
                  <div className="relative font-medium">Download From</div>
                  <div className="relative text-sm uppercase font-semibold text-gray-500">
                    App Store
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white shadow-[6px_6px_60px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-center py-3 px-[17px] gap-[12px] border-[1px] border-solid border-gainsboro-100">
                <img
                  className="h-8 w-8 relative object-cover"
                  alt=""
                  src={playstore}
                />
                <div className="flex flex-col items-start justify-center gap-[4px]">
                  <div className="relative font-medium">Download From</div>
                  <div className="relative text-sm uppercase font-semibold text-gray-500">
                    Play Store
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[372px] flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[276px] max-w-full">
          <div className="w-[461px] h-[443px] relative max-w-[108%] shrink-0">
            <img
              className="absolute top-[11px] left-[170px] w-[290.6px] h-[432px] object-contain z-[1]"
              loading="eager"
              alt=""
              src={phone}
            />
            <img
              className="absolute top-[0px] left-[0px] w-[216px] h-[321.1px] object-contain z-[2]"
              alt=""
              src={phone}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default ApplicationDownload;