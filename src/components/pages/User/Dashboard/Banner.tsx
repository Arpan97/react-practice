/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { bannerList } from "../../../../utils/constantData";

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((bannerIndex + 1) % bannerList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bannerIndex, bannerList.length]);

  return (
    <div className="w-full flex flex-col justify-center items-center my-3">
      <div className="w-94 sm:w-[98%] sm:h-60 self-center rounded-lg overflow-hidden h-36 object-fit-contain">
        <img
          src={bannerList[bannerIndex]?.url}
          className="w-100 h-100 sm:w-full sm:rounded-lg"
        />
      </div>
      <div className="flex gap-2 mt-3">
        {bannerList?.map((_, index: number) => {
          return (
            <div
              className={`${
                bannerIndex === index ? "bg-blue-300" : "bg-gray-200"
              } w-2 h-2 rounded-full flex`}
            >
              <div />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
