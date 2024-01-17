import React from "react";
import List from "./List";

const Lists = ({ items, handleRemove, handleEdit }) => {
  return (
    <div>
      {items.map((data) => (
        <List
          key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default Lists;
