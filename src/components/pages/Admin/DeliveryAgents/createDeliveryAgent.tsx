import React, { useState } from "react";
import FormRow from "../../../molecules/Admin/FormRow";
import AdminButton from "../../../atoms/AdminButton";

const educationList = [
  { _id: "ed1", name: "High School" },
  { _id: "ed2", name: "Higher Secondary" },
  { _id: "ed3", name: "Graduate" },
  { _id: "ed4", name: "Post Graduate" },
  { _id: "ed5", name: "Diploma" },
];
const vehicleList = [
  { _id: "veh1", name: "Two Wheeler" },
  { _id: "veh2", name: "Three Wheeler" },
  { _id: "veh3", name: "Four Wheeler" },
];
const stateList = [{ _id: "st1", name: "Madhya Pradesh" }];
const cityList = [
  { _id: "ct1", name: "Gwalior", stateId: "st1" },
  { _id: "ct2", name: "Bhind", stateId: "st1" },
];
const uploadDocsList = [
  { _id: "doc1", name: "Vehicle Front Image" },
  { _id: "doc2", name: "Vehicle Back Image" },
  { _id: "doc3", name: "Bank Passbook" },
  { _id: "doc4", name: "Aadhar Card" },
  { _id: "doc5", name: "PAN Card" },
  { _id: "doc6", name: "Driving License" },
  { _id: "doc7", name: "Vehicle Reg" },
  { _id: "doc8", name: "Agent Photo" },
];
const defaultDocs = [{ type: { _id: "", name: "" }, image: "" }];

const CreateDeliveryAgent: React.FC = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [educationType, setEducationType] = useState("");
  const [higherEducation, setHigherEducation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleRegNo, setVehicleRegNo] = useState("");
  const [vehicleNum, setVehicleNum] = useState("");
  const [uploadedDocs, setUploadedDocs] = useState(defaultDocs);
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankAccountIFSC, setBankAccountIFSC] = useState("");
  const [wallet, setWallet] = useState(0);

  const onChangeDocs = (key: string, index: number, val: string | object) => {
    const newArr = JSON.parse(JSON.stringify(uploadedDocs));
    newArr[index][key] = val;
    setUploadedDocs(newArr);
  };
  const handleAddMore = () => {
    setUploadedDocs([...uploadedDocs, defaultDocs[0]]);
  };
  const onRemove = (idx: number) => {
    console.log("idx check", idx, uploadedDocs);
    // const newArr = [...uploadedDocs];
    // if (idx > -1) {
    //   newArr.splice(idx, 1);
    // }
    // setUploadedDocs(newArr);
  };

  const renderPersonal = () => {
    return (
      <div className="rounded shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Personal Info
        </h1>
        <div className="px-3 mt-3">
          <FormRow
            label="Name"
            value={name}
            onChange={(val) => setName(val as string)}
            isInput
            placeholder="Enter Name"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Mobile No."
            value={mobile}
            onChange={(val) => setMobile(val as string)}
            isInput
            placeholder="Enter Mobile Number"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Email ID"
            value={email}
            onChange={(val) => setEmail(val as string)}
            isInput
            placeholder="Enter Email Address"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Address"
            value={address}
            onChange={(val) => setAddress(val as string)}
            isInput
            placeholder="Enter Address"
            inputClass="lg:w-full"
          />
          <FormRow
            label="State"
            value={state}
            onChange={(val) => setState(val as string)}
            options={stateList}
            isDropdown
            placeholder="Select State"
            inputClass="lg:w-full"
          />
          <FormRow
            label="City"
            value={city}
            onChange={(val) => setCity(val as string)}
            options={cityList}
            isDropdown
            placeholder="Select City"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Education Level"
            value={educationType}
            onChange={(val) => setEducationType(val as string)}
            options={educationList}
            isDropdown
            placeholder="Select Education Level"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Education"
            value={higherEducation}
            onChange={(val) => setHigherEducation(val as string)}
            isInput
            placeholder="Enter Education Level"
            inputClass="lg:w-full"
          />
        </div>
      </div>
    );
  };
  const renderVehicle = () => {
    return (
      <div className="rounded shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Vehicle Info
        </h1>
        <div className="px-3 mt-3">
          <FormRow
            label="Vehicle Type"
            value={vehicleType}
            onChange={(val) => setVehicleType(val as string)}
            options={vehicleList}
            isDropdown
            placeholder="Select Vehicle Type"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Vehicle Name"
            value={vehicleName}
            onChange={(val) => setVehicleName(val as string)}
            isInput
            placeholder="Enter Vehicle Name"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Vehicle Reg No."
            value={vehicleRegNo}
            onChange={(val) => setVehicleRegNo(val as string)}
            isInput
            placeholder="Enter Vehicle Reg No."
            inputClass="lg:w-full"
          />
          <FormRow
            label="Vehicle Number"
            value={vehicleNum}
            onChange={(val) => setVehicleNum(val as string)}
            isInput
            placeholder="Enter Vehicle Number"
            inputClass="lg:w-full"
          />
        </div>
      </div>
    );
  };
  const renderBank = () => {
    return (
      <div className="rounded shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Bank Details
        </h1>
        <div className="px-3 mt-3">
          <FormRow
            label="Name"
            value={bankName}
            onChange={(val) => setBankName(val as string)}
            isInput
            placeholder="Enter Bank Name"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Account Name"
            value={bankAccountName}
            onChange={(val) => setBankAccountName(val as string)}
            isInput
            placeholder="Enter Bank Account Name"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Account Number"
            value={bankAccountNumber}
            onChange={(val) => setBankAccountNumber(val as string)}
            isInput
            placeholder="Enter Bank Account Number"
            inputClass="lg:w-full"
          />
          <FormRow
            label="IFSC Code"
            value={bankAccountIFSC}
            onChange={(val) => setBankAccountIFSC(val as string)}
            isInput
            placeholder="Enter IFSC Code"
            inputClass="lg:w-full"
          />
          <FormRow
            label="Wallet"
            value={wallet}
            onChange={(val) => setWallet(val as number)}
            isInput
            placeholder="Enter Wallet Amount"
            inputClass="lg:w-full"
          />
        </div>
      </div>
    );
  };
  const renderUploadDocs = () => {
    return (
      <div className="rounded shadow-xl overflow-hidden mt-4">
        <h1 className="bg-gray-700 px-2 py-3 uppercase text-white">
          Upload Documents
        </h1>
        <div className="px-3 mt-3">
          {uploadedDocs?.map((docsItm, docsIndex) => {
            return (
              <div className="relative">
                {uploadedDocs?.length > 1 && (
                  <div
                    onClick={() => onRemove(docsIndex)}
                    className="absolute right-0 top-0"
                  >
                    <i className="ri-close-circle-fill text-red-500 cursor-pointer text-2xl"></i>
                  </div>
                )}
                <div>
                  <FormRow
                    label="Supported Documents"
                    options={uploadDocsList}
                    isDropdown
                    inputClass="lg:w-[90%]"
                    value={docsItm?.type?.name}
                    onChange={(val) => onChangeDocs("type", docsIndex, val)}
                    placeholder="Select Supported Documents"
                  />
                  <FormRow
                    label="Document Photo"
                    value={docsItm?.image}
                    onChange={(val) =>
                      onChangeDocs("image", docsIndex, val as string)
                    }
                    isImage
                    placeholder="Enter Vehicle Front Photo"
                    inputClass="lg:w-full"
                  />
                </div>
              </div>
            );
          })}
          <div className="w-full flex justify-end items-center my-2">
            <AdminButton
              label="Add More"
              onBtnClick={handleAddMore}
              className="w-40 text-white"
            />
          </div>
        </div>
      </div>
    );
  };
  const handleSave = () => {};
  const handleClear = () => {
    setName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setState("");
    setCity("");
    setEducationType("");
    setHigherEducation("");
    setVehicleName("");
    setVehicleType("");
    setVehicleRegNo("");
    setVehicleNum("");
    setUploadedDocs(defaultDocs);
    setBankAccountIFSC("");
    setBankAccountName("");
    setBankAccountNumber("");
    setBankName("");
    setWallet(0);
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {renderPersonal()}
        {renderVehicle()}
        {renderBank()}
        {renderUploadDocs()}
      </div>
      <div className="my-3">
        <AdminButton label="Submit" onBtnClick={handleSave} className="w-40" />
        <AdminButton label="Clear" onBtnClick={handleClear} className="w-40" />
      </div>
    </div>
  );
};

export default CreateDeliveryAgent;
