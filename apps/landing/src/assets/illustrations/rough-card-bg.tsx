import React from "react";

export default function RoughCardBg(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="252"
      height="278"
      viewBox="0 0 252 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_g_1011_253)">
        <rect x="4" y="4" width="244" height="270" rx="80" fill="#0EA1EF" />
      </g>
      <defs>
        <filter
          id="filter0_g_1011_253"
          x="0"
          y="0"
          width="252"
          height="278"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.25 0.25"
            numOctaves="3"
            seed="2170"
          />
          <feDisplacementMap
            in="shape"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displacedImage"
            width="100%"
            height="100%"
          />
          <feMerge result="effect1_texture_1011_253">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
