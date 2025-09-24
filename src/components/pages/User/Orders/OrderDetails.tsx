import { useState } from "react";
import { convertMoneyRemoveDot } from "../../../../utils/CommonFunction";
import Rate from "../../../atoms/Rating";

type OrderProps = {
  rating: number;
};

const OrderDetails = () => {
  const [state, setState] = useState<OrderProps>({
    rating: 0,
  });
  const updateState = (key: Partial<OrderProps>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const statusDummy = [
    {
      _id: 1,
      title: "Order Confirmed",
      date: "2025-08-22T18:40:20",
      status: 1,
    },
    {
      _id: 2,
      title: "Shipped",
      date: "2025-08-23T18:40:20",
      status: 1,
    },
    {
      _id: 3,
      title: "Out for Delivery",
      date: "2025-08-24T18:40:20",
      status: 1,
    },
    {
      _id: 4,
      title: "Delivered",
      date: "2025-08-25T18:40:20",
      status: 2,
    },
  ];
  const renderDeliverStatus = () => {
    const length = statusDummy?.length;
    return (
      <>
        {statusDummy?.map(
          (
            item: {
              _id: number;
              title: string;
              date: string;
              status: number;
            },
            index: number
          ) => {
            const { title } = item;
            return (
              <div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#038b02] flex justify-center items-center">
                    <i className="ri-check-line text-white"></i>
                  </div>
                  <h3 className="text-sm font-medium ml-2">{title}</h3>
                </div>
                {length !== index + 1 && (
                  <div className="w-0.5 h-7 bg-[#038b02] ml-2 my-1" />
                )}
              </div>
            );
          }
        )}
      </>
    );
  };
  const renderLeft = () => {
    return (
      <div className="sm:w-[70%]">
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white">
          <div className="border-2 border-gray-100 py-5 px-4">
            <p>Order can be tracked by 7999548329</p>
            <p>Tracking link is shared via SMS</p>
          </div>
          <h3 className="font-semibold text-sm py-2 px-4 hover:cursor-pointer">
            Manage who can access this
          </h3>
        </div>
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white">
          <div className="border-2 border-gray-100 py-5 px-4">
            <h3 className="font-medium text-base">
              Adorbs Solid Men Turtle Neck Red, Black T-Shirt
            </h3>
            <p className="text-gray-400 text-sm text-black">L, Red,Black</p>
            <p className="text-gray-400 text-sm">Seller: Tresna</p>
            <h3 className="font-semibold text-base text-black">
              {convertMoneyRemoveDot(840)}
            </h3>
          </div>
          <div className="p-4 border-b-2 border-gray-100">
            {renderDeliverStatus()}
            <p className="text-sm text-gray-400 mt-6">
              Return Policy ended on 5th Sept 2025
            </p>
          </div>
          <div className="flex items-center justify-center py-3 hover:cursor-pointer">
            <i className="ri-message-3-line text-lg mr-3"></i>
            <p className="text-lg font-normal">Chat with Us</p>
          </div>
        </div>
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white">
          <div className="border-2 border-gray-100 py-5 px-4">
            <h3 className="font-medium text-base">Rate your experience</h3>
          </div>
          <div className="flex items-center py-5 px-4">
            <img
              src="https://rukminim1.flixcart.com/www/100/100/promos/13/12/2023/1d3aaaa2-ba29-4be1-8bf6-b61e3717f2af.png?q=80"
              className="w-6 h-6"
            />
            <p className="text-gray-400 text-sm ml-2">Rate this product</p>
          </div>
          <div className="flex items-center justify-center py-3 bg-gray-50 w-[98%] mx-auto mb-4 rounded-md">
            <Rate
              value={state?.rating}
              onChange={(val: number) => updateState({ rating: Number(val) })}
            />
          </div>
        </div>
      </div>
    );
  };
  const renderRight = () => {
    return (
      <div className="sm:w-[30%]">
        <div className="border-2 border-gray-100 rounded-md shadow-md bg-white">
          <div className=" py-5 px-4">
            <h3 className="text-sm font-semibold">Delivery Detail</h3>
            <p>Tracking link is shared via SMS</p>
          </div>
          <div className="bg-gray-100 rounded-2xl mb-2 py-4 px-3 w-[98%] mx-auto">
            <div className="flex gap-2 items-center border-b-1 border-black py-2">
              <i className="ri-home-line"></i>
              <p className="line-clamp-1 text-sm">
                2nd Floor Shivranjan Tower Pashan Baner Rd Pune MH 410075
              </p>
            </div>
            <div className="flex items-center pt-2">
              <i className="ri-user-3-fill text-gray-300 mr-2"></i>
              <p className="text-sm font-bold">
                Arpan Govila{" "}
                <span className="text-sm font-normal">7999548329</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-100 rounded-md shadow-md bg-white mt-4">
          <div className=" py-5 px-4">
            <h3 className="text-sm font-semibold">Price Details</h3>
          </div>
          <div className="bg-gray-100 rounded-2xl mb-2 py-4 px-3 w-[98%] mx-auto">
            <div className="border-b-1 border-dotted grid grid-cols-2 py-3">
              <div className="">
                <p>Listing Price</p>
                <p>Selling Price</p>
                <p>Extra Discount</p>
                <p>Special Price</p>
                <p>Total Fees</p>
              </div>
              <div className="text-right">
                <p className="line-through">{convertMoneyRemoveDot(1999)}</p>
                <p>{convertMoneyRemoveDot(999)}</p>
                <p className="text-green-500">{convertMoneyRemoveDot(185)}</p>
                <p>{convertMoneyRemoveDot(814)}</p>
                <p>{convertMoneyRemoveDot(3)}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 py-2">
              <p className="font-semibold text-base">Total amount</p>
              <p className="font-semibold text-base text-right">
                {convertMoneyRemoveDot(817)}
              </p>
            </div>
            <div className="border-1 border-gray-200 rounded-md grid grid-cols-2 py-2 px-3">
              <p className=" text-base">Paid by</p>
              <p className="text-right text-base">Credit Card</p>
            </div>
            <div className="bg-gray-50 flex items-center justify-center mt-2 py-3 hover:cursor-pointer">
              <i className="ri-download-2-line mr-2"></i>
              <p>Download Invoice</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-[98%] mx-auto flex flex-col sm:flex-row sm:gap-4 my-3">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};

export default OrderDetails;
