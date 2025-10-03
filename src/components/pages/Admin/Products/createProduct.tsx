import React, { useState } from "react";
import FormRow from "../../../molecules/Admin/FormRow";
import AdminButton from "../../../atoms/AdminButton";
import TextEditor from "../../../organisms/Admin/TextEditor";

interface DeliveryProps {
  pincode: string;
  estimateDeliveryInDays: number;
}
interface ColorProps {
  color: string;
  images: string[];
}

const defaultDelivery = [
  {
    pincode: "",
    estimateDeliveryInDays: 0,
  },
];

const defaultColor = [
  {
    color: "",
    images: [],
  },
];
const defaultPrice = [
  {
    price: "",
    discPrice: "",
    priceType: "", //INR (RUPEES), DOLLAR (USA)
    deliveryCharge: "",
  },
];
const defaultService = [
  {
    icon: "",
    title: "",
  },
];

const priceArr = [
  { _id: "inr", name: "Rupees", val: "₹" },
  { _id: "usd", name: "US Dollar", val: "$" },
  { _id: "eur", name: "Euro", val: "€" },
  { _id: "gbp", name: "Pound Sterling", val: "£" },
  { _id: "jpy", name: "Japanese Yen", val: "¥" },
  { _id: "cny", name: "Chinese Yuan", val: "¥" },
  { _id: "aed", name: "UAE Dirham", val: "د.إ" },
];
const priceSize = ["S", "M", "L", "XS", "XXS"];

interface ServiceProps {
  icon: string;
  title: string;
}

interface PriceProps {
  price: string;
  discPrice: string;
  priceType: string;
  deliveryCharge: string;
}
interface ProductProps {
  title: string;
  quantityAvailable: number;
  banner: string;
  productImages: string[];
  minQuantity: number;
  maxQuantity: number;
  availableDelivery: DeliveryProps[];
  availableColor: ColorProps[];
  category: {
    _id: string;
    name: string;
  };
  subCategory: {
    _id: string;
    name: string;
  };
  productSpecification: {
    availableSize: string[];
    availableService: ServiceProps[];
    price: PriceProps[];
    brand: string;
    specification: string;
  };
}

const CreateProduct: React.FC = () => {
  const [isSizeAvailable, setIsSizeAvailable] = useState(false);
  const [state, setState] = useState<ProductProps>({
    title: "",
    quantityAvailable: 0,
    banner: "",
    productImages: [],
    minQuantity: 0,
    maxQuantity: 0,
    availableDelivery: defaultDelivery,
    availableColor: defaultColor,
    category: {
      _id: "",
      name: "",
    },
    subCategory: {
      _id: "",
      name: "",
    },
    productSpecification: {
      availableSize: [],
      availableService: defaultService,
      price: defaultPrice,
      brand: "",
      specification: "",
    },
  });
  const updateState = (key: Partial<ProductProps>) => {
    setState((prev) => ({
      ...prev,
      ...key,
    }));
  };
  const onAddMoreAvailable = () =>
    updateState({
      availableDelivery: [...state.availableDelivery, defaultDelivery[0]],
    });
  const onRemoveAvailable = (index: number) => {
    const newArr = [...state.availableDelivery];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    updateState({ availableDelivery: newArr });
  };
  const onAddMoreColor = () => {
    updateState({
      availableColor: [...state.availableColor, defaultColor[0]],
    });
  };
  const onRemoveColor = (index: number) => {
    const newArr = [...state.availableColor];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    updateState({ availableColor: newArr });
  };
  const onAddMorePrice = () => {
    updateState({
      productSpecification: {
        ...state.productSpecification,
        price: [...state.productSpecification.price, defaultPrice[0]],
      },
    });
  };
  const onChangePrice = (key: string, index: number, val: string) => {
    const newArr = JSON.parse(JSON.stringify(state.productSpecification.price));
    newArr[index][key] = val;
    updateState({
      productSpecification: { ...state.productSpecification, price: newArr },
    });
  };
  const onRemovePrice = (index: number) => {
    const newArr = [...state.productSpecification.price];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    updateState({
      productSpecification: { ...state.productSpecification, price: newArr },
    });
  };
  const onChangeDeliverySection = (
    key: string,
    index: number,
    value: string
  ) => {
    const newArr = JSON.parse(JSON.stringify(state.availableDelivery));
    newArr[index][key] = value;
    updateState({ availableDelivery: newArr });
  };
  const onAddMoreService = () => {
    updateState({
      productSpecification: {
        ...state.productSpecification,
        availableService: [
          ...state.productSpecification.availableService,
          defaultService[0],
        ],
      },
    });
  };
  const onRemoveService = (index: number) => {
    const newArr = [...state.productSpecification.availableService];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    updateState({
      productSpecification: {
        ...state.productSpecification,
        availableService: newArr,
      },
    });
  };
  const onChangeService = (key: string, index: number, val: string) => {
    const newArr = JSON.parse(
      JSON.stringify(state.productSpecification.availableService)
    );
    newArr[index][key] = val;
    updateState({
      productSpecification: {
        ...state.productSpecification,
        availableService: newArr,
      },
    });
  };
  const onChangeColor = (key: string, index: number, value: string) => {
    const newArr = JSON.parse(JSON.stringify(state.availableColor));
    newArr[index][key] = value;
    updateState({ availableColor: newArr });
  };
  const renderProductBasic = () => {
    const {
      title,
      category,
      subCategory,
      quantityAvailable,
      minQuantity,
      maxQuantity,
      productImages,
    } = state;
    return (
      <div className="border border-gray-200 shadow-lg rounded overflow-hidden w-full">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Product Detail
        </h1>
        <div className="px-2 py-3">
          <FormRow
            placeholder="Enter Title"
            label="Title"
            isInput
            value={title}
            onChange={(val) => updateState({ title: val as string })}
            inputClass="lg:w-[100%]"
          />
          <FormRow
            placeholder="Select Category"
            isDropdown
            label="Category Name"
            options={[
              { _id: "64892ajfiajei20930", name: "Clothing" },
              { _id: "28kfjj2309fjujfwij", name: "Mobile & Tablet" },
            ]}
            value={category.name}
            onChange={(val) => {
              updateState({ category: val });
            }}
            inputClass="lg:w-[100%]"
          />
          <FormRow
            placeholder="Select Sub Category"
            isDropdown
            label="Sub Category Name"
            options={[
              { _id: "64892ajfiajei20930lsd", name: "Mens" },
              { _id: "28kfjj2309fjujfwij23", name: "Women" },
            ]}
            value={subCategory.name}
            onChange={(val) => {
              updateState({ subCategory: val });
            }}
            inputClass="lg:w-[100%]"
          />
          <FormRow
            placeholder="Enter Available Quantity"
            label="Available Quantity"
            isInput
            value={quantityAvailable}
            onChange={(val) =>
              updateState({ quantityAvailable: val as number })
            }
            inputClass="lg:w-[100%]"
          />
          <FormRow
            placeholder="Enter Minimum Quantity"
            label="Minimum Quantity"
            isInput
            value={minQuantity}
            onChange={(val) => updateState({ minQuantity: val as number })}
            inputClass="lg:w-[100%]"
          />
          <FormRow
            placeholder="Enter Maximum Quantity"
            label="Maximum Quantity"
            isInput
            value={maxQuantity}
            onChange={(val) => updateState({ maxQuantity: val as number })}
            inputClass="lg:w-[100%]"
          />
          <FormRow
            label="Product Image"
            isMultiple
            value={productImages}
            onChange={(val) => updateState({ productImages: val })}
          />
        </div>
      </div>
    );
  };
  const renderAvailable = () => {
    const { availableDelivery, availableColor } = state;

    return (
      <div className="border border-gray-200 shadow-lg rounded overflow-hidden w-full">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Product Availability
        </h1>

        <div className="">
          <>
            {availableDelivery?.map((avail, index) => {
              return (
                <div className="flex items-center w-full gap-3 relative px-4 py-2">
                  {availableDelivery?.length > 1 && (
                    <div
                      onClick={() => onRemoveAvailable(index)}
                      className="absolute right-4 top-3"
                    >
                      <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                    </div>
                  )}
                  <FormRow
                    label="Pincode"
                    value={avail.pincode}
                    onChange={(val) =>
                      onChangeDeliverySection("pincode", index, val as string)
                    }
                    inputClass="lg:w-[80%]"
                    isInput
                  />
                  <FormRow
                    label="Estimate Days"
                    value={avail.estimateDeliveryInDays}
                    onChange={(val) =>
                      onChangeDeliverySection(
                        "estimateDeliveryInDays",
                        index,
                        val as string
                      )
                    }
                    isInput
                    inputClass="lg:w-[80%]"
                  />
                </div>
              );
            })}
            <div className="w-full flex justify-end items-center mt-2">
              <AdminButton
                label="Add More"
                onBtnClick={onAddMoreAvailable}
                className="w-30 -mt-6"
              />
            </div>
          </>
          <>
            <div className="mt-3">
              <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
                Available Colors
              </h1>
            </div>
            {availableColor?.map((avail, index) => {
              return (
                <div className="flex items-center w-full gap-3 relative px-4 py-2">
                  {availableColor?.length > 1 && (
                    <div
                      onClick={() => onRemoveColor(index)}
                      className="absolute right-4 top-3"
                    >
                      <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                    </div>
                  )}
                  <div className="flex items-center">
                    <label className="text-gray-700 font-medium text-sm md:text-base">
                      Color
                    </label>
                    <input
                      type="color"
                      value={avail.color}
                      onChange={(val) =>
                        onChangeColor("color", index, val.target.value)
                      }
                      className="w-25 h-10 rounded-sm ml-3"
                    />
                  </div>
                  <FormRow
                    label="Images"
                    value={avail.images}
                    onChange={(val) =>
                      onChangeColor("images", index, val as string)
                    }
                    isMultiple
                    inputClass="lg:w-[80%]"
                  />
                </div>
              );
            })}
            <div className="w-full flex justify-end items-center mt-2">
              <AdminButton
                label="Add More"
                onBtnClick={onAddMoreColor}
                className="w-30 -mt-6"
              />
            </div>
          </>
        </div>
      </div>
    );
  };
  const renderSpecificationPriceBrand = () => {
    const { productSpecification } = state;
    const { price, brand } = productSpecification;
    return (
      <div className="border border-gray-200 shadow-lg rounded overflow-hidden w-full">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">Brand</h1>
        <div className="py-2 px-3">
          <FormRow
            placeholder="Select Brand"
            isDropdown
            label="Brand Name"
            options={[
              { _id: "64892ajfiajei20930", name: "Apple" },
              { _id: "28kfjj2309fjujfwij", name: "Samsung" },
            ]}
            value={brand}
            onChange={(val) => {
              updateState({
                productSpecification: {
                  ...state.productSpecification,
                  brand: val as string,
                },
              });
            }}
            inputClass="lg:w-[100%]"
          />
        </div>
        <div>
          <div>
            <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
              Price
            </h1>
          </div>
          {price?.map((priceItm, priceIdx) => {
            return (
              <div className="flex items-center w-full gap-2 relative border mb-2 border-gray-200 rounded py-2 px-3">
                {price?.length > 1 && (
                  <div
                    onClick={() => onRemovePrice(priceIdx)}
                    className="absolute right-4 top-3"
                  >
                    <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-3">
                  <FormRow
                    placeholder="Select Price Type"
                    isDropdown
                    label="Price Type"
                    options={priceArr}
                    value={priceItm?.priceType}
                    onChange={(val) =>
                      onChangePrice("priceType", priceIdx, val)
                    }
                    inputClass="lg:w-[100%]"
                  />
                  <FormRow
                    placeholder="Enter Price Amount"
                    isInput
                    label="Price"
                    value={priceItm?.price}
                    onChange={(val) =>
                      onChangePrice("price", priceIdx, val as string)
                    }
                    inputClass="lg:w-[100%]"
                  />
                  <FormRow
                    placeholder="Enter Price Discount"
                    isInput
                    label="Disc Price"
                    value={priceItm?.discPrice}
                    onChange={(val) =>
                      onChangePrice("discPrice", priceIdx, val as string)
                    }
                    inputClass="lg:w-[100%]"
                  />
                  <FormRow
                    placeholder="Enter Delivery Charge"
                    isInput
                    label="Delivery Fees"
                    value={priceItm?.deliveryCharge}
                    onChange={(val) =>
                      onChangePrice("deliveryCharge", priceIdx, val as string)
                    }
                    inputClass="lg:w-[100%]"
                  />
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-end items-center my-2">
            <AdminButton label="Add More" onBtnClick={onAddMorePrice} />
          </div>
        </div>
      </div>
    );
  };
  const renderSizeAndService = () => {
    const { productSpecification } = state;
    const { availableService } = productSpecification;
    return (
      <div className="border border-gray-200 shadow-lg rounded overflow-hidden w-full">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Size & Service
        </h1>
        <div className="py-3 px-2">
          <FormRow
            label="Size Available"
            isToggle
            value={isSizeAvailable}
            onChange={(val) => setIsSizeAvailable(val as boolean)}
          />
        </div>
        {isSizeAvailable && (
          <div className="flex justify-between items-center px-6 mb-2">
            {priceSize?.map((item) => {
              return (
                <div className="flex">
                  <p className="text-sm font-semibold uppercase">{item}</p>
                  <input type="checkbox" multiple className="ml-4" />
                </div>
              );
            })}
          </div>
        )}
        <div>
          <div>
            <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
              Avail Services
            </h1>
          </div>
          {availableService?.map((availItm, availIdx) => {
            return (
              <div className="flex items-center w-full gap-2 relative border mb-2 border-gray-200 rounded py-2 px-3">
                {availableService?.length > 1 && (
                  <div
                    onClick={() => onRemoveService(availIdx)}
                    className="absolute right-4 top-3"
                  >
                    <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                  </div>
                )}
                <>
                  <FormRow
                    placeholder="Enter Title"
                    isInput
                    label="Title"
                    value={availItm?.title}
                    onChange={(val) =>
                      onChangePrice("deliveryCharge", availIdx, val as string)
                    }
                    inputClass="lg:w-[100%]"
                  />
                  <FormRow
                    label="Service Image"
                    isMultiple
                    value={availItm.icon}
                    onChange={(val) => onChangePrice("icon", availIdx, val)}
                  />
                </>
              </div>
            );
          })}
          <div className="w-full flex justify-end items-center my-2">
            <AdminButton label="Add More" onBtnClick={onAddMoreService} />
          </div>
        </div>
      </div>
    );
  };
  const renderDescription = () => {
    return (
      <div className="border border-gray-200 shadow-lg rounded overflow-hidden w-full mt-3">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Product Description
        </h1>
        <TextEditor
          value={state?.productSpecification?.specification}
          onChange={(val) =>
            updateState({
              productSpecification: {
                ...state.productSpecification,
                specification: val,
              },
            })
          }
        />
      </div>
    );
  };

  const handleSubmit = () => {
    const {
      title,
      quantityAvailable,
      banner,
      productImages,
      minQuantity,
      maxQuantity,
      availableDelivery,
      availableColor,
      category,
      subCategory,
      productSpecification,
    } = state;
    const reqBody = {
      title,
      quantityAvailable,
      banner,
      productImages,
      minQuantity,
      maxQuantity,
      availableDelivery,
      availableColor,
      category,
      subCategory,
      productSpecification,
    };
    console.log("the req body will be", reqBody);
    handleClear();
  };

  const handleClear = () => {
    updateState({
      title: "",
      quantityAvailable: 0,
      banner: "",
      productImages: [],
      minQuantity: 0,
      maxQuantity: 0,
      availableDelivery: defaultDelivery,
      availableColor: defaultColor,
      category: {
        _id: "",
        name: "",
      },
      subCategory: {
        _id: "",
        name: "",
      },
      productSpecification: {
        availableService: defaultService,
        availableSize: [],
        price: defaultPrice,
        brand: "",
        specification: "",
      },
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {renderProductBasic()}
        {renderAvailable()}
        {renderSpecificationPriceBrand()}
        {renderSizeAndService()}
      </div>
      {renderDescription()}
      <div className="mt-4">
        <AdminButton label="Save" onBtnClick={handleSubmit} className="w-40" />
        <AdminButton label="Clear" onBtnClick={handleClear} className="w-40" />
      </div>
    </div>
  );
};

export default CreateProduct;
