import ProductCard from "../../../organisms/ProductCard";
import { newTrendProducts } from "../../../../utils/constantData";

const NewTrendClothes = () => {
  return (
    <div className="w-95 sm:w-[98%] py-4 bg-blue-200 px-2 rounded-lg">
      <div className="flex justify-between items-center my-2">
        <h3 className="text-sm sm:text-lg font-semibold">New Trends</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {newTrendProducts?.map((item, index: number) => {
          return <ProductCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default NewTrendClothes;
