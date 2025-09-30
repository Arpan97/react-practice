import React, { useState } from "react";
import ModalContainer from "../../atoms/ModalContainer";
import AdminButton from "../../atoms/AdminButton";

interface AdminTableProps<T> {
  data: T[];
  options: string[]; // column keys from data objects
  handleEdit?: (item: T) => void;
  handleDelete?: (item: T) => void;
  type?: string;
}

const AdminTable = <T extends object>({
  data,
  options,
  handleEdit,
  handleDelete,
  type,
}: AdminTableProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDeletedVal, setIsDeletedVal] = useState({});
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border border-gray-300 border-collapse">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="border px-2 py-2">S.No</th>
            {options.map((key) => (
              <th key={String(key)} className="border px-2 py-2">
                {String(key)}
              </th>
            ))}
            {(handleEdit || handleDelete) && (
              <th className="border px-2 py-2">Action</th>
            )}
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 hover:text-black">
              <td className="border px-2 py-2">{index + 1}</td>
              {type === "category" && (
                <>
                  <td className="border px-2 py-2">{item.title}</td>
                  <td className="border px-2 py-2">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </td>
                </>
              )}
              {type === "subCategory" && (
                <>
                  <td className="border px-2 py-2">{item?.title}</td>
                  <td className="border px-2 py-2">{item?.category?.title}</td>
                  <td className="border px-2 py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  </td>
                </>
              )}
              {type === "deal" && (
                <>
                  <td className="border px-2 py-2">{item?.title}</td>
                  {item?.products?.map((itm) => {
                    return (
                      <tr className="w-[100%]">
                        <td className="border px-2 py-2 w-[25%]">
                          {itm?.title}
                        </td>
                        <td className="border px-2 py-2 w-[25%]">
                          {itm?.description}
                        </td>
                        <td className="border px-2 py-2 w-[25%]">
                          {itm?.info || "-"}
                        </td>
                        <td className="border px-2 py-2 w-[25%]">
                          <img
                            src={itm.bannerImage}
                            alt={itm.title}
                            className="w-12 h-12 object-contain mx-auto"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
              {(handleEdit || handleDelete) && (
                <td className="border px-2 py-2">
                  <div className="flex justify-center gap-2">
                    {handleEdit && (
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                    )}
                    {handleDelete && (
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                        onClick={() => {
                          setIsVisible(true);
                          setIsDeletedVal(item);
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 overflow-x-auto">
        <ModalContainer
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        >
          <div className="text-center py-4">
            <h3 className="text-xl font-bold">
              Are you sure you want to delete this "
              {isDeletedVal?.title || isDeletedVal?.name}"
            </h3>
            <p className="text-sm text-red-500 mt-3">
              Alert: Once deleted it can't be revert
            </p>
            <div className="flex justify-between items-center mt-8">
              <AdminButton
                label="Cancel"
                onBtnClick={() => setIsVisible(false)}
                className="w-50 text-white"
              />
              <AdminButton
                label="Confirm"
                onBtnClick={() => handleDelete(isDeletedVal)}
                className="w-50 text-white bg-red-500"
              />
            </div>
          </div>
        </ModalContainer>
      </div>
    </div>
  );
};

export default React.memo(AdminTable);
