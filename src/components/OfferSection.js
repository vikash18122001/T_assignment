import Offer from "./Offer";

import img12 from "../assests/image 12.png"

const OfferSection = () => {
  return (
    <div className="w-[900px] flex flex-row flex-wrap items-start justify-center pt-0 px-5 pb-10 box-border gap-[25px_16px] min-h-[541px] max-w-full text-center text-base text-green font-metropolis">
      <Offer image12={img12} />
      <Offer image12={img12} />
      <Offer image12={img12} />
      <Offer image12={img12} />
      <Offer image12={img12} />
      <Offer image12={img12}/>
      <Offer image12={img12} />
      <Offer image12={img12}/>
    </div>
  );
};

export default OfferSection;