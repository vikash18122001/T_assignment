const F1 = ({
  company,
  aboutUs,
  privacyPolicy,
  terms,
  blogs,
  branding,
  career,
}) => {
  return (
    <div className="w-[145px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border gap-[16px] min-w-[94px] text-left text-xs text-red font-metropolis">
      <div className="relative uppercase font-semibold text-red-700">{company}</div>
      <ul className="flex flex-col items-start justify-start gap-[12px] text-3xs text-white list-none p-0">
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/about-us" className="relative font-medium">{aboutUs}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/privacy-policy" className="relative font-medium">{privacyPolicy}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/terms" className="relative font-medium">{terms}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/blogs" className="relative font-medium">{blogs}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/branding" className="relative font-medium">{branding}</a>
        </li>
        <li className="flex flex-row items-center justify-start gap-[2px]">
          <a href="/career" className="relative font-medium">{career}</a>
        </li>
      </ul>
    </div>
  );
};

export default F1;
