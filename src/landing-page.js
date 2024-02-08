import NavbarHeader from "./components/Header";

import R1 from "./components/R1";
import CouponByCategories from "./components/CouponByCategories";
import AboutUsLink from "./components/AboutUsLink";

import R from "./components/R"
import ApplicationDownload from "./components/Appdownload";
import TermsAndConditionsComponent from "./components/PopularCategories";
import Footer from "./components/Footer";
import banner from './assests/image (1).png'
import timer from './assests/Timer.png'
import trophy from './assests/trophy.png'
import hot from './assests/Hot.png'
import OfferSection from "./components/OfferSection";
import DealsOfDay from "./components/DealsOfDay";
import image10 from './assests/image 10.png'
import HowItWork from "./components/HowItWork";
import image from "./assests/image.png"
import NewsLetter from "./components/NewsLetter";
import image15 from "./assests/image 15.png"
import image16 from "./assests/image 16.png"
import offer1 from './assests/image 16 (1).png'
import offer2 from './assests/offer1 (1).png'


const LandingPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start gap-[21px] tracking-[normal] text-left text-5xl text-gray-500 font-metropolis">
     
      <NavbarHeader />
      <img
        className="w-[900px] h-[450px] relative rounded-[40px] object-cover  max-w-full"
        alt=""
        src={banner}
      />
      <section className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[19px] box-border max-w-full text-left text-xs text-gray-500 font-metropolis">
        <div className="w-[440px] flex flex-col items-center justify-start pt-0 px-5 pb-10 box-border gap-[55px] max-w-full mq450:gap-[55px]">
          <div className="w-[100px] flex flex-row items-center justify-end relative gap-[6px]">
            <div className="h-full w-12 absolute my-0 mx-[!important] top-[0.2px] bottom-[-0.2px] left-[0px] rounded bg-gray-500" />
            <div className="h-2 w-[46px] relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-gainsboro-500 w-5 h-2" />
              <div className="absolute top-[0px] left-[26px] rounded bg-gainsboro-500 w-5 h-2" />
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
            <button className="cursor-pointer [border:none] py-3 pr-2.5 pl-3 bg-white flex-1 rounded-lg shadow-[4px_4px_60px_rgba(0,_0,_0,_0.04)] flex flex-row items-start justify-start box-border gap-[6px] min-w-[92px] whitespace-nowrap hover:bg-gainsboro-200">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={trophy}
              />
              <div className="relative text-xs font-medium font-metropolis text-red text-left">
                Popular Coupons
              </div>
            </button>
            <div className="rounded-lg flex flex-row items-start justify-start py-3 pr-2.5 pl-3 gap-[9px]">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={timer}
              />
              <div className="relative font-medium">Ending Soon</div>
            </div>
            <div className="flex-1 rounded-lg flex flex-row items-start justify-start py-3 pr-2.5 pl-3 box-border gap-[12px] min-w-[92px]">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0 min-h-[12px]"
                alt=""
                src={hot}
              />
              <div className="relative font-medium">Latest Coupons</div>
            </div>
          </div>
        </div>
        <OfferSection />
        <div className="w-[140px] flex flex-row items-start justify-start pt-0 px-5 pb-20 box-border">
          <div className="flex-1 flex flex-row items-center justify-end relative gap-[6px]">
            <div className="h-full w-12 absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[0px] rounded bg-gray-500" />
            <div className="h-2 w-[46px] relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-gainsboro-500 w-5 h-2" />
              <div className="absolute top-[0px] left-[26px] rounded bg-gainsboro-500 w-5 h-2" />
            </div>
          </div>
        </div>
        <DealsOfDay/>
        <div className="w-[140px] flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border">
          <div className="flex-1 flex flex-row items-center justify-end relative gap-[6px]">
            <div className="h-full w-12 absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[0px] rounded bg-gray-500" />
            <div className="h-2 w-[46px] relative">
              <div className="absolute top-[0px] left-[0px] rounded bg-gainsboro-500 w-5 h-2" />
              <div className="absolute top-[0px] left-[26px] rounded bg-gainsboro-500 w-5 h-2" />
            </div>
          </div>
        </div>
        <CouponByCategories />
        <div className="self-stretch flex flex-col items-center justify-center py-6 px-0 box-border max-w-full">
          <img
            className="w-[860px] relative rounded-2xl max-h-full object-cover max-w-full"
            loading="eager"
            alt=""
            src={image10}
          />
        </div>
      </section>
      <div className="h-[55px] flex flex-col items-center justify-start pt-0 px-5 pb-[19px] box-border gap-[9px]">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit flex items-center mq450:text-lgi">
          Popular Membership
        </h1>
        <div className="w-[76px] h-[3px] relative bg-red" />
      </div>
      <div className="w-[900px] flex flex-col items-start justify-start pt-0 px-5 pb-[19px] box-border gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
          <div className="h-[420px] flex-[0.9265] relative rounded-3xs bg-white box-border min-w-[273px] max-w-full border-[1px] border-solid border-whitesmoke-300 mq750:flex-1">
            <div className="absolute top-[95px] left-[236px] bg-gainsboro-500 w-[100px] h-[100px]" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="eager"
              alt=""
              src={image15}
            />
          </div>
          <div className="flex-1 rounded-3xs bg-white box-border flex flex-row items-center justify-start py-0 pr-2.5 pl-0 min-w-[273px] max-w-full border-[1px] border-solid border-whitesmoke-300 mq750:flex-1">
            <div className="h-[420px] flex-1 relative max-w-[102%] shrink-0">
              <div className="absolute top-[12px] left-[283px] bg-gainsboro-500 w-[100px] h-[100px]" />
              <div className="absolute top-[0px] left-[0px] w-full h-full bg-cover bg-no-repeat bg-[top] z-[1]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
                  alt=""
                  src={image16}
                />
                <div className="absolute top-[0px] left-[0px] bg-gray-600  w-full h-full z-[1]" />
              </div>
            </div>
            <div className="w-[900px] flex flex-row items-start justify-start pt-0 px-5 pb-[43px] box-border gap-[80px] max-w-full lg:pb-7 lg:box-border mq450:gap-[80px] mq750:pb-5 mq750:box-border mq1050:gap-[80px]">
              <AboutUsLink
                image12="/image-12-16@2x.png"
                image121="/image-12-17@2x.png"
              />
              <AboutUsLink
                image12="/image-12-18@2x.png"
                image121="/image-12-19@2x.png"
                propBorderRight="unset"
                propBorderRight1="unset"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
          <div className="h-[420px] flex-1 relative rounded-3xs bg-white box-border min-w-[273px] max-w-full border-[1px] border-solid border-whitesmoke-300">
            <div className="absolute top-[156px] left-[229px] bg-gainsboro-500 w-[100px] h-[100px]" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="eager"
              alt=""
              src={offer1}
            />
          </div>
          <div className="h-[420px] flex-1 relative rounded-3xs bg-white box-border min-w-[273px] max-w-full border-[1px] border-solid border-whitesmoke-300">
            <div className="absolute top-[100px] left-[178px]  w-[100px] h-[100px]" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="eager"
              alt=""
              src={offer2}
            />
          </div>
        </div>
      </div>
      <div className="w-[140px] flex flex-row items-start justify-start pt-0 px-5 pb-[19px] box-border">
        <div className="flex-1 flex flex-row items-center justify-end relative gap-[6px]">
          <div className="h-full w-12 absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[0px] rounded bg-gray-500" />
          <div className="h-2 w-[46px] relative">
            <div className="absolute top-[0px] left-[0px] rounded bg-gainsboro-500 w-5 h-2" />
            <div className="absolute top-[0px] left-[26px] rounded bg-gainsboro-500 w-5 h-2" />
          </div>
        </div>
      </div>
      <NewsLetter/>
      <div className="w-[900px] flex flex-col items-start justify-start pt-0 px-5 pb-[43px] box-border gap-[80px] max-w-full lg:pb-7 lg:box-border mq450:gap-[80px] mq750:pb-5 mq750:box-border mq1050:gap-[80px]">
        <HowItWork/>
        <ApplicationDownload />
        <div className="self-stretch rounded-2xl bg-white flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border gap-[20px] max-w-full mq750:flex-wrap mq750:pl-4 mq750:pt-4 mq750:pb-4 mq750:box-border">
          <img
            className="h-[392px] w-[273px] relative overflow-hidden shrink-0 object-cover mq750:flex-1"
            alt=""
            src={image}
          />
          <TermsAndConditionsComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;