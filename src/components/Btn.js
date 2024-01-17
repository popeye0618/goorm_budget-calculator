import React from "react";

const Btn = ({ text, icon, handleSubmit, handleRemoveAll }) => {
  const handleClick = () => {
    if (text === "제출") {
      handleSubmit();
    } else if (text === "목록 지우기") {
      handleRemoveAll();
    }
  };

  return (
    <button
      className="bg-lime-600 min-w-min max-w-20 h-9 px-4 my-3 ml-4 flex items-center justify-between text-white rounded text-sm hover:shadow-strong whitespace-nowrap"
      onClick={handleClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default Btn;
