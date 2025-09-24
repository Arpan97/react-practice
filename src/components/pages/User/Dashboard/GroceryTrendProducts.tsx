/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductCard from "../../../organisms/ProductCard";
import { groceryTrendingProduct } from "../../../../utils/constantData";
import type { ProductProps } from "../../../interface/productInterface";

const GroceryTrendProducts = () => {
  const [productData, setProductData] = useState<ProductProps[]>([]);
  useEffect(() => {
    if (productData?.length > 4) {
      const sliceProduct = groceryTrendingProduct?.slice(0, 4);
      setProductData(sliceProduct);
    } else {
      setProductData(groceryTrendingProduct);
    }
  }, []);
  return (
    <div className="w-95 sm:w-[98%] py-4 px-2 rounded-lg my-3 bg-yellow-200">
      <div className="flex justify-between items-center my-2">
        <h3 className="text-sm sm:text-lg  font-semibold">
          Trends on Grocery Products
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {groceryTrendingProduct?.map((item, index: number) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default GroceryTrendProducts;
