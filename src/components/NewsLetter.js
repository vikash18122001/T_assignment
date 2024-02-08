import formimg from "../assests/form-img.png"
const NewsLetter = () => {
    return (
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[19px] box-border max-w-full text-left text-13xl text-gray-500 font-metropolis">
        <div className="flex-1 [background:linear-gradient(180deg,_rgba(218,_218,_218,_0.25),_#dadada)] flex flex-row items-start justify-center p-10 box-border max-w-full mq750:gap-[40px] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border">
          <div className="w-[880px] rounded-3xs bg-white box-border flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full border-[10px] border-solid border-white">
            <div className="h-[420px] w-[880px] relative rounded-3xs bg-white box-border hidden max-w-full border-[10px] border-solid border-white" />
            <img
              className="h-[400px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[273px] z-[1]"
              loading="eager"
              alt=""
              src={formimg}
            />
            <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-[24px] min-w-[273px] max-w-full z-[1]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <h1 className="m-0 h-20 relative text-inherit leading-[40px] font-semibold font-inherit inline-block mq450:text-lgi mq450:leading-[24px] mq1050:text-7xl mq1050:leading-[32px]">
                  <p className="m-0">Subscribe to our</p>
                  <p className="m-0">Newsletter!</p>
                </h1>
                <div className="h-12 relative text-base leading-[24px] text-[#908F8F] inline-block">
                  <p className="m-0">Be the first to get exclusive offers</p>
                  <p className="m-0">ands the latest news</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <input
                  className="w-full [outline:none] bg-white self-stretch h-[47px] rounded-lg box-border flex flex-row items-start justify-start py-4 px-5 font-montserrat text-xs text-gray-100 min-w-[250px] border-[1px] border-solid border-lightgray"
                  placeholder="Enter your email address"
                  type="text"
                />
                <button className="cursor-pointer [border:none] py-3 px-4 bg-[#F01C21] w-[148px] rounded-lg flex flex-row items-center justify-center box-border hover:bg-crimson-100">
                  <div className="relative text-xs uppercase font-semibold font-metropolis text-white text-left">
                    SUBSCRIBE
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default NewsLetter