import React from "react";
import List from "./List";

const Lists = ({ items, setItems, handleRemove }) => {
  return (
    <div>
      {items.map((data) => (
        <List
          key={data.id}
          id={data.id}
          title={data.title}
          price={data.price}
          items={items}
          setItems={setItems}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Lists;
