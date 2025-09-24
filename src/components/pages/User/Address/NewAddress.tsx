import { useState } from "react";
import Input from "../../../atoms/Input";
import Select from "../../../atoms/Select";
import { addressOption, stateData } from "../../../../utils/constantData";
import RadioButton from "../../../atoms/Radio";

interface AddressProps {
  isNewAddress: boolean;
  firstName: string;
  firstNameError: string;
  isFirstError: boolean;
  lastName: string;
  lastNameError: string;
  isLastError: boolean;
  mobile: string;
  isMobileError: boolean;
  mobileError: string;
  pincode: string;
  isPincodeError: boolean;
  pincodeError: string;
  locality: string;
  address: string;
  isAddressError: boolean;
  addressError: string;
  city: string;
  cityError: string;
  isCityError: boolean;
  stateVal: string;
  stateError: string;
  isStateError: boolean;
  landmark: string;
  addressType: string;
}

const NewAddress = () => {
  const [state, setState] = useState<AddressProps>({
    isNewAddress: false,
    firstName: "",
    firstNameError: "",
    isFirstError: false,
    lastName: "",
    lastNameError: "",
    isLastError: false,
    mobile: "",
    mobileError: "",
    isMobileError: false,
    pincode: "",
    isPincodeError: false,
    pincodeError: "",
    locality: "",
    address: "",
    addressError: "",
    isAddressError: false,
    city: "",
    cityError: "",
    isCityError: false,
    stateVal: "",
    stateError: "",
    isStateError: false,
    landmark: "",
    addressType: "",
  });
  const updateState = (key: Partial<AddressProps>) => {
    setState((prev) => ({ ...prev, ...key }));
  };
  const handleAddNew = () => {
    updateState({ isNewAddress: true });
  };
  const renderNew = () => {
    const {
      firstName,
      firstNameError,
      isFirstError,
      lastName,
      lastNameError,
      isLastError,
      mobile,
      isMobileError,
      mobileError,
      pincode,
      pincodeError,
      isPincodeError,
      address,
      addressError,
      isAddressError,
      city,
      cityError,
      isCityError,
      locality,
      stateVal,
      stateError,
      isStateError,
      landmark,
    } = state;
    return (
      <div>
        <div className="bg-blue-500 hover:bg-blue-400 hover:cursor-pointer py-1.5 px-3 rounded-sm w-60">
          <i className="ri-map-pin-2-line text-white"></i>
          <span className="text-white ml-2">Use my current location</span>
        </div>
        <div className="mt-3">
          <div className="flex mb-2">
            <Input
              value={firstName}
              label="First Name"
              onChange={(txt: string) => updateState({ firstName: txt })}
              isError={isFirstError}
              helperText={firstNameError}
              className="w-[30vh] mr-3"
            />
            <Input
              value={lastName}
              label="Last Name"
              onChange={(txt: string) => updateState({ lastName: txt })}
              isError={isLastError}
              helperText={lastNameError}
              className="w-[30vh]"
            />
          </div>
          <div className="flex mb-2">
            <Input
              value={mobile}
              label="Mobile Number"
              onChange={(txt: string) => updateState({ mobile: txt })}
              isError={isMobileError}
              helperText={mobileError}
              className="w-[30vh] mr-3"
            />
            <Input
              value={pincode}
              label="Pincode"
              onChange={(txt: string) => updateState({ pincode: txt })}
              isError={isPincodeError}
              helperText={pincodeError}
              className="w-[30vh]"
            />
          </div>
          <div className="mb-2">
            <Input
              value={address}
              label="Your address"
              onChange={(txt: string) => updateState({ address: txt })}
              isError={isAddressError}
              helperText={addressError}
              className="w-[61vh] mr-3"
              isMultiline
              numOfRows={4}
            />
          </div>
          <div className="flex mb-2">
            <Input
              value={city}
              label="City"
              onChange={(txt: string) => updateState({ city: txt })}
              isError={isCityError}
              helperText={cityError}
              className="w-[30vh] mr-3"
            />
            <Input
              value={locality}
              label="Locality"
              onChange={(txt: string) => updateState({ locality: txt })}
              className="w-[30vh]"
            />
          </div>
          <div className="flex mb-2">
            <Select
              label="State"
              option={stateData}
              value={stateVal}
              onChange={(val: string) => updateState({ stateVal: val })}
              isError={isStateError}
              helperText={stateError}
              className="w-[30vh] mr-3"
            />
            <Input
              value={landmark}
              label="Landmark"
              onChange={(txt: string) => updateState({ landmark: txt })}
              className="w-[30vh]"
            />
          </div>
          <div className="">
            <RadioButton options={addressOption} title="Address Type" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-orange-600 text-white py-3 text-center mt-6 rounded-sm shadow-md hover:cursor-pointer w-60">
            <p>Save & Deliver here</p>
          </div>
          <p
            onClick={() => updateState({ isNewAddress: false })}
            className="ml-4 mt-6 text-blue-500 underline hover:cursor-pointer"
          >
            Cancel
          </p>
        </div>
      </div>
    );
  };
  const renderSelection = () => {
    return (
      <div
        onClick={handleAddNew}
        className="text-blue-500 hover:cursor-pointer hover:text-blue-400"
      >
        <i className="ri-add-line  font-bold text-lg"></i>
        <span className=" font-bold text-sm md:text-md lg:text-lg ml-3">
          Add a new Address
        </span>
      </div>
    );
  };
  return (
    <div>
      <div>{state?.isNewAddress ? renderNew() : renderSelection()}</div>
    </div>
  );
};

export default NewAddress;
