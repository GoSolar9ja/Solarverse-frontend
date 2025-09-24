import React from "react";

export default function RoughBgIllustration(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="621"
      height="556"
      viewBox="0 0 621 556"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_g_185_1431)">
        <rect
          x="4"
          y="4"
          width="613"
          height="548"
          rx="20"
          fill="url(#paint0_linear_185_1431)"
        />
      </g>
      <defs>
        <filter
          id="filter0_g_185_1431"
          x="0"
          y="0"
          width="621"
          height="556"
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
            baseFrequency="0.10000000149011612 0.10000000149011612"
            numOctaves="3"
            seed="6591"
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
          <feMerge result="effect1_texture_185_1431">
            <feMergeNode in="displacedImage" />
          </feMerge>
        </filter>
        <linearGradient
          id="paint0_linear_185_1431"
          x1="310.5"
          y1="4"
          x2="310.5"
          y2="552"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A6B9E" />
          <stop offset="1" stopColor="#001D45" />
        </linearGradient>
      </defs>
    </svg>
  );
}
