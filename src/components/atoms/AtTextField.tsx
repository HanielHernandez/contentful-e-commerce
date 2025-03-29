import clsx from "clsx";

export interface AtTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  pill?: boolean;
}

const baseClass =
  "w-full bg-neutral-100 border border-neutral-300  text-neutral-800 leading-6 placeholder:text-neutral-400 px-4 py-3 focus:outline-blue-400 ";
export function AtTextField({
  pill = false,
  className,
  ...props
}: AtTextFieldProps) {
  return (
    <input
      {...props}
      className={clsx(
        baseClass,
        props.disabled && "disabled:opacity-75 cursor-not-allowed",
        pill ? "rounded-full" : "rounded-sm",
        className
      )}
    ></input>
  );
}
