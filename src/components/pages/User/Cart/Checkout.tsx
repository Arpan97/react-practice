import { useEffect, useState } from "react";
import {
  convertMoneyRemoveDot,
  fetchDiscount,
} from "../../../../utils/CommonFunction";
import { cartData } from "../../../../utils/constantData";
import NewAddress from "../Address/NewAddress";

type AddressInterface = {
  _id: string;
  userInfo: {
    firstName: string;
    lastName: string;
    mobileNo: string;
  };
  addressType: string;
  pincode: string;
  state: string;
  address: string;
  landmark: string;
  city: string;
  alternatePhone: string;
  locality: string;
  isSelected: boolean;
};
type CartInterface = {
  isLoggedIn: boolean;
  isAddressModal: boolean;
  isAddressChangeClick: boolean;
  selectedAddress: AddressInterface;
  addressList: AddressInterface[];
  isOrderDetail: boolean;
};

const CheckOut = () => {
  const [state, setState] = useState<CartInterface>({
    isLoggedIn: false,
    isAddressModal: false,
    isAddressChangeClick: false,
    selectedAddress: {
      _id: "",
      userInfo: {
        firstName: "",
        lastName: "",
        mobileNo: "",
      },
      addressType: "",
      pincode: "",
      state: "",
      address: "",
      landmark: "",
      city: "",
      alternatePhone: "",
      locality: "",
      isSelected: false,
    },
    addressList: [],
    isOrderDetail: true,
  });
  const updateState = (key: Partial<CartInterface>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const addressData: AddressInterface[] = [
    {
      _id: "1",
      userInfo: {
        firstName: "Arpan",
        lastName: "Govila",
        mobileNo: "7999548329",
      },
      addressType: "Work",
      pincode: "474011",
      state: "Madhya Pradesh",
      address: "76 Jyoti Nagar Kumharpura Thatipur",
      landmark: "In front of Dwarikadeesh Temple",
      city: "Gwalior",
      alternatePhone: "9589666196",
      locality: "Gwalior",
      isSelected: true,
    },
    {
      _id: "2",
      userInfo: {
        firstName: "Aman",
        lastName: "Govila",
        mobileNo: "9354866725",
      },
      addressType: "Work",
      pincode: "474011",
      state: "Madhya Pradesh",
      address: "76 Jyoti Nagar Kumharpura Thatipur",
      landmark: "In front of Dwarikadeesh Temple",
      city: "Gwalior",
      alternatePhone: "9589666196",
      locality: "Gwalior",
      isSelected: false,
    },
  ];

  const handleAddress = (index: number) => {
    const newArr = state.addressList.map((item, i) => ({
      ...item,
      isSelected: i === index,
    }));

    updateState({
      addressList: newArr,
      selectedAddress: newArr[index],
    });
  };

  const handleDeliver = (item: AddressInterface) => {
    updateState({
      selectedAddress: item,
      isAddressChangeClick: false,
      isOrderDetail: true,
    });
  };

  const renderAddress = () => {
    const { isAddressChangeClick, addressList, selectedAddress } = state;
    if (isAddressChangeClick) {
      return (
        <div className="border-1 border-gray-200 rounded-md shadow-md mt-2 overflow-hidden">
          <div className="flex items-center bg-blue-500 py-5 px-4">
            <div className="bg-white px-2 text-blue-500">2</div>
            <p className="text-sm tracking-wider font-medium uppercase text-white ml-4">
              Delivery Address
            </p>
          </div>
          {addressList?.map((item: AddressInterface, index: number) => {
            const {
              userInfo,
              addressType,
              pincode,
              state,
              address,
              landmark,
              city,
              alternatePhone,
              locality,
              isSelected,
            } = item;
            return (
              <div className="mb-2" key={index}>
                <div className="py-2 px-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div
                        onClick={() => handleAddress(index)}
                        className={`border-1 rounded-full w-4 h-4 flex justify-center items-center hover:cursor-pointer ${
                          isSelected ? "border-blue-500" : ""
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center ml-2">
                        <h3 className="ml-2 text-sm font-medium mr-2">
                          {userInfo?.firstName} {userInfo?.lastName}
                        </h3>
                        <div className="bg-gray-100 flex justify-center items-center mr-2 px-3 py-1">
                          <p className="text-gray-400 text-xs uppercase">
                            {addressType}
                          </p>
                        </div>
                        <h3 className="ml-2 text-sm font-medium">
                          {userInfo?.mobileNo}
                        </h3>
                      </div>
                    </div>
                    {isSelected && (
                      <p className="font-medium text-blue-400 hover:cursor-pointer">
                        Edit
                      </p>
                    )}
                  </div>
                  <div className="ml-8 mt-2">
                    <p className="text-base">
                      {[
                        address,
                        landmark,
                        locality,
                        city,
                        state && `${state} - ${pincode}`,
                      ]
                        .filter(Boolean) // falsy values (null, undefined, "") hata dega
                        .join(", ")}
                    </p>
                    <p className="text-base">
                      Alternate Phone - {alternatePhone}
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <div
                    onClick={() => handleDeliver(item)}
                    className="my-2 mx-3 bg-orange-600 w-[18%] flex justify-center items-center py-2 rounded-sm ml-10 mb-3 hover:cursor-pointer"
                  >
                    <p className="text-white font-semibold uppercase">
                      Deliver here
                    </p>
                  </div>
                )}
                {addressList?.length !== index + 1 && (
                  <div className="border-b-1 border-gray-200 my-2" />
                )}
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="border-1 border-gray-200 rounded-md shadow-md bg-white w-[97%] sm:w-[100%] mx-auto mt-2">
          <div className="py-5 px-4 sm:flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="bg-gray-300 px-2">2</div>
                <p className="text-sm tracking-wider font-medium uppercase text-gray-400 ml-4">
                  Delivery Address
                </p>
              </div>
              <div className="text-sm font-normal text-gray-600 pl-10">
                <h3 className="w-[90%] sm:w-full font-semibold">
                  {selectedAddress?.userInfo?.firstName}{" "}
                  {selectedAddress?.userInfo?.lastName}
                  <span className="font-normal ml-2">
                    {[
                      selectedAddress?.address,
                      selectedAddress?.landmark,
                      selectedAddress?.locality,
                      selectedAddress?.city,
                      selectedAddress?.state &&
                        `${selectedAddress?.state} - ${selectedAddress?.pincode}`,
                    ]
                      .filter(Boolean) // falsy values (null, undefined, "") hata dega
                      .join(", ")}
                  </span>
                </h3>
              </div>
            </div>
            <div className="border-1 border-gray-200 rounded-sm flex items-center justify-center px-3 hover:cursor-pointer text-blue-500 hover:shadow w-[30%] sm:w-[10%] sm:py-0 py-2 sm:mt-0 mt-2">
              <p
                onClick={() => updateState({ isAddressChangeClick: true })}
                className="text-xs sm:text-sm uppercase"
              >
                Change
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  const renderOrderDetail = () => {
    return (
      <div className="border-1 border-gray-200 rounded-md shadow-md mt-2 overflow-hidden">
        <div className="flex items-center bg-blue-500 py-5 px-4">
          <div className="bg-white px-2 text-blue-500">3</div>
          <p className="text-sm tracking-wider font-medium uppercase text-white ml-4">
            Order Summary
          </p>
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
                  <div className="py-2 px-2 sm:w-[12%]">
                    <div className="aspect-auto rounded-md">
                      <img
                        src={item?.productIcon}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="flex items-center sm:flex-col lg:flex-row justify-center mt-2">
                      <i className="ri-indeterminate-circle-line text-2xl lg:text-lg md:text-md sm:text-sm hover:cursor-pointer hover:text-red-300"></i>
                      <div className="border-1 border-gray-200 rounded-xs px-3 mx-2">
                        <p className="text-sm">{item?.icCartQty || 1}</p>
                      </div>
                      <i className="ri-add-circle-line text-2xl lg:text-lg md:text-md sm:text-sm hover:cursor-pointer hover:text-red-300"></i>
                    </div>
                  </div>
                  <div className="w-[70%] pl-4 pt-3 ">
                    <div>
                      <p className="sm:text-sm md:text-md lg:text-base font-medium">
                        {item?.title}
                      </p>
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
        <div className="border-1 border-gray-200 rounded-md shadow-md bg-white w-[97%] sm:w-[100%] mx-auto">
          <div className="py-5 px-4 sm:flex justify-between">
            <div>
              <div className="flex items-center">
                <div className="bg-gray-300 px-2">1</div>
                <p className="text-sm uppercase tracking-wider font-medium text-gray-400 ml-4">
                  Login
                </p>
              </div>
              <div className="text-sm font-normal text-gray-600 pl-10">
                <h3 className="w-[90%] sm:w-full font-semibold">
                  Arpan Govila
                  <span className="font-normal ml-2">+91-7999548329</span>
                </h3>
              </div>
            </div>
            <div className="border-1 border-gray-200 rounded-sm flex items-center justify-center px-3 hover:cursor-pointer text-blue-500 hover:shadow w-[30%] sm:w-[10%] sm:py-0 py-2 sm:mt-0 mt-2">
              <p className="text-xs sm:text-sm uppercase">Change</p>
            </div>
          </div>
        </div>
        {renderAddress()}
        <div className="border-b-1 border-gray-200 rounded-md shadow-md bg-white mt-3">
          <div className="py-5 px-4 sm:flex justify-between">
            <NewAddress />
          </div>
        </div>
        {renderOrderDetail()}
      </div>
    );
  };
  const renderRight = () => {
    return (
      <div className="sm:w-[30%]">
        <div className="border-2 border-gray-100 rounded-md shadow-md bg-white mt-4">
          <div className=" pt-5 px-4">
            <h3 className="text-lg font-semibold uppercase text-gray-400">
              Price Details
            </h3>
          </div>
          <div className="w-full border-t-1 border-t-gray-200 mt-2" />
          <div className="mb-2 py-4 px-3 w-[98%] mx-auto">
            <div className="border-b-1 border-dotted grid grid-cols-2 py-3">
              <div className="">
                <p className="mb-2">Price (2 Items)</p>
                <p className="mb-2">Platform Fees</p>
              </div>
              <div className="text-right">
                <p className="mb-2">{convertMoneyRemoveDot(1999)}</p>
                <p className="mb-2">{convertMoneyRemoveDot(7)}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 py-4">
              <p className="font-semibold text-base">Total Payable</p>
              <p className="font-semibold text-base text-right">
                {convertMoneyRemoveDot(2006)}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-orange-600 text-white py-3 text-center mt-6 rounded-sm shadow-md hover:cursor-pointer">
          <p>Proceed to Pay</p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (addressData.length > 0) {
      const updatedList = addressData.map((item, index) => ({
        ...item,
        isSelected: index === 0,
      }));

      updateState({
        addressList: updatedList,
        selectedAddress: updatedList[0],
      });
    } else {
      updateState({
        addressList: [],
        selectedAddress: {},
      });
    }
  }, []);
  return (
    <div className="w-[98%] mx-auto flex flex-col sm:flex-row sm:gap-4 my-3">
      {renderLeft()}
      {renderRight()}
    </div>
  );
};

export default CheckOut;
