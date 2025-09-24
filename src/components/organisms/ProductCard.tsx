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
  const [quantity, setQuantity] = useState(0);
  const onIncreaseQuantity = () => {
    if (data?.quantityAvailable !== quantity) {
      if (quantity === 0) {
        setQuantity(Number(data?.minQuantity));
      } else {
        setQuantity(quantity + 1);
      }
    }
  };
  const onDecreaseQuantity = () => {
    //minQuantity, normal Quantity
    if (quantity <= 0) {
      setQuantity(0);
    } else if (quantity === data?.minQuantity) {
      setQuantity(quantity - data?.minQuantity);
    } else {
      setQuantity(quantity - 1);
    }
  };
  const handleWishlist = () => {
    setIsWish(!isWish);
  };
  useEffect(() => {
    setIsWish(data?.isWishlist || false);
  }, [data]);
  return (
    <Card className="w-68 h-full" key={data?._id}>
      {/* <div className="bg-white w-45 sm:w-full h-70 sm:h-100 rounded-lg overflow-hidden p-2">
        <div
          style={{ backgroundImage: `url(${data?.productIcon})` }}
          className="w-full h-45 sm:h-78 bg-cover bg-no-repeat rounded-lg flex flex-col justify-between pb-2"
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
          <div className="bg-white flex w-18 max-w-22 ml-2 rounded-md py-1 pl-1 items-center">
            <div className="flex border-r-1 mr-1">
              <i className="ri-star-fill text-sm text-green-500"></i>
              <p className="mr-1 text-sm">{data?.rating || 0}</p>
            </div>
            <p className="text-sm">({data?.reviews?.length || 0})</p>
          </div>
        </div>
        <div className="mt-1">
          <h3 className="text-sm font-semibold text-black line-clamp-2">
            {data?.title}
          </h3>
          {data?.quantityAvailable === 0 ? (
            <div className="flex justify-center mt-3 text-red-400 font-semibold">
              Out of Stock
            </div>
          ) : (
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <p className="font-bold text-md text-black">
                  {convertMoneyRemoveDot(data?.discountPrice)}
                </p>
                <p className="font-bold text-md line-through ml-1 text-gray-400">
                  {data?.price}
                </p>
              </div>
              <div className="flex items-center">
                <i
                  onClick={onDecreaseQuantity}
                  className="ri-indeterminate-circle-line text-2xl hover:cursor-pointer hover:text-red-300"
                ></i>
                <p className="font-bold text-xl mx-1">{quantity}</p>
                <i
                  onClick={onIncreaseQuantity}
                  className="ri-add-circle-line text-2xl hover:cursor-pointer hover:text-red-300"
                ></i>
              </div>
            </div>
          )}
        </div>
      </div> */}
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
            <div className="bg-gray-100 items-center justify-center flex rounded-full py-2.5 px-5">
              <p className="text-xs font-medium uppercase">More Detail</p>
            </div>
            <div className="flex justify-between items-center bg-black py-2.5 px-5 rounded-full">
              <i className="ri-shopping-cart-line text-xs font-medium text-white"></i>
              <p className="text-xs font-medium uppercase text-white">
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
