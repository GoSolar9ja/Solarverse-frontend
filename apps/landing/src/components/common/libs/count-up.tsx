"use client";

import { ComponentProps } from "react";
import ReactCountUp from "react-countup";

export default function CountUp(props: ComponentProps<typeof ReactCountUp>) {
  const { end = 500, duration = 2, ...rest } = props;
  return <ReactCountUp end={end} duration={duration} {...rest} />;
}
