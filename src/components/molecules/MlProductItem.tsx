import { ContentfulContentType } from "@/types/contentful/content-model/contentful-types";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import { AtText } from "../atoms/AtText";

export interface MlProductItemProps {
  objectID: string;
  images: AtImageProps[];
  title: string;
  description: string;
  price: string;
  contentfulId: string;
}

export function MlProductItem({ images = [], title }: MlProductItemProps) {
  return (
    <div className="flex flex-row px-4 py-2 hover:bg-neutral-100 cursor-pointer items-center">
      <AtImage
        {...images[0]}
        width={40}
        height={40}
        className="w-10 h-10 mr-4"
      />

      <div className="flex flex-col ">
        <AtText variant="list-title">{title}</AtText>
      </div>
    </div>
  );
}
