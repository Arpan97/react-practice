import { useState } from "react";
import SearchBar from "../../../molecules/SearchBar";
import CheckBox from "../../../atoms/CheckBox";
import { convertMoneyRemoveDot } from "../../../../utils/CommonFunction";

type StateData = {
  searchInput: string;
};

const MyOrders = () => {
  const [state, setState] = useState<StateData>({
    searchInput: "",
  });
  const updateState = (key: Partial<StateData>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const orderStatusData = ["On the Way", "Delivered", "Cancelled", "Returned"];
  const orderTimeData = ["Last 30 Days", "2025", "2024", "2023"];
  const renderLeftTab = () => {
    return (
      <div className="w-[30%] sm:w-[20%] shadow-md rounded-md bg-white">
        <div className="border-b-1 p-4">
          <h3 className="text-xl font-bold">Filters</h3>
        </div>
        <div className="p-4">
          <p className="text-xs sm:text-sm">Order Status</p>
          <CheckBox options={orderStatusData} />
        </div>
        <div className="p-4">
          <p className="text-xs sm:text-sm">Order Time</p>
          <CheckBox options={orderTimeData} />
        </div>
      </div>
    );
  };
  const renderRightTab = () => {
    return (
      <div className="w-[80%] shadow-md rounded-md bg-white">
        <div className="w-[98%] mx-auto my-4">
          <SearchBar
            placeholder="Search Order..."
            buttonText="Search"
            value={state?.searchInput}
            onChange={(val: string) => updateState({ searchInput: val })}
            onClick={() => console.log("search click")}
          />
        </div>
        <div className="border-2 border-gray-100 rounded-md py-2 px-2 flex flex-col sm:flex-row w-[98%] mx-auto hover:cursor-pointer hover:shadow-md mb-2">
          <div className="flex sm:flex-row flex-col sm:w-[80%]">
            <div className="sm:w-30 sm:h-30 w-full h-40 rounded-md overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="mt-2 sm:ml-5">
              <h3 className="font-semibold text-xs sm:text-sm">
                EyeBogler Colorblock Men Hooded Neck Red Shirt For Men
              </h3>
              <p className="text-xs sm:text-sm">Color: Red Black</p>
              <p className="text-xs sm:text-sm">Size: L</p>
              <h3 className="font-semibold text-sm sm:text-base">
                {convertMoneyRemoveDot(297)}
              </h3>
            </div>
          </div>
          <div className="sm:w-[20%] sm:py-5">
            <div className="flex sm:flex-col sm:items-start">
              <div className="flex items-center sm:mb-2">
                <div className="w-3 h-3 rounded-full bg-green-300" />
                <p className="text-xs sm:text-xs text-black ml-2 mt-2 sm:mt-0">
                  Delivered on 27 Aug 2025
                </p>
              </div>
              <p className="hidden sm:block text-xs sm:text-xs text-black sm:mb-3">
                Your order has been delivered
              </p>
              <p className="text-blue-500 text-xs sm:text-sm hidden sm:block hover:cursor-pointer">
                Rate & Review
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-[98%] mx-auto flex my-2 gap-4">
      {renderLeftTab()}
      {renderRightTab()}
    </div>
  );
};

export default MyOrders;
