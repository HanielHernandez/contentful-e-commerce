import { ContentfulAsset } from "@/types/contentful/content-model/contentful-types";
import Image, { ImageProps } from "next/image";
import { useMemo } from "react";

export interface AtImageProps extends Omit<ImageProps, "src" | "alt"> {
  file: ContentfulAsset;
  title: string;
  description: string;
  width: number;
  height: number;
}

export function AtImage({ file, width, height , className}: AtImageProps) {
  const url = useMemo<string>(
    () => (file.url.startsWith("//") ? `https:${file.url}` : file.url),
    [file]
  );

  return (
    <Image
      className={className}
      src={url}
      alt={file.name || ""}
      width={width}
      height={height}
    ></Image>
  );
}
