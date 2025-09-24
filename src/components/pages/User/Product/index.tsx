import { useEffect, useState } from "react";
import { convertMoneyRemoveDot } from "../../../../utils/CommonFunction";
import moment from "moment";
import { useCountdownFormat } from "../../../../hooks";
import Button from "../../../atoms/Button";
import Tooltip from "../../../molecules/ToolTip";
import { productInfo } from "../../../../utils/constantData";

type StateType = {
  selectedImageIdx: number;
  isDealOfferOpen: boolean;
  pinCode: string;
  isPinCodeValid: boolean;
  pinCodeMsg: string | null;
  isDescReadMore: boolean;
  isShowMore: boolean;
  selectedSize: string;
  productImages: string[];
  isWish: boolean;
};

const Product = () => {
  const timer = useCountdownFormat(3600);
  const [state, setState] = useState<StateType>({
    selectedImageIdx: 0,
    isDealOfferOpen: false,
    pinCode: "",
    isPinCodeValid: false,
    pinCodeMsg: null,
    isDescReadMore: false,
    isShowMore: true,
    selectedSize: "",
    productImages: [],
    isWish: false,
  });
  const updateState = (key: Partial<StateType>) => {
    setState((prev) => ({ ...prev, ...key }));
  };

  const handlePinCode = () => {
    if (state?.isPinCodeValid) {
      updateState({ pinCode: "", isPinCodeValid: false });
    } else {
      if (state?.pinCode?.length < 5) {
        updateState({ isPinCodeValid: false });
        return;
      } else {
        const findPincode = productInfo?.deliveryDetails?.find(
          (itm) => itm?.pincode === state?.pinCode
        );
        if (findPincode) {
          updateState({
            pinCodeMsg: `Delivery by ${
              new Date().getDate() + findPincode.estimateDeliveryInDays
            } ${moment().format("MMM")}, ${moment()
              .add(findPincode?.estimateDeliveryInDays, "days")
              .format("ddd")}`,
            isPinCodeValid: true,
          });
        } else {
          updateState({
            pinCodeMsg: "Not Delivered to this address yet",
            isPinCodeValid: true,
          });
        }
      }
    }
  };

  const validation = () => {
    return state?.pinCode === "" || state?.pinCode?.length < 5;
  };
  const handleWishlist = () => {};

  const renderProductDetail = () => {
    return (
      <>
        <div className="flex justify-between items-center">
          <p className="font-medium">
            {productInfo?.productSpecification?.brand}
          </p>
          <div className="flex justify-center items-center">
            <div className="flex justify-end p-2">
              <Tooltip text="Wishlist">
                <div
                  onClick={handleWishlist}
                  className="bg-white w-8 h-8 rounded-full justify-center items-center flex shadow-lg"
                >
                  {state?.isWish ? (
                    <i className="ri-heart-3-fill text-red-600 hover:cursor-pointer"></i>
                  ) : (
                    <i className="ri-heart-3-line text-xl hover:cursor-pointer"></i>
                  )}
                </div>
              </Tooltip>
            </div>
            <Tooltip text="Share">
              <div className="bg-white w-8 h-8 rounded-full justify-center items-center flex shadow-lg mr-2">
                <i className="ri-share-forward-line text-xl hover:cursor-pointer"></i>
              </div>
            </Tooltip>
          </div>
        </div>
        <h1 className="font-bold text-lg tracking-wide line-clamp-2">
          {productInfo?.title}
        </h1>
        <div className="flex my-2">
          <i className="ri-arrow-down-line font-bold text-2xl text-green-700"></i>
          <h3 className="font-bold text-2xl text-green-700">15%</h3>
          <p className="text-2xl text-gray-300 mx-2 line-through">1299</p>
          <h1 className="text-2xl font-extrabold">
            {convertMoneyRemoveDot(1099)}
          </h1>
        </div>
      </>
    );
  };

  const renderColorSection = () => {
    return (
      <div className="flex gap-3 my-3">
        {productInfo?.availableColors?.map(
          (itm: { _id: string; color: string; images: any }) => {
            const { _id, color, images } = itm;
            return (
              <div
                key={_id}
                onClick={() => {
                  updateState({ productImages: images });
                }}
                className="flex flex-col items-center hover:cursor-pointer hover:scale-100 scale-95"
              >
                <img
                  src={images[0]}
                  className="w-20 h-20 rounded-md overflow-hidden"
                />
                <p>{color}</p>
              </div>
            );
          }
        )}
      </div>
    );
  };
  const renderDealOffer = () => {
    return (
      <div className="mr-2 hover:cursor-pointer">
        <div
          onClick={() =>
            updateState({ isDealOfferOpen: !state?.isDealOfferOpen })
          }
          className="bg-blue-500 rounded-tl-xl rounded-tr-xl flex justify-between items-center py-3 px-2"
        >
          <div className="flex justify-center items-center">
            <img
              src="https://img.freepik.com/premium-vector/good-deal-sound-comic-book-text-effects-template-comics-speech-bubble-halftone-pop-art-style_182541-593.jpg?semt=ais_hybrid&w=740&q=80"
              alt="wow_deal"
              className="mr-2 w-10 h-10"
            />
            {state?.isDealOfferOpen ? (
              <p className="font-bold text-white text-sm">
                Apply offers for maximum earnings
              </p>
            ) : (
              <h1 className="text-white font-bold text-2xl">
                Buy at{" "}
                {convertMoneyRemoveDot(
                  productInfo?.discountPrice -
                    Math.round((productInfo?.discountPrice * 5) / 100)
                )}
              </h1>
            )}
          </div>
          {state?.isDealOfferOpen ? (
            <i className="ri-arrow-up-s-line text-white font-extrabold text-2xl"></i>
          ) : (
            <i className="ri-arrow-down-s-line text-white font-extrabold text-2xl"></i>
          )}
        </div>
        <div className="bg-sky-100 px-2 py-3 rounded-bl-xl rounded-br-xl">
          {state?.isDealOfferOpen ? (
            <>
              <h1 className="font-bold text-xl">
                Buy at{" "}
                {convertMoneyRemoveDot(
                  productInfo?.discountPrice -
                    Math.round((productInfo?.discountPrice * 5) / 100)
                )}
              </h1>
              <div className="bg-white rounded-xl p-2 mt-2">
                <p className="font-bold text-gray-300">Bank offers</p>
                <div className="bg-yellow-500 text-black font-semibold w-38 text-center my-1 text-sm">
                  Best value for you
                </div>
                <div className="flex items-center">
                  <div>💳</div>
                  <div className="ml-2 w-40">
                    <h1 className="font-bold text-lg">
                      {convertMoneyRemoveDot(
                        Math.round((productInfo?.discountPrice * 5) / 100)
                      )}
                    </h1>
                    <p className="text-sm">Flipkart Axis bank Credit Card</p>
                  </div>
                  <div className="text-blue-300 text-lg font-bold hover:cursor-pointer">
                    Apply
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="font-bold text-black text-sm">
              Apply offers for maximum earnings
            </p>
          )}
        </div>
      </div>
    );
  };
  const renderDeliverySection = () => {
    return (
      <div className="mr-2 sm:shadow-md sm:rounded-md sm:w-[99%] sm:overflow-hidden sm:my-2">
        <div className="sm:w-full sm:bg-sky-100 sm:px-2 sm:py-3">
          <h1 className="my-2 font-extrabold text-lg dark:text-black">
            Delivery Details
          </h1>
        </div>
        <div className="bg-blue-100 sm:bg-transparent py-3 px-3 flex rounded-md my-2 items-center">
          <i className="ri-map-pin-line font-bold text-lg mr-3"></i>
          <input
            placeholder="PinCode"
            className="border-b-1 pl-2 mr-2 py-2"
            value={state?.pinCode}
            onChange={(e: any) => updateState({ pinCode: e.target.value })}
          />
          <div
            onClick={validation() ? undefined : handlePinCode}
            className={`text-lg font-bold ${
              validation()
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer hover:text-blue-300"
            }`}
          >
            {state?.isPinCodeValid ? "Change" : "Check"}
          </div>
        </div>
        {state?.isPinCodeValid && (
          <div className="bg-gray-100 sm:bg-transparent py-3 px-3 flex flex-col sm:flex-row sm:items-center rounded-md my-2">
            <h3 className="font-extrabold text-xl">{state?.pinCodeMsg}</h3>
            <p className="text-red-400 font-medium text-sm sm:ml-3">
              {`Order in ${timer}`}
            </p>
          </div>
        )}
      </div>
    );
  };
  const renderProductDesc = () => {
    return (
      <div className="sm:shadow-md sm:rounded-md sm:w-[99%] sm:overflow-hidden">
        <div className="sm:w-full sm:bg-sky-100 sm:px-2 sm:py-3">
          <h2 className="text-lg font-bold dark:text-black">
            Product Description
          </h2>
        </div>
        {state?.isDescReadMore ? (
          <div className="sm:py-3 sm:px-2">
            <p className="font-light text-sm">
              {productInfo?.productDescription}
            </p>
            <div
              onClick={() => updateState({ isDescReadMore: false })}
              className="font-light text-sm text-blue-300 underline hover:cursor-pointer"
            >
              Show Less...
            </div>
          </div>
        ) : (
          <div className="sm:py-3 sm:px-2">
            <p className="font-light text-sm">
              {productInfo?.productDescription?.slice(0, 400)}
            </p>
            <div
              onClick={() => updateState({ isDescReadMore: true })}
              className="font-light text-sm text-blue-300 underline hover:cursor-pointer"
            >
              Show More...
            </div>
          </div>
        )}
      </div>
    );
  };
  const renderProductSize = () => {
    return (
      <>
        {productInfo?.productSpecification?.availableSizes?.length > 0 && (
          <div className="my-3">
            <h2 className="text-lg font-bold">Available Sizes</h2>
            <div className="flex">
              {productInfo?.productSpecification?.availableSizes?.map(
                (item: string) => {
                  return (
                    <div className="border-1 px-4 py-2 mr-3 hover:cursor-pointer hover:bg-blue-300 hover:border-blue-300 rounded-sm scale-90 hover:scale-100">
                      <p>{item}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}
      </>
    );
  };
  const renderProductService = () => {
    return (
      <>
        {productInfo?.productSpecification?.availableServices?.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {productInfo?.productSpecification?.availableServices?.map(
              (itm: { _id: number; title: string; icon: string }) => {
                return (
                  <div
                    className="items-start flex flex-col justify-start"
                    key={itm?._id}
                  >
                    <img src={itm?.icon} className="h-12 w-12" />
                    <p className="text-sm">{itm?.title}</p>
                  </div>
                );
              }
            )}
          </div>
        )}
      </>
    );
  };
  const renderBuyButtons = () => {
    return (
      <div className="grid grid-cols-2 sm:gap-20 w-[95%] sm:w-[99%] my-3">
        <Button
          label="Add to Cart"
          className="bg-orange-400 text-white text-xl hover:cursor-pointer scale-95 hover:scale-100 rounded-sm"
        />
        <Button
          label="Buy Now"
          className="bg-orange-600 text-white text-xl hover:cursor-pointer scale-95 hover:scale-100 rounded-sm"
        />
      </div>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const val = (state?.selectedImageIdx + 1) % state?.productImages?.length;
      updateState({
        selectedImageIdx: val,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [state?.selectedImageIdx, state?.productImages.length]);

  useEffect(() => {
    if (productInfo?.productImages) {
      updateState({ productImages: productInfo?.productImages });
    }
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            state?.productImages[state?.selectedImageIdx]
          })`,
        }}
        className="min-h-screen bg-no-repeat bg-contain sm:flex"
      >
        <div className="flex flex-col sm:flex-row py-5 sm:py-0 sm:w-[50%]">
          <div className="w-80 self-center h-65 rounded-lg overflow-hidden sm:w-[83%]"></div>
          <div className="flex gap-2 mt-3 justify-center items-center sm:hidden">
            {productInfo?.productImages?.map((_, index: number) => {
              return (
                <div
                  className={`${
                    state?.selectedImageIdx === index
                      ? "bg-blue-300"
                      : "bg-gray-200"
                  } w-2 h-2 rounded-full flex`}
                >
                  <div />
                </div>
              );
            })}
          </div>
          <div className="bg-white hidden sm:block sm:w-[17%] h-full mt-0 px-2">
            {state?.productImages?.map((item, index: number) => {
              return (
                <div
                  onClick={() => updateState({ selectedImageIdx: index })}
                  className={`${
                    state?.selectedImageIdx === index ? "border-1" : "border-0"
                  } w-full h-30 mb-3 mt-1 rounded-md overflow-hidden hover:cursor-pointer hover:scale-110 scale-100`}
                >
                  <img
                    src={item}
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-tl-4xl rounded-tr-4xl sm:rounded-tl-none sm:rounded-tr-none shadow-[0_-4px_10px_rgba(0,0,0,0.2)] sm:shadow-none overflow-hidden sm:w-[50%] ">
          <div className="mt-8">
            <div className="pl-2">
              {renderProductDetail()}
              {renderColorSection()}
              {renderDealOffer()}
              {renderDeliverySection()}
              {renderProductDesc()}
              {renderProductSize()}
              {renderProductService()}
              {renderBuyButtons()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
