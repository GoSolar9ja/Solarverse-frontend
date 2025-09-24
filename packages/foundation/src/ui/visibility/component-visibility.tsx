import React from "react";

const ComponentVisibility = ({
  children,
  visible,
}: {
  children: React.ReactNode;
  visible: boolean;
}) => {
  return visible ? children : null;
};

export { ComponentVisibility };
