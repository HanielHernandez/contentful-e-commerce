import React from "react";
import { Document } from "@contentful/rich-text-types";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import { AtText } from "../atoms/AtText";
import { AtButton } from "../atoms/AtButton";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

export interface MlHeroSectionProps {
  title: string;
  image: AtImageProps;
  description: Document;
  callToActionText?: string;
  url: string;
}

export function MlHeroSection({
  title,
  image,
  description,
  callToActionText = "",
  url,
}: MlHeroSectionProps) {
  return (
    <div className="w-full max-w-screen flex flex-col relative md:h-[calc(100vh-168px)] ">
      <AtImage
        {...image}
        className="absolute top-0 left-0 right-0 bottom-0 !w-full !h-full z-20 "
      />

      <div className="flex gap-4 z-30 p-4 py-8 justify-start container mx-auto items-end w-full h-full">
        <div>
          <AtText variant="h1" As="h1" className="text-white leading-tight">
            {title}
          </AtText>

          <div className="my-6 text-xl font-medium text-neutral-200">
            {documentToReactComponents(description)}
          </div>

          {callToActionText && (
            <Link href={url}>
              <AtButton color="primary" className="w-auto">
                {callToActionText}
              </AtButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
