import React, { useEffect, useState } from "react";
import PageHeader from "../../../organisms/Admin/PageHeader";
import DateInput from "../../../molecules/Admin/DateInput";
import AdminButton from "../../../atoms/AdminButton";
import AdminTable from "../../../organisms/Admin/AdminTable";
import PaginationTable from "../../../organisms/Admin/PaginationTable";
import FormRow from "../../../molecules/Admin/FormRow";
import Dropdown from "../../../molecules/Admin/Dropdown";
import categoryJson from "../../../../utils/json/categoryJson.json";
import subCategoryJson from "../../../../utils/json/subCategoryJson.json";

interface SelectedCategoryProps {
  _id: string | number;
  label: string;
  value: string;
}

interface CategoryListProps {
  _id: string | number;
  label: string;
  value: string;
}
interface CatProps {
  _id: number;
  title: string;
  url: string;
  category: {
    _id: string | number;
    title: string;
  };
}

interface Option {
  _id: number | string;
  label: string;
  value: string | number | boolean;
}

const EditSubCategory: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState<SelectedCategoryProps>({
    _id: 0,
    label: "",
    value: "",
  });
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [subCategory, setSubCategory] = useState<string>("");
  const [categoryList, setCategoryList] = useState<CategoryListProps[]>([]);
  const [image, setImage] = useState("");
  const [selectedItm, setSelectedItm] = useState<CatProps>({
    _id: 0,
    title: "",
    category: { _id: 0, title: "" },
    url: "",
  });

  const [categoryName, setCategoryName] = useState<Option>({
    _id: 0,
    label: "",
    value: "",
  });

  const handleSearch = () => {
    const reqBody = {
      startDate,
      endDate,
    };
    console.log("req body", reqBody);
  };

  //   const category = [
  //     {
  //       _id: 1,
  //       title: "Clothing",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ec2982e5564fe07c.png?q=100",
  //     },
  //     {
  //       _id: 2,
  //       title: "TV & Appliances",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9c64dfa667885ca9.png?q=100",
  //     },
  //     {
  //       _id: 3,
  //       title: "Mobiles & Tablets",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cd6aca4f61e8ea95.png?q=100",
  //     },
  //     {
  //       _id: 4,
  //       title: "Electronics",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4d6b13d5a0e0724a.png?q=100",
  //     },
  //     {
  //       _id: 5,
  //       title: "Home & Kitchen",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/febcb9896245caf4.png?q=100",
  //     },
  //     {
  //       _id: 6,
  //       title: "Beauty & Toys",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3d7144345bbcf2e4.png?q=100",
  //     },
  //     {
  //       _id: 7,
  //       title: "Furniture",
  //       url: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/cddd92e134ba3ea9.png?q=100",
  //     },
  //   ];
  const handleBack = () => {
    setIsEdit(false);
    setSelectedItm({
      _id: 0,
      title: "",
      category: { _id: 0, title: "" },
      url: "",
    });
    setSubCategory("");
    setImage("");
    setCategoryName({
      _id: 0,
      label: "",
      value: "",
    });
  };
  const handleSave = () => {};
  const handleClear = () => {
    setCategoryName({
      _id: 0,
      label: "",
      value: "",
    });
  };
  const handleEdit = (itm: CatProps) => {
    const { title, category, url } = itm;
    setSelectedItm(itm);
    setSubCategory(title);
    setImage(url);
    setIsEdit(true);
    setCategoryName({
      _id: category?._id,
      label: category?.title,
      value: category?.title?.toLowerCase(),
    });
  };
  const handleDelete = () => {};
  const disableBtn = () =>
    categoryName?._id === 0 || subCategory === "" || image === "";

  useEffect(() => {
    const catList = categoryJson?.data?.map((itm) => {
      return {
        _id: itm?._id,
        label: itm?.title,
        value: itm?.title?.toLowerCase(),
      };
    });
    setCategoryList(catList);
  }, []);

  return (
    <div>
      <PageHeader
        title={!isEdit ? "Sub Category List" : "Edit / Delete Sub Category"}
        onBack={handleBack}
        isEdit={isEdit}
      />
      {isEdit ? (
        <>
          <div className="mt-4">
            <FormRow
              placeholder="Select Category"
              isDropdown
              label="Category Name"
              options={categoryList}
              value={categoryName.value}
              onChange={(val) => setCategoryName(val)}
            />
            <FormRow
              placeholder="Enter Sub category name"
              label="Sub Category Name"
              isInput
              value={subCategory}
              onChange={(val) => setSubCategory(val as string)}
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center items-center">
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
            <Dropdown
              placeholder="Select Category"
              label="Category"
              value={category?.value}
              option={categoryList}
              onChange={(val) => setCategory(val)}
            />
            <AdminButton
              label="Search"
              onBtnClick={handleSearch}
              className="h-10 w-40 mt-8 sm:mt-8 md:mt-0 xl:mt-8 text-white"
            />
          </div>
          <PaginationTable
            itemsPerPage={10}
            data={subCategoryJson.data}
            onPageChange={(pageNum) => setPage(pageNum)}
          >
            <AdminTable
              data={subCategoryJson.data}
              options={["Sub Category", "Category", "Image"]}
              type="subCategory"
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </PaginationTable>
        </>
      )}
    </div>
  );
};

export default EditSubCategory;
