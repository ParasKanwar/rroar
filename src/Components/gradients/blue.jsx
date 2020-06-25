import React from "react";

const Black = ({ children, height, inverse }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundImage: inverse
          ? "linear-gradient( to top right,rgba(36, 37, 42, 1),rgba(36, 37, 42, 1))"
          : "linear-gradient( to top right,rgba(0,0,0,0.6),black)",
      }}
    >
      {children}
    </div>
  );
};
// rgba(34, 49, 63, 1);
export default Black;
