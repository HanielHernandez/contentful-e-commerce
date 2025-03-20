import AtNavbarLink, { AtNavbarLinkProps } from "@/components/atoms/AtNavbarlink";
import {AtImage,  AtImageProps } from "../atoms/AtImage";

export interface MlNavbarProps {
  links: AtNavbarLinkProps[];
  logo: AtImageProps;
}


export default function theNavbar({ links = [], logo }: MlNavbarProps) {
  return (
    <div className="w-full w-flex flex-col ">
      <div className="flex flex-row justify-between items-center py-4 bg-blue-800 text-white px-4 pu-2">
        
      </div>
      <div className="flex flex-row justify-between items-center px-4 py-4">
        <AtImage className="rounded-full" width={40} height={40} {...logo} />
      </div>

      <nav className="w-full">
        <ul className="flex flex-row items-center justify-center w-full">
          {links.map((link) => (
            <li key={link.text}>
              <AtNavbarLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
