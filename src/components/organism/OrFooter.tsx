import { Document } from "@contentful/rich-text-types";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import { AtNavbarLinkProps } from "../atoms/AtNavbarlink";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AtText } from "../atoms/AtText";
import { MlLinksList } from "../molecules/MlLinklist";

export type OrFooterProps = {
  logo: AtImageProps;
  description: Document;
  links: AtNavbarLinkProps[];
};

export function OrFooter({ links, logo, description }: OrFooterProps) {
  return (
    <footer className="w-full max-w-screen bg-neutral-200 py-6">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="flex flex-wrap xl:no-wrap gap-4 md:gap-6 lg:gap-8 justify-between">
          <div className="flex w-2/5 flex-col gap-4 md:w-full max-w-90">
            <AtImage {...logo} width={128} height={128} />
            <AtText As="div" variant="paragraph">
              {documentToReactComponents(description)}
            </AtText>
          </div>

          {links.map((link) => (
            <div
              key={link.text}
              className="flex md:w-1/2  lg:w-1/5 flex-col  text-neutral-800"
            >
              <MlLinksList {...link} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
