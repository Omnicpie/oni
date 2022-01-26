import { Card } from "@mui/material";
import React from "react";
import defaultCardImage from "../../images/nopixel.png";

const MerchItem = ({ item }) => {
  return (
    <Card sx={{ margin: "30px", padding: "10px 30px", display: "flex" }}>
      <div style={{ marginRight: "30px" }}>
        <img src={defaultCardImage} alt="item" />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <h2>{item.name}</h2>
        <p>Quantity: {item.quantity}</p>
      </div>
    </Card>
  );
};

export default MerchItem;
