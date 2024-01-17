import React from "react";

const Forms = ({ title, setTitle, price, setPrice, handleSubmit }) => {
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="flex flex-col ml-6 my-6 flex-1">
        <span className="text-orange-300">지출 항목</span>
        <input
          type="text"
          className="border-0 border-b py-1 px-2 w-11/12 border-gray-400 focus:ring-0 focus:outline-none"
          onChange={handleChangeTitle}
          value={title}
        />
      </div>
      <div className="flex flex-col ml-3 mr-3 my-6 flex-1">
        <span className="text-orange-300">비용</span>
        <input
          type="number"
          className="border-0 border-b py-1 px-2 w-11/12 border-gray-400 focus:ring-0 focus:outline-none"
          onChange={handleChangePrice}
          value={price}
        />
      </div>
    </form>
  );
};

export default Forms;
