import clsx from "clsx";
import { useMemo } from "react";

export type AtTextTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "label"
  | "a"
  | "span"
  | "div";
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

const textSizes: Record<AtTextVariant, string> = {
  h1: "text-5xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  paragraph: "text-base",
  label: "text-base",
  link: "text-base",
  ["list-title"]: "text-base",
};

const fontWeights: Record<AtTextVariant, string> = {
  h1: "font-extrabold",
  h2: "font-bold",
  h3: "font-medium",
  h4: "font-semibold",
  h5: "font-medium",
  h6: "font-medium",
  paragraph: "",
  label: "font-medium",
  link: "font-medium",
  ["list-title"]: "font-bold",
};

const leadingClasses: Record<AtTextVariant, string> = {
  h1: "leading-tight",
  h2: "leading-tight",
  h3: "leading-snug",
  h4: "leading-snug",
  h5: "leading-normal",
  h6: "leading-normal",
  paragraph: "leading-relaxed",
  label: "",
  link: "",
  ["list-title"]: "leading-6",
};

const textColors: Record<AtTextVariant, string> = {
  h1: "text-gray-900",
  h2: "text-gray-900",
  h3: "text-gray-900",
  h4: "text-gray-800",
  h5: "text-gray-700",
  h6: "text-gray-600",
  paragraph: "text-gray-700",
  label: "text-gray-700",
  link: "text-blue-500 hover:text-blue-700",
  ["list-title"]: "text-neutral-900",
};

const atTextTagMap: Record<AtTextVariant, AtTextTag> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  paragraph: "p",
  label: "label",
  link: "a",
  ["list-title"]: "span",
};

export interface AtTextProps {
  As?: AtTextTag;
  variant?: AtTextVariant;
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

export const AtText = ({
  As,
  variant = "paragraph",
  children,
  href,
  className,
}: AtTextProps) => {
  const Tag = useMemo(() => {
    return As || atTextTagMap[variant];
  }, [As, variant]);

  return (
    <Tag
      className={clsx(
        className,
        textSizes[variant],
        textColors[variant],
        leadingClasses[variant],
        fontWeights[variant]
      )}
      href={href}
    >
      {children}
    </Tag>
  );
};
