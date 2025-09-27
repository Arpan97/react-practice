import { useEffect, useState } from "react";
import { newTrendCategoryList } from "../../../../utils/constantData";
import ProductCard from "../../../organisms/ProductCard";
import TrendingCategory from "../../../../utils/json/trendCategory.json";
import ProductShort from "../../../organisms/ProductShort";

type Product = {
  _id: number;
  title: string;
  price: number;
  bannerImage: string;
};

type CategoryListProps = {
  _id: number;
  title: string;
  isActive: boolean;
  products: Product[];
};

const NewTrendCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryListProps>({
    _id: 0,
    title: "",
    isActive: false,
    products: [],
  });
  const [categoryList, setCategoryList] = useState<CategoryListProps[]>([]);
  useEffect(() => {
    const allCategory = TrendingCategory?.data?.category?.filter(
      (itm) => itm?.isActive
    );
    setCategoryList(allCategory);
    setSelectedCategory(allCategory[0]);
  }, []);

  return (
    <div className="w-95 sm:w-[98%] rounded-lg my-3 shadow-xl sm:flex border-2 border-white overflow-hidden">
      <div className="border-r-2 border-white w-full flex sm:block sm:w-[25%] text-center overflow-x-auto sm:overflow-x-visible scrollbar-hide">
        {categoryList?.map((itm, index) => {
          const { _id, title } = itm;
          return (
            <div
              onClick={() => {
                setSelectedCategory(itm);
              }}
              className={`flex-shrink-0 w-30 sm:w-full mr-2 sm:mr-0 border-t-0 py-5 border-white hover:cursor-pointer hover:rounded-md sm:hover:rounded-none hover:bg-blue-300 hover:text-white ${
                selectedCategory?._id === _id
                  ? "bg-blue-300 rounded-md sm:rounded-none px-4 sm:px-0 text-white"
                  : "bg-transparent"
              }`}
              key={index}
            >
              <p className="uppercase text-xs sm:text-base">{title}</p>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:ml-10 sm:w-[75%] py-2">
        {selectedCategory?.products?.map((elem) => (
          <div className="sm:w-70">
            <ProductShort data={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTrendCategory;
