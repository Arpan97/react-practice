import { shopByCategory } from "../../../../utils/constantData";

const ShopByCategory = () => {
  return (
    <div className="w-94 py-4 sm:w-[98%]">
      <div className="flex justify-between items-center my-2">
        <h3 className="text-sm font-semibold">Shop By Category</h3>
        <h3 className="text-sm font-semibold sm:hidden">View All</h3>
      </div>
      <div className="flex gap-4">
        {shopByCategory?.map(
          (item: { _id: number; title: string; url: string }) => {
            return (
              <div className="py-2 px-2 justify-center items-center">
                <div className="bg-gray-200 h-16 w-16 rounded-full sm:rounded-lg sm:h-25 sm:w-25 flex justify-center items-center shadow-sm overflow-hidden">
                  <img src={item?.url} className="w-full h-full" />
                </div>
                <h3 className="text-center mt-2 text-xs">{item?.title}</h3>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ShopByCategory;
