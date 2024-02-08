import R from "./R"
const HowItWork=()=>{
    return (
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] mq450:gap-[40px]">
        <div className="h-9 flex flex-col items-center justify-start gap-[9px]">
          <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit flex items-center mq450:text-lgi">
            How It Works?
          </h1>
          <div className="w-[76px] h-[3px] relative bg-red" />
        </div>
        <R />
      </div>
    )
}
export default HowItWork