import React, { useState } from "react";
import PageHeader from "../../../organisms/Admin/PageHeader";
import DateInput from "../../../molecules/Admin/DateInput";
import AdminButton from "../../../atoms/AdminButton";
import AdminTable from "../../../organisms/Admin/AdminTable";
import PaginationTable from "../../../organisms/Admin/PaginationTable";
import FormRow from "../../../molecules/Admin/FormRow";

interface CatProps {
  _id: number;
  title: string;
  url: string;
}

const EditCategory: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [image, setImage] = useState("");
  const [selectedItm, setSelectedItm] = useState<CatProps>({
    _id: 0,
    title: "",
    url: "",
  });

  const handleSearch = () => {
    const reqBody = {
      startDate,
      endDate,
    };
    console.log("req body", reqBody);
  };

  const category = [
    {
      _id: 1,
      title: "Clothing",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ec2982e5564fe07c.png?q=100",
    },
    {
      _id: 2,
      title: "TV & Appliances",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9c64dfa667885ca9.png?q=100",
    },
    {
      _id: 3,
      title: "Mobiles & Tablets",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cd6aca4f61e8ea95.png?q=100",
    },
    {
      _id: 4,
      title: "Electronics",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4d6b13d5a0e0724a.png?q=100",
    },
    {
      _id: 5,
      title: "Home & Kitchen",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/febcb9896245caf4.png?q=100",
    },
    {
      _id: 6,
      title: "Beauty & Toys",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3d7144345bbcf2e4.png?q=100",
    },
    {
      _id: 7,
      title: "Furniture",
      url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cddd92e134ba3ea9.png?q=100",
    },
  ];
  const handleBack = () => {
    setIsEdit(false);
    setSelectedItm({
      _id: 0,
      title: "",
      url: "",
    });
    setCategoryName("");
    setImage("");
  };
  const handleSave = () => {};
  const handleClear = () => {};
  const handleEdit = (itm: CatProps) => {
    setSelectedItm(itm);
    setCategoryName(itm?.title);
    setImage(itm?.url);
    setIsEdit(true);
  };
  const handleDelete = () => {};
  const disableBtn = () => categoryName === "" || image === "";

  return (
    <div>
      <PageHeader
        title={!isEdit ? "Category List" : "Edit / Delete Category"}
        onBack={handleBack}
        isEdit={isEdit}
      />
      {isEdit ? (
        <>
          <div className="mt-4">
            <FormRow
              placeholder="Enter category name"
              label="Category Name"
              isInput
              value={categoryName}
              onChange={(val) => setCategoryName(val as string)}
            />
            <FormRow
              label="Category Image"
              isImage
              value={image}
              onChange={(val) => {
                if (val instanceof File) {
                  setImage(URL.createObjectURL(val));
                } else {
                  setImage(val as string);
                }
              }}
            />
          </div>
          <div className="flex">
            <AdminButton
              disable={disableBtn()}
              label="Submit"
              onBtnClick={handleSave}
              className="w-50 text-white"
            />
            <AdminButton
              disable={disableBtn()}
              onBtnClick={handleClear}
              label="Clear"
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
            data={category}
            onPageChange={(pageNum) => setPage(pageNum)}
          >
            <AdminTable
              data={category}
              options={["Category", "Image"]}
              type="category"
              handleEdit={handleEdit}
              handleDelete={() => {}}
            />
          </PaginationTable>
        </>
      )}
    </div>
  );
};

export default EditCategory;
