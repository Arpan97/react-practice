import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { convertMoney } from "../../utils/CommonFunction";
import { tabsArr } from "../../utils/constantData";
import { Link, useNavigate } from "react-router-dom";

interface TabsArrProps {
  _id: number;
  title: string;
  type: string;
  link: string;
}

const Header = () => {
  const navigate = useNavigate();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wallet, setWallet] = useState(0);
  const [tabsData, setTabsData] = useState<TabsArrProps[]>([]);

  const handleOpen = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTabsData(tabsArr);
    } else {
      const filterArr = tabsArr?.filter(
        (itm: { _id: number; title: string; type: string }) =>
          itm?.type !== "login"
      );
      setTabsData(filterArr);
    }
  }, []);
  return (
    <nav className="sm:flex sm:justify-center sm:items-center sm:border-b-1 sm:border-b-gray-200 sm:shadow-lg">
      <div
        className={`flex justify-between items-center w-full px-3 ${
          isOpenDrawer ? "bg-[rgba(0,0,0,0.15)] sm:bg-transparent" : "bg-white"
        } `}
      >
        <img
          onClick={() => navigate("/")}
          src="https://www.designmantic.com/logo-images/167611.png?company=Company%20Name&keyword=e%20commerce&slogan=&verify=1"
          alt="logo"
          className="h-16 w-24 object-contain hover:cursor-pointer"
        />
        <div className="sm:hidden">
          {isOpenDrawer ? (
            <i
              onClick={handleOpen}
              className="ri-close-line text-lg font-bold"
            ></i>
          ) : (
            <i
              onClick={handleOpen}
              className="ri-menu-fill text-lg font-bold"
            ></i>
          )}
        </div>
      </div>
      <div className="hidden sm:flex sm:w-full mr-2 sm:justify-end">
        <div className="flex gap-4 items-center">
          {tabsData?.map(
            (item: { _id: number; title: string; link: string }) => {
              return (
                <Link
                  className="font-semibold text-capitalize hover:cursor-pointer hover:text-blue-400"
                  to={item?.link}
                >
                  {item?.title}
                </Link>
              );
            }
          )}
          {!isLoggedIn && (
            <div
              onClick={() => navigate("/login")}
              className="bg-blue-500 px-8 py-2 rounded-md text-white hover:cursor-pointer"
            >
              <p>Login</p>
            </div>
          )}
        </div>
        {isLoggedIn && (
          <div
            onClick={() => navigate("/profile")}
            className="flex items-center ml-4 hover:cursor-pointer"
          >
            <div className="h-24 w-24 sm:h-10 sm:w-10 rounded-full flex justify-center items-center overflow-hidden bg-white shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
                className="h-20 w-20 sm:h-8 sm:w-8 rounded-full"
              />
            </div>
          </div>
        )}
      </div>
      <div className="sm:hidden">
        {isOpenDrawer && (
          <div className="bg-[rgba(0,0,0,0.15)] h-screen w-screen">
            <div>
              {isLoggedIn && (
                <div className="flex items-center ml-4">
                  <div className="h-24 w-24 rounded-full flex justify-center items-center overflow-hidden bg-white shadow-lg">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9lRck6miglY0SZF_BZ_sK829yiNskgYRUg&s"
                      className="h-20 w-20 rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl">Arpan Govila</h3>
                    <h3>{`Wallet: ${convertMoney(wallet)}`}</h3>
                    <p className="text-xs text-blue-400 underline">{`View My Profile >>`}</p>
                  </div>
                </div>
              )}
              <div className="flex flex-col py-2 px-3">
                {tabsData?.map(
                  (item: { _id: number; title: string; link: string }) => {
                    return (
                      <Link
                        className="font-semibold text-capitalize hover:cursor-pointer hover:text-blue-400 py-2"
                        to={item?.link}
                      >
                        {item?.title}
                      </Link>
                    );
                  }
                )}
              </div>
              <div className="flex justify-center items-center mt-10">
                <Button
                  label={`${isLoggedIn ? "Logout" : "Login / SignUp"}`}
                  className="w-48 px-4 rounded-sm text-black"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
