import { useState } from "react";
import FormRow from "../../../molecules/Admin/FormRow";
import PageHeader from "../../../organisms/Admin/PageHeader";
import AdminButton from "../../../atoms/AdminButton";
import { Snack } from "../../../../utils/CommonFunction";

interface Option {
  _id: number | string;
  label: string;
  value: string | number | boolean;
}

const CreateSubCategory = () => {
  const [categoryName, setCategoryName] = useState<Option>({
    _id: 0,
    label: "",
    value: "",
  });
  const [subCategory, setSubCategory] = useState("");
  const [image, setImage] = useState("");
  const disableBtn = () =>
    categoryName?._id === 0 || subCategory === "" || image === "";

  const handleClear = () => {
    setCategoryName({
      _id: 0,
      label: "",
      value: "",
    });
    setSubCategory("");
    setImage("");
  };
  const handleSave = () => {
    const reqBody = {
      name: subCategory,
      categoryId: categoryName?._id,
      categoryImage: image,
    };
    console.log("the reqBody", reqBody);
    Snack("success", "Category created successfully");
    handleClear();
  };
  return (
    <div>
      <PageHeader title={"Create New Sub Category"} />
      <div className="mt-4">
        <FormRow
          placeholder="Select Category"
          isDropdown
          label="Category Name"
          options={[
            { _id: 1, name: "Clothing" },
            { _id: 2, name: "Mobile & Tablet" },
          ]}
          value={categoryName.value}
          onChange={(val) => setCategoryName(val)}
        />
        <FormRow
          placeholder="Enter sub category name"
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
    </div>
  );
};

export default CreateSubCategory;
