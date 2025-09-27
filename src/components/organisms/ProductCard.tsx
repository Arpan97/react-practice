import { useEffect, useState } from "react";
import { convertMoneyRemoveDot } from "../../utils/CommonFunction";
import Card from "../molecules/Card";
import type { ProductProps } from "../interface/productInterface";

interface ProductCardProps {
  data?: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data = {
    _id: 0,
    title: "",
    quantityAvailable: 0,
    price: 0,
    discountPrice: 0,
    productDescription: "",
    productImages: [],
    productIcon: "",
    minQuantity: 0,
    maxQuantity: 0,
    deliveryDetails: [],
    availableColors: [],
    category: {
      _id: 0,
      title: "",
    },
    subCategory: {
      _id: 0,
      title: "",
    },
    productSpecification: {
      availableSizes: [],
      availableServices: [],
      packOf: 0,
      brand: "",
      isAvailable: true,
    },
    rating: 0,
    reviews: [],
    isWishlist: false,
  },
}) => {
  const [isWish, setIsWish] = useState(false);
  const handleWishlist = () => {
    setIsWish(!isWish);
  };
  useEffect(() => {
    setIsWish(data?.isWishlist || false);
  }, [data]);
  return (
    <Card className="w-68 h-full" key={data?._id}>
      <div className=" w-full h-90 rounded-md overflow-hidden py-1">
        <div
          style={{ backgroundImage: `url(${data?.productIcon})` }}
          className="bg-gray-300 w-[95%] h-[60%] rounded-md mx-auto bg-cover bg-no-repeat"
        >
          <div className="flex justify-end p-2">
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
            <h3 className="text-lg font-semibold text-black line-clamp-1 w-[75%]">
              {data?.title}
            </h3>
            <p className="font-bold text-md text-black w-[25%] text-right">
              {convertMoneyRemoveDot(data?.discountPrice)}
            </p>
          </div>
          <p className="text-sm text-gray-400 px-2">
            {data?.productDescription?.length > 80
              ? `${data?.productDescription?.slice(0, 80)}...`
              : data?.productDescription}
          </p>
          <div className="flex justify-between items-center px-2 mt-5">
            <div className="bg-gray-100 items-center justify-center flex rounded-full py-2.5 px-5 hover:cursor-pointer">
              <p className="text-xs font-medium uppercase">More Detail</p>
            </div>
            <div className="flex justify-between items-center bg-black py-2.5 px-5 rounded-full hover:cursor-pointer">
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

export default ProductCard;
