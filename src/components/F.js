const F = ({
  general,
  partnerWithUs,
  writeToUs,
  mobileApp,
  siteMap,
}) => {
  return (
    <div className="w-[145px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border gap-[16px] min-w-[94px] text-left text-xs text-[#F01C21] font-metropolis">
      <div className="relative uppercase font-semibold">{general}</div>
      <ul className="flex flex-col items-start justify-start gap-[12px] text-3xs text-white list-none p-0">
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/partner-with-us" className="relative font-medium">{partnerWithUs}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/write-to-us" className="relative font-medium">{writeToUs}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/mobile-app" className="relative font-medium">{mobileApp}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/site-map" className="relative font-medium">{siteMap}</a>
        </li>
      </ul>
    </div>
  );
};

export default F;
