import React from "react";
import { STAFF } from "../../../../__constants__/staff";
import { currencyFormat } from "../../utils/utils";
import "./Transaction.scss";

function timeDifference(date1, date2) {
  var difference = date1.getTime() - date2.getTime();
  var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;
  var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;
  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;
  var secondsDifference = Math.floor(difference / 1000);
  if (daysDifference > 0) return `${daysDifference} days`;
  if (hoursDifference > 0) return `${hoursDifference} hours`;
  if (minutesDifference > 0) return `${minutesDifference} minutes`;
  return `${secondsDifference} seconds`;
}

const Transaction = ({ item }) => {
  const staffInfo = STAFF.find((member) => member.id === item.userid);
  return (
    <div
      style={{
        marginBottom: "15px",
        background: "rgba(197,197,197,0.125)",
        padding: "15px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <p
          className={item.type === "in" ? "green" : "red"}
          style={{ width: "15%" }}
        >
          <b>
            {item.type === "in" ? "+" : "-"}
            {currencyFormat(item.amount)}
          </b>
        </p>
        <p>{item.description}</p>
        <div
          style={{ marginLeft: "auto", textAlign: "right", lineHeight: "14px" }}
        >
          <p>
            {timeDifference(new Date(Date.now()), new Date(item.datetime))} ago
          </p>
          <p>{staffInfo.name}</p>
        </div>
      </div>
      <span style={{ fontSize: "12px" }}>
        TRANSACTION ID: <b>{item.id}</b>
      </span>
    </div>
  );
};

export default Transaction;
