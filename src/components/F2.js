const F2 = ({ login, signup }) => {
    return (
      <div className="flex-1 rounded-2xl bg-white box-border flex flex-col items-center justify-start py-6 px-[15px] gap-[24px] min-w-[205px] text-center text-base text-gray-500 font-metropolis border-[1px] border-solid border-whitesmoke-300">
        <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-xl [background:linear-gradient(rgba(255,_255,_255,_0.85),_rgba(255,_255,_255,_0.85)),_#f01c21] flex flex-row items-center justify-center">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src={login}
          />
        </button>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
          <div className="self-stretch relative leading-[26px] font-semibold">
            {signup}
          </div>
          <div className="self-stretch h-[72px] relative text-sm leading-[24px] font-medium font-manrope text-darkslategray-100 inline-block">
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there
          </div>
        </div>
      </div>
    );
  };
  
  export default F2;