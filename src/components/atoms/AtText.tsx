import clsx from "clsx";

export type AtTextTag = "h1"|"h2"|"h3"|"h4"|"h5"|"h6"|"p"|"label"|"a"|"span"
export type AtTextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph"
  | "label"
  | "list-title"
  | "link";

const atTextVariantClasses: Record<AtTextVariant, string> = {
  h1: "text-4xl font-extrabold leading-tight text-gray-900", // For the largest heading
  h2: "text-3xl font-semibold leading-tight text-gray-900", // For a secondary heading
  h3: "text-2xl font-medium leading-snug text-gray-900", // Tertiary heading
  h4: "text-xl font-semibold leading-snug text-gray-800", // Quaternary heading
  h5: "text-lg font-medium leading-normal text-gray-700", // Fifth-level heading
  h6: "text-base font-medium leading-normal text-gray-600", // Sixth-level heading
  paragraph: "text-base leading-relaxed text-gray-700", // Default paragraph styling
  label: "text-sm font-medium text-gray-700", // For form labels
  link: "text-base text-blue-500 hover:text-blue-700 cursor-pointer font-medium ", // For links
 ["list-title"] :"text-base font-bold text-neutral-900 leading-6", // For links
};

export interface AtTextProps {
  As?: AtTextTag,
  variant?: AtTextVariant,
  children?: React.ReactNode
  className?: string
}

export const AtText = ({
  As = "span",
  variant = "paragraph",
  children,
  className,
}: AtTextProps) => {
  return (
    <As className={clsx(className,atTextVariantClasses[variant])}>{children}</As>
  );
};