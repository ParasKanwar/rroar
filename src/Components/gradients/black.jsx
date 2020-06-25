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
          ? "linear-gradient( to top right,black,rgba(108, 122, 137, 0.5))"
          : "linear-gradient( to top right,rgba(108, 122, 137, 0.5),black)",
      }}
    >
      {children}
    </div>
  );
};

export default Black;
