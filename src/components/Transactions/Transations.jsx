import React from "react";
import { Typography, Divider, Container } from "@mui/material";
import { TRANSACTIONS } from "../../__constants__/transactions";
import Transaction from "./subcomponents/Transaction/Transaction";
import { currencyFormat } from "./utils/utils";

const Transactions = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "30px" }}>
        Transactions
      </Typography>
      <Divider />
      <Container>
        <div style={{ marginTop: "15px" }}>
          {TRANSACTIONS.sort(
            (a, b) => new Date(b.datetime) - new Date(a.datetime)
          )
            .slice(0, 75)
            .map((trans) => (
              <Transaction item={trans} />
            ))}
        </div>
        {TRANSACTIONS.slice(0, 75).length !== TRANSACTIONS.length ? (
          <p style={{ fontSize: "10px", textAlign: "right" }}>
            Showing {TRANSACTIONS.slice(0, 75).length} most recent transactions
            out of {TRANSACTIONS.length}
          </p>
        ) : (
          <p style={{ fontSize: "10px", textAlign: "right" }}>
            Showing all {TRANSACTIONS.length} transactions
          </p>
        )}
        <div style={{ padding: "30px", border: "1px solid rgba(0,0,0,0.125)" }}>
          Available Balance:{" "}
          <span
            style={
              TRANSACTIONS.reduce(
                (previousValue, currentValue) =>
                  previousValue +
                  currentValue.amount * (currentValue.type === "in" ? 1 : -1),
                0
              ) < 0
                ? { color: "red", fontWeight: "600" }
                : { color: "green", fontWeight: "600" }
            }
          >
            {currencyFormat(
              TRANSACTIONS.reduce(
                (previousValue, currentValue) =>
                  previousValue +
                  currentValue.amount * (currentValue.type === "in" ? 1 : -1),
                0
              )
            )}
          </span>
        </div>
      </Container>
    </>
  );
};

export default Transactions;
