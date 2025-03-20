import AtNavbarLink, { AtNavbarLinkProps } from "@/components/atoms/AtNavbarlink";
import {AtImage,  AtImageProps } from "../atoms/AtImage";

export interface OrNavbarProps {
  links: AtNavbarLinkProps[];
  logo: AtImageProps;
  search?: React.ReactNode
}


export default function OrNavbar({ links = [], search, logo }: OrNavbarProps) {
  return (
    <div className="w-full w-flex flex-col ">
      <div className="flex flex-row justify-between items-center py-4 bg-blue-800 text-white px-4 pu-2"></div>
      <div className="flex flex-row justify-between items-center px-4 py-4">
        <AtImage className="rounded-full" width={40} height={40} {...logo} />
        
        {search  &&
        <div className="hidden md:block w-full max-w-150">
            {search}
        </div>
        }
        <div>

        </div>
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
