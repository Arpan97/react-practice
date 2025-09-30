import React, { useState } from "react";
import FormRow from "../../../molecules/Admin/FormRow";
import AdminButton from "../../../atoms/AdminButton";
import {
  convertMoney,
  isNumber,
  Snack,
} from "../../../../utils/CommonFunction";

interface TextFormProps {
  title: string;
  value: string | number;
}

const TextForm: React.FC<TextFormProps> = ({ title, value }) => {
  return (
    <div className="flex px-15">
      <h2 className="font-bold text-base uppercase">{title}:</h2>
      <span className="font-semibold text-base ml-2 uppercase">{value}</span>
    </div>
  );
};

interface UserProps {
  _id: string;
  firstName: string;
  lastName: string;
  mobileNo: string;
  emailId: string;
  userType: string;
  isPremiumUser: boolean;
  otp: string;
  dob: string;
  wallet: number;
}

const UserDetail = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [userInfo, setUserInfo] = useState<UserProps>({
    _id: "",
    firstName: "",
    lastName: "",
    mobileNo: "",
    emailId: "",
    userType: "",
    isPremiumUser: false,
    otp: "",
    dob: "",
    wallet: 0,
  });
  const onChangeMobile = (val: string) => {
    if (val === "") {
      setMobileNo("");
      return;
    }
    if (isNumber(val)) {
      setMobileNo(val);
    } else {
      Snack("error", "Only numbers allowed");
    }
  };
  const handleSearch = () => {
    if (mobileNo === "7999548329") {
      setUserInfo({
        _id: "",
        firstName: "Arpan",
        lastName: "Govila",
        mobileNo: "7999548329",
        emailId: "arpan.govila74@gmail.com",
        userType: "user",
        isPremiumUser: false,
        otp: "4570",
        dob: "1997-01-16",
        wallet: 500,
      });
    }
  };
  return (
    <div className="">
      <div className="flex w-[50%]">
        <FormRow
          label={"Mobile Number"}
          isInput
          placeholder="Enter Mobile Number"
          value={mobileNo}
          onChange={(val) => onChangeMobile(val as string)}
          inputClass="lg:w-[90%]"
        />
        <AdminButton
          label="Search"
          onBtnClick={handleSearch}
          className="w-50 h-10"
        />
      </div>
      {userInfo?.firstName && (
        <div className="border rounded mt-4">
          <div className="grid grid-cols-3 py-4 px-2">
            <TextForm title={"First Name"} value={userInfo.firstName} />
            <TextForm title={"Last Name"} value={userInfo.lastName} />
            <TextForm title={"Mobile Number"} value={userInfo.mobileNo} />
          </div>
          <div className="grid grid-cols-3 py-4 px-2">
            <TextForm title={"Email Id"} value={userInfo.emailId} />
            <TextForm title={"Date of Birth"} value={userInfo.dob} />
            <TextForm
              title={"Premium User"}
              value={userInfo.isPremiumUser ? "Yes" : "No"}
            />
          </div>
          <div className="grid grid-cols-3 py-4 px-2">
            <TextForm
              title={"User wallet"}
              value={convertMoney(userInfo.wallet)}
            />
            {userInfo?.otp && <TextForm title={"Otp"} value={userInfo.otp} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
