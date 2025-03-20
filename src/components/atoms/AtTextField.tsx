import clsx from "clsx";

export interface AtTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  pill?: boolean;
}

const baseClass =
  "bg-neutral-200  text-neutral-600 leading-6 placeholder:text-neutral-400 px-4 py-3 focus:outline-blue-400 ";
export function AtTextField({ pill = false, className, ...props }: AtTextFieldProps) {
  return (
    <input
      {...props}
      className={clsx(
        baseClass,
        props.disabled && "disabled:opacity-75 cursor-not-allowed",
        pill ? "rounded-full" : "rounded-lg",
        className
      )}
    ></input>
  );
}
