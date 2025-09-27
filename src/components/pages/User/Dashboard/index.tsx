import Banner from "./Banner";
import DealSection from "./DealSection";
import NewTrendCategory from "./NewTrendCategory";
import ShopByCategory from "./ShopByCategory";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Banner />
      <ShopByCategory />
      <DealSection />
      <NewTrendCategory />
    </div>
  );
};

export default Dashboard;
