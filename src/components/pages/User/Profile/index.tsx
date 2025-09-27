import { useState } from "react";
import Input from "../../../atoms/Input";
import Button from "../../../atoms/Button";
import RadioButton from "../../../atoms/Radio";
import {
  addressOption,
  faqPersonal,
  genderOption,
  optionsList,
  stateData,
} from "../../../../utils/constantData";
import Select from "../../../atoms/Select";
import { useNavigate } from "react-router-dom";
import wishlistData from "../../../../utils/json/wishlistData.json";
import ProductShort from "../../../organisms/ProductShort";

type StateType = {
  selectedTab: string;
  firstName: string;
  firstNameError: boolean;
  firstNameHelperText: string;
  lastName: string;
  lastNameError: boolean;
  lastNameHelperText: string;
  email: string;
  emailError: boolean;
  emailHelperText: string;
  mobile: string;
  mobileError: boolean;
  mobileHelperText: string;
  isNameSectionEdit: boolean;
  isEmailSectionEdit: boolean;
  isMobileSection: boolean;
};

type AddressStateType = {
  isNewAddress: boolean;
  firstName: string;
  firstNameError: boolean;
  firstNameHelperText: string;
  lastName: string;
  lastNameError: boolean;
  lastNameHelperText: string;
  email: string;
  emailError: boolean;
  emailHelperText: string;
  mobile: string;
  mobileError: boolean;
  mobileHelperText: string;
  pinCode: string;
  pinCodeError: boolean;
  pinCodeHelperText: string;
  locality: string;
  localityError: boolean;
  localityHelperText: string;
  address: string;
  addressError: boolean;
  addressHelperText: string;
  city: string;
  cityError: boolean;
  cityHelperText: string;
  state: string;
  stateError: boolean;
  stateHelperText: string;
  landmark: string;
  landmarkError: boolean;
  landmarkHelperText: string;
  addressType: string;
};

const Profile = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<StateType>({
    selectedTab: "My Wishlist",
    firstName: "",
    firstNameError: false,
    firstNameHelperText: "",
    lastName: "",
    lastNameError: false,
    lastNameHelperText: "",
    email: "",
    emailError: false,
    emailHelperText: "",
    mobile: "",
    mobileError: false,
    mobileHelperText: "",
    isNameSectionEdit: false,
    isEmailSectionEdit: false,
    isMobileSection: false,
  });
  const [newAddressState, setNewAddressState] = useState<AddressStateType>({
    isNewAddress: false,
    firstName: "",
    firstNameError: false,
    firstNameHelperText: "",
    lastName: "",
    lastNameError: false,
    lastNameHelperText: "",
    email: "",
    emailError: false,
    emailHelperText: "",
    mobile: "",
    mobileError: false,
    mobileHelperText: "",
    pinCode: "",
    pinCodeError: false,
    pinCodeHelperText: "",
    locality: "",
    localityError: false,
    localityHelperText: "",
    address: "",
    addressError: false,
    addressHelperText: "",
    city: "",
    cityError: false,
    cityHelperText: "",
    state: "",
    stateError: false,
    stateHelperText: "",
    landmark: "",
    landmarkError: false,
    landmarkHelperText: "",
    addressType: "",
  });
  const addressData = [
    {
      _id: "1",
      userInfo: { firstName: "Arpan", lastName: "Govila" },
      emailId: "arpan.govila74@gmail.com",
      mobile: "7999548329",
      address:
        "76-Jyoti Nagar, In Front of Dwarikadish Temple, Kumharpura, Gwalior",
      city: "Gwalior",
      state: "Madhya Pradesh",
      landmark: "Near Dwarikadish Temple",
      pinCode: "474011",
      addressType: "Home",
    },
    {
      _id: "2",
      userInfo: { firstName: "Aman", lastName: "Govila" },
      emailId: "aman.govil65@gmail.com",
      mobile: "9354866725",
      address:
        "Sheetal PG, Room number 205 68A Gali no 01 sector 22 rd, near nxtden pg, Sector 22 Road",
      city: "Gurgaon",
      state: "Haryana",
      landmark: "",
      pinCode: "122015",
      addressType: "Work",
    },
  ];
  const updateState = (key: Partial<StateType>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const updateAddressState = (key: Partial<AddressStateType>) => {
    setNewAddressState((prev) => ({ ...prev, ...key }));
  };

  const renderNameContainer = () => {
    return (
      <div className="shadow-md rounded-xl w-[95%] mx-auto flex items-center py-4 px-4">
        <div>
          <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
            alt="user"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">Hello,</p>
          <h3 className="text-lg font-extrabold">Arpan Govila</h3>
        </div>
      </div>
    );
  };
  const renderOtherSection = () => {
    const { selectedTab } = state;
    return (
      <div className="shadow-md rounded-xl w-[95%] mx-auto py-4 px-4 mt-3 hover:cursor-pointer">
        {optionsList?.map(
          (
            itm: {
              _id: number;
              title: string;
              subContent: { _id: number; title: string }[];
              type: string;
              icon: string;
              path: string;
            },
            index: number
          ) => {
            return (
              <>
                <div
                  onClick={() => {
                    if (itm?.type === "navigate") {
                      navigate(itm?.path);
                    }
                  }}
                  className="flex items-center w-full"
                >
                  <div className="flex items-center  w-[80%] mt-2">
                    <div className="h-12 w-12 flex items-center justify-center">
                      <img
                        src={itm?.icon}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="ml-2">
                      <p className="uppercase font-bold text-md">
                        {itm?.title}
                      </p>
                    </div>
                  </div>
                  {itm?.type === "navigate" && (
                    <div className="w-[20%] flex justify-end items-center">
                      <i className="ri-arrow-right-s-line"></i>
                    </div>
                  )}
                </div>
                <div className="w-[70%] sm:w-[100%] mx-auto">
                  <div>
                    {itm?.subContent?.map(
                      (item: { _id: number; title: string }) => {
                        return (
                          <div
                            key={item?._id}
                            onClick={() =>
                              updateState({ selectedTab: item?.title })
                            }
                            className={`py-2 hover:cursor-pointer hover:text-blue-500 sm:pl-14 ${
                              selectedTab === item?.title
                                ? "sm:bg-sky-100"
                                : "bg-transparent"
                            }`}
                          >
                            <p>{item?.title}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div
                  className={`${
                    index + 1 === optionsList?.length
                      ? ""
                      : "border-t-1 border-gray-100 mt-2"
                  } `}
                />
              </>
            );
          }
        )}
      </div>
    );
  };
  const renderProfile = () => {
    return (
      <>
        {renderPersonalDetail()}
        {renderFaqDetails()}
        {renderDeleteBtn()}
        {renderBottomBanner()}
      </>
    );
  };
  const renderPersonalDetail = () => {
    const {
      isNameSectionEdit,
      firstName,
      firstNameError,
      firstNameHelperText,
      lastName,
      lastNameError,
      lastNameHelperText,
      isEmailSectionEdit,
      email,
      emailError,
      emailHelperText,
      mobile,
      mobileError,
      mobileHelperText,
      isMobileSection,
    } = state;
    return (
      <div className="px-4 py-5">
        <>
          <div className="flex items-center">
            <h3 className="font-bold text-xl">Personal Information</h3>
            <p
              onClick={() =>
                updateState({ isNameSectionEdit: !isNameSectionEdit })
              }
              className="text-sm font-medium text-blue-500 ml-6 hover:cursor-pointer"
            >
              {isNameSectionEdit ? "Cancel" : "Edit"}
            </p>
          </div>
          <div className="flex">
            <Input
              value={firstName}
              onChange={(val: string) => updateState({ firstName: val })}
              isError={firstNameError}
              helperText={firstNameHelperText}
              label="First Name"
              isDisable={!isNameSectionEdit}
            />
            <Input
              value={lastName}
              onChange={(val: string) => updateState({ lastName: val })}
              isError={lastNameError}
              helperText={lastNameHelperText}
              label="Last Name"
              className="ml-15"
              isDisable={!isNameSectionEdit}
            />
            {isNameSectionEdit && (
              <Button
                label="Save"
                className="w-40 justify-center items-center flex ml-10 rounded-md text-white"
              />
            )}
          </div>
          <div className="mt-10">
            <RadioButton
              title={"Gender"}
              options={genderOption}
              isDisable={!isNameSectionEdit}
            />
          </div>
        </>
        <>
          <div className="flex items-center mt-10">
            <h3 className="font-bold text-xl">Email Address</h3>
            <p
              onClick={() =>
                updateState({ isEmailSectionEdit: !isEmailSectionEdit })
              }
              className="text-sm font-medium text-blue-500 ml-6 hover:cursor-pointer"
            >
              {isEmailSectionEdit ? "Cancel" : "Edit"}
            </p>
          </div>
          <div className="flex">
            <Input
              value={email}
              onChange={(val: string) => updateState({ email: val })}
              isError={emailError}
              helperText={emailHelperText}
              label="Email"
              isDisable={!isEmailSectionEdit}
            />
            {isEmailSectionEdit && (
              <Button
                label="Save"
                className="w-40 justify-center items-center flex ml-10 rounded-md text-white"
              />
            )}
          </div>
        </>
        <>
          <div className="flex items-center mt-10">
            <h3 className="font-bold text-xl">Mobile Number</h3>
            <p
              onClick={() => updateState({ isMobileSection: !isMobileSection })}
              className="text-sm font-medium text-blue-500 ml-6 hover:cursor-pointer"
            >
              {isMobileSection ? "Cancel" : "Edit"}
            </p>
          </div>
          <div className="flex">
            <Input
              value={mobile}
              onChange={(val: string) => updateState({ mobile: val })}
              isError={mobileError}
              helperText={mobileHelperText}
              label="Mobile Number"
              isDisable={!isMobileSection}
            />
            {isMobileSection && (
              <Button
                label="Save"
                className="w-40 justify-center items-center flex ml-10 rounded-md text-white"
              />
            )}
          </div>
        </>
      </div>
    );
  };
  const renderFaqDetails = () => {
    return (
      <div className="mt-6 px-4 py-5">
        <h3 className="font-bold text-xl mb-4">FAQs</h3>
        {faqPersonal?.map(
          (itm: { _id: number; title: string; desc: string }) => {
            const { _id, title, desc } = itm;
            return (
              <div key={_id} className="mt-3">
                <p className="font-bold text-sm">{title}</p>
                <span className="font-normal text-sm">{desc}</span>
              </div>
            );
          }
        )}
      </div>
    );
  };
  const renderDeleteBtn = () => {
    return (
      <div className="px-4 py-5">
        <h3 className="text-blue-500 hover:cursor-pointer">
          Deactivate Account
        </h3>
        <h3 className="text-red-500 hover:cursor-pointer">Delete Account</h3>
      </div>
    );
  };
  const renderAddress = () => {
    return (
      <div className="px-4 py-5">
        <h3 className="font-bold text-xl">Manage Addresses</h3>
        {renderNewAddress()}
        {renderAllAddress()}
      </div>
    );
  };
  const renderNewAddress = () => {
    const {
      isNewAddress,
      firstName,
      firstNameError,
      firstNameHelperText,
      lastName,
      lastNameError,
      lastNameHelperText,
      email,
      emailError,
      emailHelperText,
      mobile,
      mobileError,
      mobileHelperText,
      pinCode,
      pinCodeError,
      pinCodeHelperText,
      locality,
      localityError,
      localityHelperText,
      address,
      addressError,
      addressHelperText,
      city,
      cityError,
      cityHelperText,
      state,
      stateError,
      stateHelperText,
      landmark,
      landmarkError,
      landmarkHelperText,
    } = newAddressState;
    return (
      <div className="mt-4">
        {!isNewAddress ? (
          <div
            onClick={() => updateAddressState({ isNewAddress: true })}
            className="flex border-1 py-2 px-4 mt-2 items-center rounded-md border-gray-200 hover:cursor-pointer"
          >
            <i className="ri-add-line text-blue-500 text-xl"></i>
            <h3 className="text-blue-500 text-sm uppercase ml-10">
              Add New Address
            </h3>
          </div>
        ) : (
          <div className="bg-sky-100 py-4 px-5">
            <div>
              <p className="text-sm font-bold text-blue-500 uppercase">
                Add A New Address
              </p>
            </div>
            <div>
              <div className="flex my-3">
                <Input
                  label="First Name"
                  value={firstName}
                  onChange={(val: string) =>
                    updateAddressState({ firstName: val })
                  }
                  isError={firstNameError}
                  helperText={firstNameHelperText}
                  className="w-[30vh] mr-10"
                  isRequired
                />
                <Input
                  label="Last Name"
                  value={lastName}
                  onChange={(val: string) =>
                    updateAddressState({ lastName: val })
                  }
                  isError={lastNameError}
                  helperText={lastNameHelperText}
                  className="w-[30vh]"
                  isRequired
                />
              </div>
              <div className="flex mb-2">
                <Input
                  label="Mobile Number"
                  value={mobile}
                  onChange={(val: string) =>
                    updateAddressState({ mobile: val })
                  }
                  isError={mobileError}
                  helperText={mobileHelperText}
                  className="w-[30vh] mr-10"
                  isRequired
                />
                <Input
                  label="Email Address"
                  value={email}
                  onChange={(val: string) => updateAddressState({ email: val })}
                  isError={emailError}
                  helperText={emailHelperText}
                  className="w-[30vh]"
                  isRequired
                />
              </div>
              <div className="flex mb-2">
                <Input
                  label="Pincode"
                  value={pinCode}
                  onChange={(val: string) =>
                    updateAddressState({ pinCode: val })
                  }
                  isError={pinCodeError}
                  helperText={pinCodeHelperText}
                  className="w-[30vh] mr-10"
                  isRequired
                />
                <Input
                  label="Locality"
                  value={locality}
                  onChange={(val: string) =>
                    updateAddressState({ locality: val })
                  }
                  isError={localityError}
                  helperText={localityHelperText}
                  className="w-[30vh]"
                />
              </div>
              <div className="mb-2">
                <Input
                  label="Address (Area and Street)"
                  value={address}
                  onChange={(val: string) =>
                    updateAddressState({ address: val })
                  }
                  isError={addressError}
                  helperText={addressHelperText}
                  className="w-[64vh] mr-10"
                  isRequired
                  isMultiline
                  numOfRows={4}
                />
              </div>
              <div className="flex">
                <Input
                  label="City"
                  value={city}
                  onChange={(val: string) => updateAddressState({ city: val })}
                  isError={cityError}
                  helperText={cityHelperText}
                  className="w-[30vh] mr-10"
                  isRequired
                />
                <Input
                  label="Landmark (Optional)"
                  value={landmark}
                  onChange={(val: string) =>
                    updateAddressState({ landmark: val })
                  }
                  isError={landmarkError}
                  helperText={landmarkHelperText}
                  className="w-[30vh]"
                />
              </div>
              <div className="flex mt-2">
                <Select
                  label="State"
                  option={stateData}
                  value={state}
                  onChange={(val: string) => updateAddressState({ state: val })}
                  isError={stateError}
                  helperText={stateHelperText}
                  className="w-[30vh]"
                />
                <div className="ml-10">
                  <RadioButton options={addressOption} title="Address Type" />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Button label={"Save"} className="w-40 mr-10 text-white" />
              <p
                onClick={() => updateAddressState({ isNewAddress: false })}
                className="text-sm font-bold text-blue-500 hover:cursor-pointer"
              >
                Cancel
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };
  const renderAllAddress = () => {
    return (
      <>
        {addressData?.map(
          (item: {
            _id: string;
            userInfo: { firstName: string; lastName: string };
            emailId: string;
            mobile: string;
            address: string;
            city: string;
            state: string;
            landmark: string;
            pinCode: string;
            addressType: string;
          }) => {
            const {
              _id,
              userInfo,
              mobile,
              address,
              city,
              state,
              pinCode,
              addressType,
            } = item;
            return (
              <div
                key={_id}
                className="border-1 border-gray-100 rounded-md w-full py-5 px-5"
              >
                <div className="w-150">
                  <div className="bg-gray-200 w-15 rounded-md flex items-center justify-center py-1">
                    <p className="text-gray-400 text-sm">{addressType}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-bold text-sm">
                      {userInfo?.firstName} {userInfo?.lastName} {mobile}
                    </h3>
                    <p>
                      {address}, {city}, {state} - {pinCode}
                    </p>
                  </div>
                </div>
                <div className="flex my-2">
                  <Button label={"Edit"} className="w-30 rounded-md" />
                  <Button
                    label={"Delete"}
                    className="w-30 rounded-md bg-red-400 text-white"
                  />
                </div>
              </div>
            );
          }
        )}
      </>
    );
  };
  const renderBottomBanner = () => {
    return (
      <div className="">
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
          className="w-[1200px]"
        />
      </div>
    );
  };
  const renderWishlist = () => {
    return (
      <div className="px-4 py-5">
        <h3 className="font-bold text-xl">My Wishlist</h3>
        <div className="grid sm:grid-cols-4 sm:gap-2">
          {wishlistData?.data?.map(
            (
              item: {
                _id: number;
                title: string;
                price: number;
                bannerImage: string;
              },
              index: number
            ) => {
              return <ProductShort key={index} data={item} />;
            }
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-screen sm:flex">
      <div className="sm:w-[30%] mt-2">
        {renderNameContainer()}
        {renderOtherSection()}
      </div>
      <div className="w-[68%] hidden sm:block shadow-md rounded-md bg-white mt-2">
        {state?.selectedTab === "Profile Information"
          ? renderProfile()
          : state?.selectedTab === "Manage Address"
          ? renderAddress()
          : state?.selectedTab === "My Wishlist"
          ? renderWishlist()
          : null}
      </div>
    </div>
  );
};

export default Profile;
