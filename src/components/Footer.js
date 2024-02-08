import F1 from "./F1";
import F from "./F";
import logo from "../assests/logo.png"
import appstore from '../assests/image 64.png'
import playstore from '../assests/image 64 (1).png'
import arrow from "../assests/arrow.png"

const Footer = () => {
  return (
    <div     className="self-stretch bg-gray-500 flex flex-col items-center justify-start py-8 px-0 box-border max-w-full text-left text-xs text-red font-metropolis">
      <div className="w-[900px] flex flex-row flex-wrap items-start justify-start py-0 px-5 box-border gap-[20px] max-w-full">
        <div className="w-[200px] flex flex-col items-start justify-start gap-[13px] text-white">
          <img
            className="w-[120px] h-[50px] relative object-cover"
            alt=""
            src={logo}
          />
          <div className="self-stretch relative leading-[16px]">
            Lorem Ipsum is simply dummy of the printing and type setting.
          </div>
          <div className="w-32 flex flex-col items-start justify-start gap-[8px] text-5xs text-gray-400">
            <div className="self-stretch rounded-lg bg-white shadow-[6px_6px_60px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-center py-2 px-3 gap-[4px] border-[1px] border-solid border-gainsboro-100">
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                loading="eager"
                alt=""
                src={appstore}
              />
              <div className="flex flex-col items-start justify-center gap-[2px]">
                <div className="relative font-medium">Download From</div>
                <div className="relative text-xs uppercase font-semibold text-gray-500">
                  App Store
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-[6px_6px_60px_rgba(0,_0,_0,_0.07)] flex flex-row items-center justify-center py-2 px-2.5 gap-[4px] border-[1px] border-solid border-gainsboro-100">
              <img
                className="h-6 w-6 relative object-cover min-h-[24px]"
                alt=""
                src={playstore}
              />
              <div className="flex flex-col items-start justify-center gap-[2px]">
                <div className="relative font-medium">Download From</div>
                <div className="relative text-xs uppercase font-semibold text-gray-500">
                  Play Store
                </div>
              </div>
            </div>
          </div>
        </div>
        <F1
          company="Company"
        
          aboutUs="About Us"
         
          privacyPolicy="Privacy Policy"
          
          terms="Terms"
          
          blogs="Blogs"
          
          branding="Branding"
          
          career="Career"
        />
        <F
          general="General"
          
          partnerWithUs="Partner With us"
        
          writeToUs="Write to us"
        
          mobileApp="Mobile App"
         
          siteMap="Site map"
        />
        <F1
          company="Pages"
        
          aboutUs="Amazon Offer"
          
          privacyPolicy="Google Pay Offers"
          
          terms="PayPal Offers"
          
          blogs="PhonePe Offers"
          
          branding="Festival Offers"
          
          career="Bank Offers"
        />
        <F
          general="More"
         
          partnerWithUs="City Offers"
          
          writeToUs="Brand Offers"
          
          mobileApp="Product Deals"
          
          siteMap="Gift Cards"
        />
      </div>
    </div>
  );
};

export default Footer;