import React, { Fragment } from "react";

const Loading = ({ style, color, size }) => {
  return (
    <Fragment>
      <svg className="rotate2" style={{ ...style }}>
        <circle
          style={{
            strokeDashoffset: 400,
            strokeDasharray: 400,
          }}
          fill="rgba(0,0,0,0)"
          className="rotate1"
          r={style.width / 3}
          cx={style.height / 2}
          cy={style.width / 2}
          stroke={color}
          strokeWidth={size}
        ></circle>
      </svg>
      <style>{`
      .rotate1{
        animation:rotate1 2s infinite ease-in-out;
      }
      @keyframes rotate1{
        0%{
            stroke-dashoffset:410;
          }
          50%{
            stroke-dashoffset:0;
            
          }
          100%{
            stroke-dashoffset:-410;
          }
      }
      .rotate2{
        animation:rotate2 2s infinite ease-in-out forwards;
      }
      @keyframes rotate2{
          0%{
            transform: rotate(0deg);
            opacity:0;
          }
          50%{
            transform: rotate(180deg);
            opacity:1;
          }
          100%{
            transform:rotate(360deg);
            opacity:0;
          }
      }
      
      
      
      `}</style>
    </Fragment>
  );
};
export default Loading;
Loading.defaultProps = {
  style: { width: 200, height: 200, background: "rgba(0,0,0,0)" },
  color: "black",
  size: 4,
};
