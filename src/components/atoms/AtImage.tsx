import { ContentfulAsset } from "@/types/contentful/content-model/contentful-types";
import Image, { ImageProps } from "next/image";
import { useMemo } from "react";

export interface AtImageProps extends Omit<ImageProps, "src" | "alt"> {
  file: ContentfulAsset;
  title: string;
  description: string;
}

export function AtImage({ file, ...rest }: AtImageProps) {
  const url = useMemo<string>(
    () => (file.url.startsWith("//") ? `https:${file.url}` : file.url),
    [file]
  );

  return <Image {...rest} src={url} alt={file.name || ""}></Image>;
}
