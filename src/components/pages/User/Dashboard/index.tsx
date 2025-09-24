import Banner from "./Banner";
import GroceryTrendProducts from "./GroceryTrendProducts";
import NewTrendCategory from "./NewTrendCategory";
import NewTrendClothes from "./NewTrendClothes";
import ShopByCategory from "./ShopByCategory";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Banner />
      <ShopByCategory />
      <NewTrendClothes />
      <NewTrendCategory />
      <GroceryTrendProducts />
    </div>
  );
};

export default Dashboard;
