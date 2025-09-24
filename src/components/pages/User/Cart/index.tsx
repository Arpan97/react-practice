import { useState } from "react";
import {
  convertMoneyRemoveDot,
  fetchDiscount,
} from "../../../../utils/CommonFunction";
import { cartData, saveLaterData } from "../../../../utils/constantData";
import { useNavigate } from "react-router-dom";

type CartInterface = {
  isAddressModal: boolean;
  selectedAddress: object;
};

const MyCart = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<CartInterface>({
    isAddressModal: false,
    selectedAddress: {},
  });
  const updateState = (key: Partial<CartInterface>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const renderLaterSection = () => {
    return (
      <div className="mt-4">
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white mt-4 overflow-hidden">
          <h3 className="font-semibold text-base sm:text-xl uppercase tracking-wider border-b-1 border-b-gray-200 py-2 px-3 mb-2">
            Save for Later (35)
          </h3>
          {saveLaterData?.map((item: any, index: number) => {
            const findPinCode = item?.deliveryDetails?.find(
              (itm: {
                _id: number;
                pincode: string;
                estimateDeliveryInDays: number;
              }) => itm?.pincode === "474011"
            );
            return (
              <>
                <div className="flex ">
                  <div className="py-2 px-2 sm:w-[12%] ">
                    <div className="w-30 h-35 rounded-md">
                      <img
                        src={item?.productIcon}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      <i className="ri-indeterminate-circle-line text-2xl hover:cursor-pointer hover:text-red-300"></i>
                      <div className="border-1 border-gray-200 rounded-xs px-3 mx-2">
                        <p>{item?.icCartQty || 1}</p>
                      </div>
                      <i className="ri-add-circle-line text-2xl hover:cursor-pointer hover:text-red-300"></i>
                    </div>
                  </div>
                  <div className="w-[70%] pl-4 pt-3 ">
                    <div>
                      <p className="text-base font-medium">{item?.title}</p>
                    </div>
                    <div className="flex items-center">
                      {item?.selectedSize ? (
                        <p className="text-sm text-gray-400">
                          Size: {item?.selectedSize}
                        </p>
                      ) : null}
                      {item?.selectedColor ? (
                        <p className="ml-2 text-sm text-gray-400">
                          Size: {item?.selectedColor}
                        </p>
                      ) : null}
                    </div>
                    <div className="my-2">
                      <p className="text-sm text-gray-400">
                        Seller: {item?.brand}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm line-through">{item?.price}</p>
                      <h3 className="text-xl font-bold ml-2">
                        {convertMoneyRemoveDot(item?.discountPrice)}
                      </h3>
                      <h3 className="text-base font-bold text-green-600 ml-2">
                        {fetchDiscount(item?.price, item?.discountPrice)}%
                      </h3>
                    </div>
                    <div className="flex items-center mt-5">
                      <p className="font-semibold text-base hover:cursor-pointer hover:text-blue-500 uppercase">
                        Move to Cart
                      </p>
                      <p className="font-semibold text-base ml-4 hover:cursor-pointer hover:text-blue-500 uppercase">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-[18%] pt-3 hidden sm:block">
                    <p>
                      Delivery in {findPinCode?.estimateDeliveryInDays} Days
                    </p>
                  </div>
                </div>
                {cartData?.length !== index + 1 ? (
                  <div className="border-b-1 my-2 border-gray-200" />
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    );
  };
  const renderLeft = () => {
    return (
      <div className="sm:w-[70%] sm:mt-4">
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white">
          <div className="py-5 px-4 sm:flex justify-between">
            <div className="">
              <div className="flex">
                <p className="text-sm font-normal">Deliver to:</p>
                <p className="text-sm font-semibold ml-2">
                  Arpan Govila, 474011
                </p>
                <div className="bg-gray-200 px-2 ml-2 rounded-xs flex items-center justify-center">
                  <p className="text-xs text-gray-400 uppercase">Home</p>
                </div>
              </div>
              <div className="text-sm font-normal text-gray-600">
                <p className="w-[90%] sm:w-full">
                  76, Jyoti Nagar Kumharpura Thatipur InFront of Dwarikadish
                  Temple
                </p>
              </div>
            </div>
            <div className="border-1 border-gray-200 rounded-sm flex items-center justify-center px-3 hover:cursor-pointer text-blue-500 hover:shadow w-[30%] sm:w-[10%] sm:py-0 py-2 sm:mt-0 mt-2">
              <p className="text-xs sm:text-sm">Change</p>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white mt-4 overflow-hidden">
          {cartData?.map((item: any, index: number) => {
            const findPinCode = item?.deliveryDetails?.find(
              (itm: {
                _id: number;
                pincode: string;
                estimateDeliveryInDays: number;
              }) => itm?.pincode === "474011"
            );
            return (
              <>
                <div className="flex ">
                  <div className="py-2 px-2 sm:w-[12%] ">
                    <div className="w-30 h-35 rounded-md">
                      <img
                        src={item?.productIcon}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      <i className="ri-indeterminate-circle-line text-2xl hover:cursor-pointer hover:text-red-300"></i>
                      <div className="border-1 border-gray-200 rounded-xs px-3 mx-2">
                        <p>{item?.icCartQty || 1}</p>
                      </div>
                      <i className="ri-add-circle-line text-2xl hover:cursor-pointer hover:text-red-300"></i>
                    </div>
                  </div>
                  <div className="w-[70%] pl-4 pt-3 ">
                    <div>
                      <p className="text-base font-medium">{item?.title}</p>
                    </div>
                    <div className="flex items-center">
                      {item?.selectedSize ? (
                        <p className="text-sm text-gray-400">
                          Size: {item?.selectedSize}
                        </p>
                      ) : null}
                      {item?.selectedColor ? (
                        <p className="ml-2 text-sm text-gray-400">
                          Size: {item?.selectedColor}
                        </p>
                      ) : null}
                    </div>
                    <div className="my-2">
                      <p className="text-sm text-gray-400">
                        Seller: {item?.brand}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-sm line-through">{item?.price}</p>
                      <h3 className="text-xl font-bold ml-2">
                        {convertMoneyRemoveDot(item?.discountPrice)}
                      </h3>
                      <h3 className="text-base font-bold text-green-600 ml-2">
                        {fetchDiscount(item?.price, item?.discountPrice)}%
                      </h3>
                    </div>
                    <div className="flex items-center mt-5">
                      <p className="font-semibold text-base hover:cursor-pointer hover:text-blue-500 uppercase">
                        Save for Later
                      </p>
                      <p className="font-semibold text-base ml-4 hover:cursor-pointer hover:text-blue-500 uppercase">
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="w-[18%] pt-3 hidden sm:block">
                    <p>
                      Delivery in {findPinCode?.estimateDeliveryInDays} Days
                    </p>
                  </div>
                </div>
                {cartData?.length !== index + 1 ? (
                  <div className="border-b-1 my-2 border-gray-200" />
                ) : null}
              </>
            );
          })}
        </div>
        <div className="hidden sm:block">{renderLaterSection()}</div>
      </div>
    );
  };
  const renderRight = () => {
    return (
      <div className="sm:w-[30%]">
        <div className="border-2 border-gray-100 rounded-md shadow-md bg-white mt-4">
          <div className=" pt-5 px-4">
            <h3 className="text-sm font-semibold">Price Details</h3>
          </div>
          <div className="mb-2 py-4 px-3 w-[98%] mx-auto">
            <div className="border-b-1 border-dotted grid grid-cols-2 py-3">
              <div className="">
                <p>Price (2 Items)</p>
                <p>Discount</p>
                <p>Coupons for you</p>
              </div>
              <div className="text-right">
                <p className="line-through">{convertMoneyRemoveDot(1999)}</p>
                <p className="text-green-500">{convertMoneyRemoveDot(185)}</p>
                <p className="text-green-500">{convertMoneyRemoveDot(15)}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 py-4">
              <p className="font-semibold text-base">Total amount</p>
              <p className="font-semibold text-base text-right">
                {convertMoneyRemoveDot(817)}
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate("/checkout")}
          className="bg-orange-600 text-white py-3 text-center mt-6 rounded-sm shadow-md hover:cursor-pointer"
        >
          <p>Place Order</p>
        </div>
      </div>
    );
  };
  return (
    <div className="w-[98%] mx-auto flex flex-col sm:flex-row sm:gap-4 my-3">
      {renderLeft()}
      {renderRight()}
      <div className="sm:hidden">{renderLaterSection()}</div>
    </div>
  );
};

export default MyCart;
