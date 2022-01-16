import React from "react";

function Arrow({ children, disabled, onClick, extraCss = "" }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`arrow${disabled ? " disabled" : ""} ${extraCss}`}
      style={{
        opacity: disabled ? "0.5" : "1",
      }}
    >
      {children}
    </button>
  );
}

export default Arrow;
