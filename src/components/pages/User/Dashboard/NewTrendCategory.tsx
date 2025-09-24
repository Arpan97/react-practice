import { useEffect, useState } from "react";
import { newTrendCategoryList } from "../../../../utils/constantData";
import ProductCard from "../../../organisms/ProductCard";

const NewTrendCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    _id: 0,
    category: {
      _id: 0,
      name: "",
    },
    products: [],
  });
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const allCategory = newTrendCategoryList?.filter((itm) => itm?.isActive);
    setCategoryList(allCategory);
    setSelectedCategory(allCategory[0]);
  }, []);

  console.log("selected cat", selectedCategory);
  return (
    <div className="w-95 sm:w-[98%] rounded-lg my-3 shadow-xl flex border-2 border-white overflow-hidden">
      <div className="border-r-2 border-white w-[25%] text-center">
        {categoryList?.map(
          (
            itm: { _id: number; category: { _id: number; name: string } },
            index: number
          ) => {
            const { category } = itm;
            const { name, _id } = category;
            return (
              <div
                onClick={() => {
                  setSelectedCategory(itm);
                }}
                className={`border-t-0 py-5 border-white hover:cursor-pointer hover:bg-blue-300 ${
                  selectedCategory?.category?._id === _id
                    ? "bg-blue-300"
                    : "bg-transparent"
                }`}
                key={index}
              >
                <p className="uppercase">{name}</p>
              </div>
            );
          }
        )}
      </div>
      <div className="grid grid-cols-4 gap-5 ml-10 w-[75%]">
        {selectedCategory?.products?.map((elem) => (
          <div className="w-70">
            <ProductCard data={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewTrendCategory;
