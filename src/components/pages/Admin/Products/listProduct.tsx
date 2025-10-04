import { useState } from "react";
import DateInput from "../../../molecules/Admin/DateInput";
import Dropdown from "../../../molecules/Admin/Dropdown";
import AdminButton from "../../../atoms/AdminButton";
import PaginationTable from "../../../organisms/Admin/PaginationTable";
import AdminTable from "../../../organisms/Admin/AdminTable";
import EditProduct from "./editProduct";

interface ProductProps {
  _id: string;
  name: string;
  category: {
    _id: string;
    title: string;
  };
  subCategory: {
    _id: string;
    title: string;
  };
  brand: {
    _id: string;
    title: string;
  };
  availableQty: number;
  bannerImage: string;
}

const ListProduct = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState({ _id: "", title: "" });
  const [categoryList, setCategoryList] = useState([]);
  const [subCategory, setSubCategory] = useState({ _id: "", title: "" });
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [page, setPage] = useState(1);
  const [productList, setProductList] = useState<ProductProps[]>([
    {
      _id: "prd1",
      name: "IPhone 16 Pro 256 GB",
      category: { _id: "cat1", title: "Mobile & Tablets" },
      subCategory: { _id: "sub1", title: "Mobile" },
      brand: { _id: "brd1", title: "Apple" },
      availableQty: 20,
      bannerImage:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/o/o/9/-original-imahggev6y5zhbjz.jpeg?q=70&crop=false",
    },
    {
      _id: "prd2",
      name: "Google Pixel 9 (Obsidian, 256 GB)  (12 GB RAM)",
      category: { _id: "cat1", title: "Mobile & Tablets" },
      subCategory: { _id: "sub1", title: "Mobile" },
      brand: { _id: "brd1", title: "Google" },
      availableQty: 10,
      bannerImage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/6/3/-original-imahggetygvyddvh.jpeg?q=70",
    },
    {
      _id: "prd3",
      name: "REDMI Pad SE 8 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet (Graphite Gray)",
      category: { _id: "cat1", title: "Mobile & Tablets" },
      subCategory: { _id: "sub1", title: "Mobile" },
      brand: { _id: "brd1", title: "Redmi" },
      availableQty: 1,
      bannerImage:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/tablet/c/h/w/-original-imahfdyfjzk2zwf9.jpeg?q=70",
    },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const renderSearch = () => {
    return (
      <div className="grid grid-cols-3">
        <DateInput
          label="Start Date"
          value={startDate}
          onChange={(val) => setStartDate(val)}
        />
        <DateInput
          label="End Date"
          value={endDate}
          onChange={(val) => setEndDate(val)}
        />
        <Dropdown
          placeholder="Select Category"
          label="Category"
          value={category?.title}
          option={categoryList}
          onChange={(val) => setCategory(val)}
        />
        <Dropdown
          placeholder="Select Sub Category"
          label="Sub Category"
          value={subCategory?.title}
          option={subCategoryList}
          onChange={(val) => setSubCategory(val)}
        />
        <AdminButton
          label="Search"
          onBtnClick={handleSearch}
          className="w-50 h-10 mt-9.5"
        />
      </div>
    );
  };
  const renderList = () => {
    return (
      <PaginationTable
        itemsPerPage={10}
        data={productList}
        onPageChange={(pageNum) => setPage(pageNum)}
      >
        <AdminTable
          data={productList}
          options={[
            "Product Name",
            "Category",
            "Sub Category",
            "Brand",
            "Available Quantity",
            "Image",
          ]}
          type="product"
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </PaginationTable>
    );
  };

  const handleSearch = () => {};
  const handleEdit = (itm: ProductProps) => {
    setIsEdit(true);
    setSelectedId(itm?._id);
  };
  const handleDelete = () => {};
  return (
    <div>
      {isEdit ? (
        <EditProduct productId={selectedId} />
      ) : (
        <>
          {renderSearch()}
          {renderList()}
        </>
      )}
    </div>
  );
};

export default ListProduct;
