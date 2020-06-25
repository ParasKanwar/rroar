import React from "react";

export default () => {
  return (
    <svg
      width="210.6875px"
      height="100.021240234375px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="123.65625 13.9893798828125 252.6875 122.021240234375"
      style={{ background: "rgba(0, 0, 0, 0)" }}
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <filter
          id="editing-scratch"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood
            flood-color="#ddd"
            flood-opacity="0.75"
            result="COLOR-blu"
          ></feFlood>
          <feFlood
            flood-color="#666"
            flood-opacity="0.4"
            result="COLOR-red"
          ></feFlood>

          <feTurbulence
            baseFrequency=".05"
            type="fractalNoise"
            numOctaves="3"
            seed="0"
            result="Texture_10"
          ></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0,
      0 0 0 0 0,
      0 0 0 0 0,
      0 0 0 -2.1 1.1"
            in="Texture_10"
            result="Texture_20"
          ></feColorMatrix>

          <feColorMatrix
            result="Texture_30"
            type="matrix"
            values="0 0 0 0 0,
      0 0 0 0 0,
      0 0 0 0 0,
      0 0 0 -1.7 1.8"
            in="Texture_10"
          ></feColorMatrix>

          <feOffset dx="-3" dy="4" in="SourceAlpha" result="FILL_10"></feOffset>
          <feDisplacementMap
            scale="17"
            in="FILL_10"
            in2="Texture_10"
            result="FILL_20"
          ></feDisplacementMap>
          <feComposite
            operator="in"
            in="Texture_30"
            in2="FILL_20"
            result="FILL_40"
          ></feComposite>
          <feComposite
            operator="in"
            in="COLOR-blu"
            in2="FILL_40"
            result="FILL_50"
          ></feComposite>

          <feMorphology
            operator="dilate"
            radius="3"
            in="SourceGraphic"
            result="OUTLINE_10"
          ></feMorphology>
          <feComposite
            operator="out"
            in="OUTLINE_10"
            in2="SourceGraphic"
            result="OUTLINE_20"
          ></feComposite>
          <feDisplacementMap
            scale="7"
            in="OUTLINE_20"
            in2="Texture_10"
            result="OUTLINE_30"
          ></feDisplacementMap>
          <feComposite
            operator="arithmetic"
            k2="-1"
            k3="1"
            in="Texture_20"
            in2="OUTLINE_30"
            result="OUTLINE_40"
          ></feComposite>

          <feConvolveMatrix
            order="8,8"
            divisor="1"
            kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 "
            in="SourceGraphic"
            result="BEVEL_10"
          ></feConvolveMatrix>
          <feMorphology
            operator="dilate"
            radius="2"
            in="BEVEL_10"
            result="BEVEL_20"
          ></feMorphology>
          <feComposite
            operator="out"
            in="BEVEL_20"
            in2="BEVEL_10"
            result="BEVEL_30"
          ></feComposite>
          <feDisplacementMap
            scale="7"
            in="BEVEL_30"
            in2="Texture_10"
            result="BEVEL_40"
          ></feDisplacementMap>
          <feComposite
            operator="arithmetic"
            k2="-1"
            k3="1"
            in="Texture_20"
            in2="BEVEL_40"
            result="BEVEL_50"
          ></feComposite>
          <feOffset dx="-7" dy="-7" in="BEVEL_50" result="BEVEL_60"></feOffset>
          <feComposite
            operator="out"
            in="BEVEL_60"
            in2="OUTLINE_10"
            result="BEVEL_70"
          ></feComposite>

          <feOffset
            dx="-9"
            dy="-9"
            in="BEVEL_10"
            result="BEVEL-FILL_10"
          ></feOffset>
          <feComposite
            operator="out"
            in="BEVEL-FILL_10"
            in2="OUTLINE_10"
            result="BEVEL-FILL_20"
          ></feComposite>
          <feDisplacementMap
            scale="17"
            in="BEVEL-FILL_20"
            in2="Texture_10"
            result="BEVEL-FILL_30"
          ></feDisplacementMap>
          <feComposite
            operator="in"
            in="COLOR-red"
            in2="BEVEL-FILL_30"
            result="BEVEL-FILL_50"
          ></feComposite>

          <feMerge result="merge2">
            <feMergeNode in="BEVEL-FILL_50"></feMergeNode>
            <feMergeNode in="BEVEL_70"></feMergeNode>
            <feMergeNode in="FILL_50"></feMergeNode>
            <feMergeNode in="OUTLINE_40"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#editing-scratch)">
        <g
          transform="translate(165.13499665260315, 97.42218780517578)"
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        >
          <path
            d="M14.21 0L0.51 0L8.32-42.05L8.32-42.05Q14.66-42.75 23.90-42.75L23.90-42.75L23.90-42.75Q33.15-42.75 37.44-40.06L37.44-40.06L37.44-40.06Q41.73-37.38 41.73-31.97L41.73-31.97L41.73-31.97Q41.73-26.56 38.94-23.17L38.94-23.17L38.94-23.17Q36.16-19.78 31.36-18.69L31.36-18.69L31.36-18.69Q32.45-13.38 34.94-9.09L34.94-9.09L34.94-9.09Q37.25-5.06 39.94-3.78L39.94-3.78L39.94-3.78Q38.98-1.09 37.02 0.10L37.02 0.10L37.02 0.10Q35.07 1.28 32.29 1.28L32.29 1.28L32.29 1.28Q29.50 1.28 27.33-0.35L27.33-0.35L27.33-0.35Q25.15-1.98 23.42-4.99L23.42-4.99L23.42-4.99Q19.78-11.52 19.39-21.82L19.39-21.82L19.84-21.82L19.84-21.82Q24.58-21.95 26.94-24.42L26.94-24.42L26.94-24.42Q29.31-26.88 29.31-32.06L29.31-32.06L29.31-32.06Q29.31-38.53 23.87-38.78L23.87-38.78L22.46-38.78L22.46-38.78Q21.89-38.78 21.57-38.72L21.57-38.72L14.21 0ZM45.63-15.62L45.63-15.62L45.63-15.62Q45.63-27.71 51.90-35.33L51.90-35.33L51.90-35.33Q58.56-43.58 70.14-43.58L70.14-43.58L70.14-43.58Q78.53-43.58 82.75-39.52L82.75-39.52L82.75-39.52Q86.98-35.46 86.98-26.88L86.98-26.88L86.98-26.88Q86.98-13.82 80.32-6.21L80.32-6.21L80.32-6.21Q73.73 1.28 62.66 1.28L62.66 1.28L62.66 1.28Q54.02 1.28 49.82-3.04L49.82-3.04L49.82-3.04Q45.63-7.36 45.63-15.62ZM62.46-28.86L62.46-28.86L62.46-28.86Q59.58-17.34 59.58-8.26L59.58-8.26L59.58-8.26Q59.58-6.08 60.32-4.67L60.32-4.67L60.32-4.67Q61.06-3.26 63.01-3.26L63.01-3.26L63.01-3.26Q64.96-3.26 66.18-4.19L66.18-4.19L66.18-4.19Q67.39-5.12 68.35-7.23L68.35-7.23L68.35-7.23Q69.89-10.69 71.33-18.02L71.33-18.02L71.33-18.02Q72.77-25.34 72.90-28.38L72.90-28.38L72.90-28.38Q73.02-31.42 73.02-33.73L73.02-33.73L73.02-33.73Q73.02-36.03 72.32-37.50L72.32-37.50L72.32-37.50Q71.62-38.98 69.73-38.98L69.73-38.98L69.73-38.98Q67.84-38.98 66.56-37.82L66.56-37.82L66.56-37.82Q64.19-35.65 62.46-28.86ZM117.82 1.28L117.82 1.28L117.82 1.28Q109.63 1.28 108.86-10.37L108.86-10.37L97.86-10.37L97.86-10.37Q96.58-7.42 95.68-4.86L95.68-4.86L94.02 0L85.06 0L105.22-42.24L118.98-42.24L121.66-11.14L121.66-11.14Q122.30-4.42 124.86-2.43L124.86-2.43L124.86-2.43Q123.01 1.28 117.82 1.28ZM103.36-23.17L99.84-15.04L108.67-15.04L107.90-31.49L107.90-33.22L103.36-23.17ZM141.70 0L128 0L135.81-42.05L135.81-42.05Q142.14-42.75 151.39-42.75L151.39-42.75L151.39-42.75Q160.64-42.75 164.93-40.06L164.93-40.06L164.93-40.06Q169.22-37.38 169.22-31.97L169.22-31.97L169.22-31.97Q169.22-26.56 166.43-23.17L166.43-23.17L166.43-23.17Q163.65-19.78 158.85-18.69L158.85-18.69L158.85-18.69Q159.94-13.38 162.43-9.09L162.43-9.09L162.43-9.09Q164.74-5.06 167.42-3.78L167.42-3.78L167.42-3.78Q166.46-1.09 164.51 0.10L164.51 0.10L164.51 0.10Q162.56 1.28 159.78 1.28L159.78 1.28L159.78 1.28Q156.99 1.28 154.82-0.35L154.82-0.35L154.82-0.35Q152.64-1.98 150.91-4.99L150.91-4.99L150.91-4.99Q147.26-11.52 146.88-21.82L146.88-21.82L147.33-21.82L147.33-21.82Q152.06-21.95 154.43-24.42L154.43-24.42L154.43-24.42Q156.80-26.88 156.80-32.06L156.80-32.06L156.80-32.06Q156.80-38.53 151.36-38.78L151.36-38.78L149.95-38.78L149.95-38.78Q149.38-38.78 149.06-38.72L149.06-38.72L141.70 0Z"
            fill="#000"
          ></path>
        </g>
      </g>
      <style>
        {`
text {
    font-size: 64px;
    font-family: Arial Black;
    dominant-baseline: central;
    text-anchor: middle;
}
`}
      </style>
    </svg>
  );
};
