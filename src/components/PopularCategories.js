const TermsAndConditionsComponent = () => {
  const categories = [
    'Flight', 'Bus', 'Entertainment', 'Jewellery',
    'Medicines', 'Hosting', 'Flowers', 'Beauty',
    'OTT', 'Bills', 'Kids', 'Travel',
    'Food', 'Eyewear', 'Lifestyle', 'Kitchen',
    'Recharge', 'Electronics', 'Hotel', 'Footwear',
    'Lab', 'Education', 'Services', 'Furniture',
    'Fashion', 'Pizza', 'Bike', 'Novelties'
  ];

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-358 max-w-full text-left text-5xl text-gray-500 font-metropolis mq450:min-w-full">
      <h1 className="m-0 h-6 relative text-inherit font-semibold font-inherit flex items-center mq450:text-lgi">
        Popular Categories
      </h1>
      <div className="w-76 h-3 relative bg-red" />
      <div className="self-stretch flex flex-col items-start justify-start text-center text-sm">
        {[0, 1, 2].map((group, index) => (
          <div
            key={index}
            className={`self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-0 ${index > 0 ? 'mt-[-1px]' : ''} border-[1px] border-solid border-gainsboro-400 mq750:flex-wrap mq750:pl-0.5 mq750:pt-0.5 mq750:pb-0.5 mq750:box-border z-${index + 1}`}
          >
            {categories.slice(group * 4, group * 4 + 4).map((category, catIndex) => (
              <a
                key={catIndex}
                href={`#category-${category.toLowerCase()}`} // Add your desired link path
                className={`flex-1 box-border flex flex-row items-center justify-center py-4 px-3 min-w-${catIndex > 0 ? '68' : '97'} max-w-138 border-[1px] border-solid border-gainsboro-400 ${catIndex > 0 ? 'ml-[-1px]' : ''}`}
              >
                <div className="relative font-medium">{category}</div>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsComponent;
