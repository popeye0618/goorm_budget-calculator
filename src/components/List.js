import React from "react";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
const List = ({ id, title, price, items, setItems, handleRemove }) => {
  return (
    <div
      className={`flex items-center justify-between h-10 px-4 py-1 my-2 mx-4 bf-gray-100 text-gray-600 bg-white border`}
    >
      <span className="flex-1">{title}</span>
      <span className="text-gray-400 flex-1">{price}</span>
      <div className="px-1 float-end">
        <button className="text-green-500 mr-6">{<FaPen />}</button>
        <button className="text-red-600" onClick={() => handleRemove(id)}>
          {<FaTrash />}
        </button>
      </div>
    </div>
  );
};

export default List;
