import React, { useState } from "react";
import PageHeader from "../../../organisms/Admin/PageHeader";
import FormRow from "../../../molecules/Admin/FormRow";
import TextEditor from "../../../organisms/Admin/TextEditor";
import AdminButton from "../../../atoms/AdminButton";

const defaultProduct = [
  { title: "", description: "", info: "", bannerImage: "" },
];

const defaultVal = [
  {
    title: "",
    products: defaultProduct,
  },
];

const CreateDeal: React.FC = () => {
  const [dealData, setDealData] = useState(defaultVal);
  const onChange = (index: number, val: string) => {
    const newArr = JSON.parse(JSON.stringify(dealData));
    newArr[index].title = val;
    setDealData(newArr);
  };
  const onChangeProduct = (
    key: string,
    index: number,
    productIdx: number,
    val: string
  ) => {
    const newArr = JSON.parse(JSON.stringify(dealData));
    newArr[index].products[productIdx][key] = val;
    setDealData(newArr);
  };
  const onAddMore = () => {
    setDealData([...dealData, defaultVal[0]]);
  };
  const onAddProductMore = (dealIndex: number) => {
    const newArr = JSON.parse(JSON.stringify(dealData));
    newArr[dealIndex].products.push({
      title: "",
      description: "",
      info: "",
      bannerImage: "",
    });
    setDealData(newArr);
  };
  const onRemove = (index: number) => {
    const newArr = [...dealData];
    if (index > -1) {
      newArr.splice(index, 1);
    }
    setDealData(newArr);
  };
  const onRemoveProduct = (index: number, productIdx: number) => {
    const newArr = [...dealData];
    newArr[index].products.splice(productIdx, 1);
    setDealData(newArr);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <PageHeader title={"Create Deal"} />
      <div className="rounded mt-4 w-[80%]">
        {dealData?.map((item, index) => {
          return (
            <div className="relative">
              {dealData?.length > 1 && (
                <div
                  onClick={() => onRemove(index)}
                  className="absolute -right-8 top-0"
                >
                  <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                </div>
              )}
              <div className="border border-gray-200 py-2 px-2">
                <FormRow
                  label={"Title"}
                  isInput
                  placeholder="Enter Title"
                  value={item?.title}
                  onChange={(val) => onChange(index, val as string)}
                  inputClass="lg:w-[100%]"
                />
                <div className="flex justify-center items-center">
                  <div className="w-full sm:w-1/3 text-gray-700 font-medium text-sm md:text-base ">
                    Product
                  </div>
                  <div className="rounded w-[70%] ml-8 overflow-hidden">
                    {item?.products?.map((productItm, productIdx) => {
                      return (
                        <div className="relative ">
                          {item?.products?.length > 1 && (
                            <div
                              onClick={() => onRemoveProduct(index, productIdx)}
                              className="absolute right-0 top-0"
                            >
                              <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                            </div>
                          )}
                          <div
                            className={`${
                              item?.products?.length > 1 ? "w-[95%]" : "w-full"
                            } border border-gray-300 py-2 px-2 mt-2`}
                          >
                            <FormRow
                              label={"Title"}
                              isInput
                              placeholder="Enter Product Title"
                              value={productItm?.title}
                              onChange={(val) =>
                                onChangeProduct(
                                  "title",
                                  index,
                                  productIdx,
                                  val as string
                                )
                              }
                              inputClass="lg:w-[100%]"
                            />
                            <div className=" flex">
                              <div className="w-full sm:w-[55%] text-gray-700 font-medium text-sm md:text-base ">
                                Description
                              </div>
                              <TextEditor
                                value={productItm.description}
                                onChange={(val) =>
                                  onChangeProduct(
                                    "description",
                                    index,
                                    productIdx,
                                    val
                                  )
                                }
                              />
                            </div>
                            <FormRow
                              label={"Info"}
                              isInput
                              placeholder="Enter Product Info"
                              value={productItm?.info}
                              onChange={(val) =>
                                onChangeProduct(
                                  "info",
                                  index,
                                  productIdx,
                                  val as string
                                )
                              }
                              inputClass="lg:w-[100%]"
                            />
                            <FormRow
                              label={"Image"}
                              isImage
                              placeholder="Enter Product Image"
                              value={productItm?.bannerImage}
                              onChange={(val) =>
                                onChangeProduct(
                                  "bannerImage",
                                  index,
                                  productIdx,
                                  val as string
                                )
                              }
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full flex justify-end items-center mt-2">
                  <AdminButton
                    label="Add More"
                    onBtnClick={() => onAddProductMore(index)}
                    className="w-40 text-white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-[81%] flex justify-end items-center mt-2">
        <AdminButton
          label="Add More"
          onBtnClick={onAddMore}
          className="w-40 text-white"
        />
      </div>
      <div className="mt-3">
        <AdminButton
          label="Submit"
          onBtnClick={handleSubmit}
          className="w-50"
        />
      </div>
    </div>
  );
};

export default CreateDeal;
