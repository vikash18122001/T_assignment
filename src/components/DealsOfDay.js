import image12 from "../assests/image 12.png"
import R1 from "./R1"
const DealsOfDay=()=>{
    return(
        <>
        <div className="h-[76px] flex flex-col items-center justify-start pt-0 px-5 pb-10 box-border gap-[9px] text-5xl">
        <h1 className="m-0 flex-1 relative text-inherit font-semibold font-inherit flex items-center mq450:text-lgi">
          Deals Of The Day
        </h1>
        <div className="w-[76px] h-[3px] relative bg-red" />
      </div>
      <div className="w-[900px] flex flex-row items-start justify-start pt-0 px-5 pb-10 box-border max-w-full">
        <R1
          image12={image12}
          image121={image12}
          image122={image12}
          image123={image12}
        />
      </div>
      </>
    )
}
export default DealsOfDay