import React from "react";

function Arrow({ children, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`arrow${disabled ? " disabled" : ""}`}
      style={{
        opacity: disabled ? "0.5" : "1",
      }}
    >
      {children}
    </button>
  );
}

export default Arrow;
