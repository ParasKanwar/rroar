import React, { Fragment } from "react";

export default (props) => {
  return (
    <Fragment>
      <div
        style={{
          zIndex: 100,
          color: "white",
          width: "100%",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          top: 0,
        }}
      >
        <div
          className="comeFrom"
          style={{
            background: "black",
            width: 150,
            padding: "20px 30px",
            textAlign: "center",
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "uppercase",
          }}
        >
          {props.message ? props.message : "Error"}
        </div>
      </div>
      <style>
        {`
      @keyframes up1{
        from {
          transform:translateY(-50px);
          filter:hue-rotate(0deg);
          box-shadow:0px 0px 100px rgba(255,255,255,1);
        }
        to {
          transform:translateY(100px);
          filter:hue-rotate(360deg);
          box-shadow:0px 0px 0px rgba(255,255,255,1);
        }
      }
      .comeFrom{
        animation:up1 1s ease-out forwards;
      }
      `}
      </style>
    </Fragment>
  );
};
