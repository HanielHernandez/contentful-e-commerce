import clsx from "clsx";
import React from "react";
type color = "primary" | "success" | "danger" | "default";

interface AtButtonProps {
  color?: color;
  label?: string;
  children?: React.ReactNode;
}

const colorClasses: Record<color, string> = {
  primary: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  danger: "bg-red-600 text-white ",
  default: "bg-neutral-600 text-white",
};

const baseClass = "rounded-md font-bold leading-6 px-4 py-3  hover:opacity-75";

export const AtButton = ({ color = "default", children }: AtButtonProps) => {
  return (
    <button className={clsx(baseClass, colorClasses[color])}>{children}</button>
  );
};
