import dealJson from "../../../../utils/json/dashboardDeals.json";

type DealInterface = {
  _id: number;
  title: string;
  description: string;
  info: string;
  bannerImage: string;
};

type DealCard = {
  data: DealInterface;
};

const DealCard: React.FC<DealCard> = ({ data }) => {
  const { _id, title, description, info, bannerImage } = data;
  return (
    <div
      key={_id}
      className="py-4 px-2 flex flex-col justify-center items-center"
    >
      <div className="h-16 w-16 sm:h-35 sm:w-35 flex justify-center items-center overflow-hidden hover:cursor-pointer hover:scale-105">
        <img src={bannerImage} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-center mt-2 text-base font-semibold">{title}</h3>
      <p className="text-sm font-medium text-green-600 text-center">
        {description}
      </p>
      <p className="text-xs font-normal text-center">{info}</p>
    </div>
  );
};

const DealSection = () => {
  const renderDeal = () => {
    return (
      <>
        {dealJson?.data?.map((item) => {
          const { title } = item;
          return (
            <div className="py-4 px-6">
              <h1 className="font-semibold text-xl">{title}</h1>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-8">
                {item?.products?.map((item, index: number) => {
                  return <DealCard key={index} data={item} />;
                })}
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return <div className="w-[98%]">{renderDeal()}</div>;
};

export default DealSection;
