import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { AtTextProps } from "../atoms/AtText";

export interface AtRichTextProps extends AtTextProps {
  document: Document;
}

export default function MlRichText({ document }: AtRichTextProps) {
  return documentToReactComponents(document);
}
