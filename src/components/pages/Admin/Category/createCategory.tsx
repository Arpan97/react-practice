import { useState } from "react";
import FormRow from "../../../molecules/Admin/FormRow";
import PageHeader from "../../../organisms/Admin/PageHeader";
import AdminButton from "../../../atoms/AdminButton";
import { Snack } from "../../../../utils/CommonFunction";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const [image, setImage] = useState("");
  const disableSubmitBtn = () => categoryName === "" || image === "";
  const disableClearBtn = () => categoryName === "" || image === "";

  const handleClear = () => {
    setCategoryName("");
    setImage("");
  };
  const handleSave = () => {
    const reqBody = {
      name: categoryName,
      categoryImage: image,
    };
    console.log("the reqBody", reqBody);
    Snack("success", "Category created successfully");
    handleClear();
  };
  return (
    <div>
      <PageHeader title={"Create New Category"} />
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
          disable={disableSubmitBtn()}
          label="Submit"
          onBtnClick={handleSave}
          className="w-50 text-white"
        />
        <AdminButton
          disable={disableClearBtn()}
          onBtnClick={handleClear}
          label="Clear"
          className="w-50 text-white"
        />
      </div>
    </div>
  );
};

export default CreateCategory;
