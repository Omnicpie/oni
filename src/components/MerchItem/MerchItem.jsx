import React from "react";

const MerchItem = ({ item }) => {
  return (
    <div>
      <h1>{item.name}</h1>
      <h3>Quantity: {item.quantity}</h3>
    </div>
  );
};

export default MerchItem;
