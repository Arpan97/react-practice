import React, { useState } from "react";
import PageHeader from "../../../organisms/Admin/PageHeader";
import DateInput from "../../../molecules/Admin/DateInput";
import AdminButton from "../../../atoms/AdminButton";
import PaginationTable from "../../../organisms/Admin/PaginationTable";
import NestedTable from "../../../organisms/Admin/NestedTable";
import FormRow from "../../../molecules/Admin/FormRow";
import TextEditor from "../../../organisms/Admin/TextEditor";
import { Snack } from "../../../../utils/CommonFunction";

interface ProductInfoProps {
  _id: number | string;
  title: string;
  description: string;
  info?: string;
  bannerImage: string;
}
const dealData = [
  {
    title: "Jackpot Deals",
    products: [
      {
        _id: 1,
        title: "Wrist Watches",
        description: "Under ₹399",
        info: "Lois, Cargo, Timewear & more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/watch/h/k/n/-original-imahc78zbyuyk2yv.jpeg?q=70",
      },
      {
        _id: 2,
        title: "Campus, Asian, Bata",
        description: "Under ₹699",
        info: "Women's shoes, sandals",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/1/j/b/6-ontl0018-6-action-navy-peach-original-imah2ggavggvffv9.jpeg?q=70",
      },
      {
        _id: 3,
        title: "Sports Shoes",
        description: "Min 65% off",
        info: "Puma, Bata, Campus",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/z/j/f/-original-imah4aakzbkzhdpx.jpeg?q=70",
      },
      {
        _id: 4,
        title: "Trolley Bags",
        description: "Min 75% off",
        info: "Safari, HRX & more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/suitcase/x/r/n/-original-imah2c4ynzkh9ybn.jpeg?q=70",
      },
      {
        _id: 5,
        title: "T-Shirts",
        description: "Min 60% off",
        info: "Levis, Peter England & more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/t-shirt/f/w/c/-original-imagz8yd6atqsheh.jpeg?q=70",
      },
    ],
  },
  {
    title: "Top deals of the sale",
    products: [
      {
        _id: 1,
        title: "Trendy Watches",
        description: "Min 60% off",
        info: "Naviforce, Overfly & more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/watch/z/s/3/1-nf8025bgngn-naviforce-men-original-imahdcksdgmqm9nv.jpeg?q=70",
      },
      {
        _id: 2,
        title: "Rucksacks",
        description: "From ₹699",
        info: "Skybags, Wildcraft & more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/jmxrwy80/rucksack/g/u/p/flip-ruck-1-11883-rucksack-wildcraft-original-imaf9qh32xazmrcz.jpeg?q=70",
      },
      {
        _id: 3,
        title: "Women's Clog",
        description: "From ₹99",
        info: "Trend Zone, Puma and more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/sandal/e/m/u/7-mneo0502l-7-aqualite-pkpk-original-imahffrwjgetjth7.jpeg?q=70",
      },
      {
        _id: 4,
        title: "Bra Panties",
        description: "Under ₹199",
        info: "Budget Buy",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/babydoll/9/h/t/free-bb-d-25-rd-krenoz-original-imah48xh7wnz2zh9.jpeg?q=70",
      },
      {
        _id: 5,
        title: "Trendy Jewellery",
        description: "From ₹149",
        info: "Rubbans, Tanishq and more",
        bannerImage:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/necklace-chain/k/v/u/1-ss23-sohnck3581-necklace-sohi-original-imagpy3wtyh974pr.jpeg?q=70",
      },
    ],
  },
  {
    title: "Best deals on Smartphones",
    products: [
      {
        _id: 1,
        title: "Galaxy F36 5G",
        description: "From ₹13999",
        info: "",
        bannerImage:
          "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/c/w/g/-original-imahgynnesp6jrxa.jpeg?q=60",
      },
      {
        _id: 2,
        title: "Vivo T46x 5G",
        description: "From ₹12249*",
        info: "",
        bannerImage:
          "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/m/n/v/-original-imahavdveeghweea.jpeg?q=60",
      },
      {
        _id: 3,
        title: "Realme P4 5G",
        description: "From ₹14999*",
        info: "",
        bannerImage:
          "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=60",
      },
      {
        _id: 4,
        title: "Oppo K13x 5G",
        description: "From ₹9499*",
        info: "",
        bannerImage:
          "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=60",
      },
      {
        _id: 5,
        title: "Vivo T4 Pro 5G",
        description: "From ₹25499",
        info: "",
        bannerImage:
          "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/y/w/w/-original-imahfkvf9ngfahpg.jpeg?q=60",
      },
    ],
  },
];
const defaultVal = {
  _id: 0,
  title: "",
  description: "",
  info: "",
  bannerImage: "",
};
const EditDeal: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [dealName, setDealName] = useState("");
  const [productInfo, setProductInfo] = useState<ProductInfoProps>(defaultVal);

  //handle functions
  const handleSearch = () => {
    const reqBody = {
      startDate,
      endDate,
      page,
    };
    console.log("req body", reqBody);
  };
  const handleClear = () => {
    setDealName("");
    setProductInfo(defaultVal);
    Snack("success", "Deal info updated successfully");
  };
  const handleBack = () => {
    setIsEdit(false);
    setDealName("");
    setProductInfo(defaultVal);
  };
  const handleEdit = (deal: string, product: ProductInfoProps) => {
    setDealName(deal);
    setProductInfo(product);
    setIsEdit(true);
  };
  const handleUpdate = () => {
    setIsEdit(false);
    handleClear();
  };
  const onChangeVal = (type: string, val: string) => {
    if (type === "title") {
      setProductInfo((prev) => ({
        ...prev,
        title: val,
      }));
    } else if (type === "description") {
      setProductInfo((prev) => ({
        ...prev,
        description: val,
      }));
    } else if (type === "info") {
      setProductInfo((prev) => ({
        ...prev,
        info: val,
      }));
    } else if (type === "bannerImage") {
      setProductInfo((prev) => ({
        ...prev,
        bannerImage: val,
      }));
    }
  };
  return (
    <div>
      <PageHeader
        title={!isEdit ? "Deal List" : "Edit / Delete Deal"}
        onBack={handleBack}
        isEdit={isEdit}
      />
      {isEdit ? (
        <>
          <div className="mt-4">
            <FormRow
              label="Deal Name"
              isInput
              value={dealName}
              onChange={() => {}}
              disable
            />
            <FormRow
              placeholder="Enter product title"
              label="Product Name"
              isInput
              value={productInfo.title}
              onChange={(val) => onChangeVal("title", val as string)}
            />
            <div className=" flex">
              <div className="w-full sm:w-[52%] text-gray-700 font-medium text-sm md:text-base ">
                Product Description
              </div>
              <TextEditor
                value={productInfo.description}
                onChange={(val) => onChangeVal("description", val)}
              />
            </div>
            <FormRow
              placeholder="Enter product info"
              label="Product Info"
              isInput
              value={productInfo.info}
              onChange={(val) => onChangeVal("info", val as string)}
            />
            <FormRow
              label="Product Image"
              isImage
              value={productInfo.bannerImage}
              onChange={(val) => {
                if (val instanceof File) {
                  onChangeVal("bannerImage", URL.createObjectURL(val));
                } else {
                  onChangeVal("bannerImage", val as string);
                }
              }}
            />
          </div>
          <div className="flex">
            <AdminButton
              label="Update"
              onBtnClick={handleUpdate}
              className="w-50 text-white"
            />
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
            <DateInput
              label="Start Date"
              value={startDate}
              onChange={(val: string) => setStartDate(val)}
              isRequired
            />
            <DateInput
              label="End Date"
              value={endDate}
              onChange={(val: string) => setEndDate(val)}
              isRequired
            />
            <AdminButton
              label="Search"
              onBtnClick={handleSearch}
              className="h-10 w-40 mt-0 lg:mt-8 text-white"
            />
          </div>
          <PaginationTable
            itemsPerPage={10}
            data={dealData}
            onPageChange={(pageNum) => setPage(pageNum)}
          >
            <NestedTable
              data={dealData}
              handleEdit={handleEdit}
              handleDelete={() => {}}
            />
          </PaginationTable>
        </>
      )}
    </div>
  );
};

export default EditDeal;
