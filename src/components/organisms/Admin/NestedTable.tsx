import React, { useState } from "react";
import ModalContainer from "../../atoms/ModalContainer";
import AdminButton from "../../atoms/AdminButton";

interface Product {
  _id: number | string;
  title: string;
  description: string;
  info?: string;
  bannerImage: string;
}

interface Deal {
  title: string;
  products: Product[];
}

interface DealTableProps {
  data: Deal[];
  handleEdit?: (title: string, product: Product) => void;
  handleDelete?: (product: Product) => void;
}

const NestedTable: React.FC<DealTableProps> = ({
  data,
  handleEdit,
  handleDelete,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDeletedVal, setIsDeletedVal] = useState<Product | null>(null);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border border-gray-300 border-collapse table-fixed">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="border px-2 py-2 w-[5%]" rowSpan={2}>
              S.No
            </th>
            <th className="border px-2 py-2" rowSpan={2}>
              Deal Title
            </th>
            <th colSpan={4} className="border px-2 py-2">
              Product
            </th>
            <th className="border px-2 py-2" rowSpan={2}>
              Action
            </th>
          </tr>
          <tr>
            <th className="border px-2 py-2 w-[15%]">Product Title</th>
            <th className="border px-2 py-2 w-[20%]">Description</th>
            <th className="border px-2 py-2 w-[20%]">Info</th>
            <th className="border px-2 py-2 w-[15%]">Banner</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.map((deal, index) =>
            deal.products.map((product, pIndex) => (
              <tr
                key={product._id}
                className="hover:bg-gray-100 hover:text-black"
              >
                {/* First two columns only for the first product of each deal */}
                {pIndex === 0 && (
                  <>
                    <td
                      rowSpan={deal.products.length}
                      className="border px-2 py-2 align-top"
                    >
                      {index + 1}
                    </td>
                    <td
                      rowSpan={deal.products.length}
                      className="border px-2 py-2 font-bold align-top"
                    >
                      {deal.title}
                    </td>
                  </>
                )}

                {/* Product details */}
                <td className="border px-2 py-2">{product.title}</td>
                <td className="border px-2 py-2">{product.description}</td>
                <td className="border px-2 py-2">{product.info || "-"}</td>
                <td className="border px-2 py-2">
                  <img
                    src={product.bannerImage}
                    alt={product.title}
                    className="w-12 h-12 object-contain mx-auto"
                  />
                </td>

                {/* Action buttons */}
                <td className="border px-2 py-2">
                  <div className="flex justify-center gap-2">
                    {handleEdit && (
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleEdit(deal.title, product)}
                      >
                        Edit
                      </button>
                    )}
                    {handleDelete && (
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => {
                          setIsVisible(true);
                          setIsDeletedVal(product);
                        }}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Delete confirmation modal */}
      <ModalContainer isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className="text-center py-4">
          <h3 className="text-xl font-bold">
            Are you sure you want to delete this "{isDeletedVal?.title}"
          </h3>
          <p className="text-sm text-red-500 mt-3">
            Alert: Once deleted it can't be reverted
          </p>
          <div className="flex justify-between items-center mt-8">
            <AdminButton
              label="Cancel"
              onBtnClick={() => setIsVisible(false)}
              className="w-50 text-white"
            />
            <AdminButton
              label="Confirm"
              onBtnClick={() => {
                if (isDeletedVal && handleDelete) {
                  handleDelete(isDeletedVal);
                }
                setIsVisible(false);
              }}
              className="w-50 text-white bg-red-500"
            />
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default React.memo(NestedTable);
