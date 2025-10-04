import { convertMoney } from "../../../../utils/CommonFunction";
import CircularProgressBar from "../../../molecules/Admin/CircularProgressBar";
import AdminTable from "../../../organisms/Admin/AdminTable";

const Dashboard = () => {
  const renderUser = () => {
    return (
      <div className="rounded-md shadow-xl flex justify-between items-center">
        <div className="h-full py-2 px-4 w-60">
          <div className="flex items-center mb-2">
            <div className="bg-gray-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Total Users: <span className="text-xs font-normal">200</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-green-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Active Users: <span className="text-xs font-normal">160</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-red-600 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Deleted Users: <span className="text-xs font-normal">40</span>
            </h3>
          </div>
        </div>
        <div className="w-40 py-2 px-4">
          <CircularProgressBar current={160} total={200} left={40} />
        </div>
      </div>
    );
  };
  const renderRevenue = () => {
    return (
      <div className="rounded-md shadow-xl flex justify-between items-center">
        <div className="h-full py-2 px-4 w-60">
          <div className="flex items-center mb-2">
            <div className="bg-gray-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Overall Revenue:{" "}
              <span className="text-xs font-normal">{convertMoney(15000)}</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-green-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Daily Revenue:{" "}
              <span className="text-xs font-normal">{convertMoney(700)}</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-red-600 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Monthly Revenue:{" "}
              <span className="text-xs font-normal">{convertMoney(15000)}</span>
            </h3>
          </div>
        </div>
        <div className="w-40 py-2 px-4">
          <CircularProgressBar current={160} total={200} left={40} />
        </div>
      </div>
    );
  };
  const renderDeliveryPartner = () => {
    //total delivery partner, active partner, deleted partner
    return (
      <div className="rounded-md shadow-xl flex justify-between items-center">
        <div className="h-full py-2 px-4 w-60">
          <div className="flex items-center mb-2">
            <div className="bg-gray-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Total Delivery Boy:{" "}
              <span className="text-xs font-normal">200</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-green-800 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              TOtal Active: <span className="text-xs font-normal">160</span>
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <div className="bg-red-600 h-3 w-3 rounded mr-2" />
            <h3 className="text-xs font-semibold">
              Total Deleted: <span className="text-xs font-normal">40</span>
            </h3>
          </div>
        </div>
        <div className="w-40 py-2 px-4">
          <CircularProgressBar current={160} total={200} left={40} />
        </div>
      </div>
    );
  };
  const renderLatestOrder = () => {
    // table show -> Order no, Product name, order price, status
    return (
      <div className="rounded-md shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Latest Order
        </h1>
        <AdminTable
          data={[
            {
              orderId: "ord1",
              name: "Apple IPhone 16 Pro Max",
              price: 76000,
              status: 1,
            },
            {
              orderId: "ord2",
              name: "Apple IPhone 16 Pro",
              price: 76000,
              status: 2,
            },
            {
              orderId: "ord3",
              name: "Apple IPhone 16",
              price: 76000,
              status: 3,
            },
            {
              orderId: "ord4",
              name: "Apple IPhone 15 Pro Max",
              price: 76000,
              status: 4,
            },
            {
              orderId: "ord5",
              name: "Apple IPhone 15 Pro",
              price: 76000,
              status: 5,
            },
          ]}
          options={["Order ID", "Product Name", "Price", "Status"]}
          type="latestOrder"
        />
      </div>
    );
  };
  const renderTrendingProduct = () => {
    // table show -> trending product search -> Product name, total user visited, price
    return (
      <div className="rounded-md shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Trending Product
        </h1>
        <AdminTable
          data={[
            {
              orderId: "prd1",
              name: "Apple IPhone 16 Pro Max",
              price: 76000,
              visitedUser: 10,
            },
            {
              orderId: "prd2",
              name: "Apple IPhone 16 Pro",
              price: 76000,
              visitedUser: 2,
            },
            {
              orderId: "prd3",
              name: "Apple IPhone 16",
              price: 76000,
              visitedUser: 3,
            },
            {
              orderId: "prd4",
              name: "Apple IPhone 15 Pro Max",
              price: 76000,
              visitedUser: 4,
            },
            {
              orderId: "prd5",
              name: "Apple IPhone 15 Pro",
              price: 76000,
              visitedUser: 5,
            },
          ]}
          options={["Order ID", "Product Name", "Price", "Visited User"]}
          type="trendingProduct"
        />
      </div>
    );
  };
  return (
    <div className="text-black">
      <h3 className="text-black text-xl font-bold uppercase">Welcome Admin</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {renderUser()}
        {renderRevenue()}
        {renderDeliveryPartner()}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {renderLatestOrder()}
        {renderTrendingProduct()}
      </div>
    </div>
  );
};

export default Dashboard;
