import clsx from "clsx";
import React from "react";
type color = "primary" | "success" | "danger" | "default";

interface AtButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: color;
  label?: string;
  children?: React.ReactNode;
  rounded?: boolean;
  flat?: boolean;
}

const colorClasses: Record<color, string> = {
  primary: "bg-blue-600 text-white",
  success: "bg-green-600 text-white",
  danger: "bg-red-600 text-white ",
  default: "bg-neutral-600 text-white",
};

const flatColorClasses: Record<color, string> = {
  primary: "text-blue-600 hover:bg-blue-300 hover:text-white",
  success: "text-green-600 hover:bg-green-300 hover:text-white",
  danger: "text-red-600  hover:bg-red-600 hover:text-white ",
  default: "text-neutral-600 hover:bg-neutral-300 hovertext-white",
};

const baseClass = "font-bold leading-6 px-4 py-3  hover:opacity-75";

export const AtButton = ({
  color = "default",
  children,
  rounded = false,
  flat,
  className,
  ...otherProps
}: AtButtonProps) => {
  return (
    <button
      {...otherProps}
      className={clsx(
        baseClass,
        className,
        flat ? flatColorClasses[color] : colorClasses[color],
        rounded ? "rounded-full" : "rounded-md"
      )}
    >
      <div className="flex items-center">{children}</div>
    </button>
  );
};
