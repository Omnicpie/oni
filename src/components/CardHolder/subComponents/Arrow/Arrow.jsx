import React from "react";

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0.5" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export default Arrow;
