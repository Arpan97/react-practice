import React, { useState } from "react";
import { convertMoneyRemoveDot } from "../../utils/CommonFunction";
import Card from "../molecules/Card";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  _id: number;
  title: string;
  price: number;
  bannerImage: string;
}

interface ProductCardProps {
  data?: ProductProps;
}

const ProductShort: React.FC<ProductCardProps> = ({
  data = {
    _id: 0,
    title: "",
    price: 0,
    bannerImage: "",
  },
}) => {
  const navigate = useNavigate();
  const [isWish, setIsWish] = useState(false);
  const handleWishlist = () => {
    setIsWish(!isWish);
  };
  return (
    <Card className="sm:w-68 h-full" key={data?._id}>
      <div className=" w-full h-100 rounded-md overflow-hidden py-1">
        <div
          // style={{ backgroundImage: `url(${data?.bannerImage})` }}
          className="bg-white border-1 border-gray-100 w-[95%] h-[60%] rounded-md mx-auto relative"
        >
          <img
            src={data?.bannerImage}
            className="w-full h-full object-contain"
          />
          <div className="flex justify-end p-2 absolute top-1 right-1 z-20">
            <div
              onClick={handleWishlist}
              className="bg-white w-8 h-8 rounded-full justify-center items-center flex shadow-lg"
            >
              {isWish ? (
                <i className="ri-heart-3-fill text-red-600 hover:cursor-pointer"></i>
              ) : (
                <i className="ri-heart-3-line text-xl hover:cursor-pointer"></i>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex w-[95%] mx-auto mt-2">
            <h3 className="text-sm sm:text-lg font-semibold text-black line-clamp-2 w-[75%]">
              {data?.title}
            </h3>
            <p className="font-bold text-md text-black w-[25%] text-right">
              {convertMoneyRemoveDot(data?.price)}
            </p>
          </div>
          <div className="sm:flex justify-between items-center px-2 mt-5">
            <div
              onClick={() => navigate(`/product/${data?._id}`)}
              className="bg-gray-100 items-center justify-center flex rounded-full py-2.5 px-5 hover:cursor-pointer"
            >
              <p className="text-xs font-medium uppercase">More Detail</p>
            </div>
            <div className="flex justify-between items-center bg-black py-2.5 px-5 rounded-full hover:cursor-pointer mt-2 sm:mt-0">
              <i className="ri-shopping-cart-line text-xs font-medium text-white"></i>
              <p className="text-xs font-medium uppercase text-white ml-1">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default React.memo(ProductShort);
